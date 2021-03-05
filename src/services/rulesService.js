import rules from '../static-data/rules'
import ruleSetTemplates from '../static-data/rules/rule_set_templates';
import * as api from './coronaApi';
import * as moment from 'moment'

/**
 * @typedef {'unknown' | 'closed' | 'forbidden' | 'limit' | 'nolimit' | 'open'} RuleStatus
 */

/**
 * @typedef RuleLine
 * @type {object}
 * @property {string} text
 * @property {RuleStatus} status
 */ 

/**
 * @typedef RuleConditions
 * @type {object}
 * @property {string} [date_from]
 * @property {string} [date_to] 
 * 
 * @property {number} [incidence_from]
 * @property {number} [incidence_to]  
 * @property {number} [incidence_days]
 */ 

/**
 * @typedef RuleSet
 * @type {object}
 * @property {{date: string, link: string}} reference
 * @property {RuleLine[]} rules
 * 
 * @property {RuleConditions} [conditions]

 */





const __summary = buildSummary();

function initArea(result, area){
  if(!result.areas){
    result.areas = {};
  }
  if(!result.areas[area]){
    result.areas[area] = {
      country: null,
      states: {}
    }
  }
}


function buildSummary(){
  let result = {
    annotations: {
      de: rules.DE.annotations || [],
      states: {}
    },
    areas: {}
  }

  // result.areas['d'].


  for(let [a, val] of Object.entries(rules.DE.areas)){
    initArea(result, a);
    result.areas[a].country = val;
  }

  for(let [s, state] of Object.entries(rules.states)){
    if(state.annotations){
      result.annotations.states[s] = state.annotations;
    }

    for(let [a, rules] of Object.entries(state.areas)){
      initArea(result, a);
      result.areas[a].states[s] = rules;
    }
  }

  return result;
}


export function getSummary(){
  return __summary;
}


/**
 * @param {RuleSet[]} ruleSets 
 */
function resolveRuleSetReferences(ruleSets){
  let result = [];
  for(let item of ruleSets){
    if(!item.include){
      result.push(item);
      continue;
    }

    let reference = ruleSetTemplates[item.include];
    if(!reference){
      console.error('could not find reference', item.include, item);
      continue; 
    }

    for(let referencedSet of reference ){
      referencedSet['__include_tpl_name'] = item.include;
      result.push(referencedSet);
    }    
  
  }

  return result;
}


function lastXDays(history, days){
  if(history.length <= 0) return [];
  return history.slice(Math.max(history.length - days, 0));
}

function parseMomentOptional(date, ctx){
  if(!date) return null;
  try{
    return moment(date, 'YYYY-MM-DD');
  }catch(e){
    console.log('failed parse date', date, 'ctx', ctx);
    return null;
  }
}

/**
 * 
 * @param {RuleSet} rs 
 */
function isRuleSetActive(rs, incidenceHistory, today){
  if(!rs.conditions) return true; // RS without conditions are dispayed always

  let conditions = rs.conditions;

  let fromDate = parseMomentOptional(conditions.date_from);
  let toDate = parseMomentOptional(conditions.date_to);
  // let toDate = this.__parseMomentOptional(rs.incidence_from);
  // let toDate = this.__parseMomentOptional(rs.incidence_to);
  if(fromDate && today.isBefore(fromDate)) return false;
  if(toDate && today.isAfter(toDate)) return false;

  if(Number.isFinite(conditions.incidence_days)) {
    let lastDaysIncidence = lastXDays(incidenceHistory, conditions.incidence_days);
    if(!Number.isFinite(conditions.incidence_from) && !Number.isFinite(conditions.incidence_to)){
      console.error(`unexpected conditions.incidence_days (${conditions.incidence_days}) without incidence_from / incidence_from`, rs);
      return false;
    }

    if(Number.isFinite(conditions.incidence_from)){
      let matchedDays = lastDaysIncidence.filter(incidence => incidence.weekIncidence >= conditions.incidence_from);
      if(matchedDays.length != lastDaysIncidence.length) return false;
    }
    if(Number.isFinite(conditions.incidence_to)){
      let matchedDays = lastDaysIncidence.filter(incidence => incidence.weekIncidence <= conditions.incidence_to);
      if(matchedDays.length != lastDaysIncidence.length) return false;
    }
    
    return true;
  } else{
    let currentDateIncidence = lastXDays(incidenceHistory, 1)[0];
    if(Number.isFinite(conditions.incidence_from)){
      if(currentDateIncidence.weekIncidence < conditions.incidence_from) return false;
    }
    if(Number.isFinite(conditions.incidence_to)){
      if(currentDateIncidence.weekIncidence > conditions.incidence_to) return false;
    }

    return true;
  }
}


/**
 * 
 * @param {string} state the state (bundesland) to search for
 * @param {string} area the life
 * @returns {{
 *  globalCountryAnnotations: object,
 *  globalStateAnnotations: object,
 *  country: RuleSet[],
 *  state: RuleSet[],
 * }}
 */
export function getAllRulesFor(state, area){
  let result = {
    globalCountryAnnotations: __summary.annotations?.de,
    globalStateAnnotations: __summary.annotations?.states[state],

    /** @type {RuleSet[]} */
    country: [],

    /** @type {RuleSet[]} */
    state: []
  };

  let existingArea = __summary.areas[area];
  if(!existingArea) return result;
  let ruleSets = existingArea.country?.rule_sets;
  result.country = resolveRuleSetReferences(ruleSets)

  let stateData = existingArea.states[state];
  if(!stateData) return result;
  result.state = stateData?.rule_sets;

  return result;
}


export async function getActiveRuleFor(state, district, area){
  let today = moment().startOf('day');
  today = moment('2021-03-08', 'YYYY-MM-DD');

  let allRules = getAllRulesFor(state, area);
  let historyRes = await api.getHistory(`/districts/${district}/history/incidence/360`);
  let incidenceHistory = historyRes.data[district].history;

  let countryRuleSets = allRules.country.filter(rs => isRuleSetActive(rs, incidenceHistory, today) );  
  let stateRuleSets = allRules.state.filter(rs => isRuleSetActive(rs, incidenceHistory, today) );  

  return {
    country: countryRuleSets,
    state: stateRuleSets,
    globalCountryAnnotations: allRules.globalCountryAnnotations,
    globalStateAnnotations: allRules.globalStateAnnotations,
  };
}