import rules from '../static-data/rules'
import ruleSetTemplates from '../static-data/rules/rule_set_templates';
import * as api from './coronaApi';
import * as moment from 'moment'

/**
 * @typedef {'unknown' | 'closed' | 'forbidden' | 'limit' | 'nolimit' | 'open'} RuleStatus
 */

/**
 * @typedef {'country' | 'state'} RuleIncidenceSource
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
 * @property {{date: string, link: string}[]} references
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
    references: {
      de: rules.DE.references,
      states: {}
    },
    settings: {
      de: {},
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
    if(state.settings){
      result.settings.states[s] = state.settings;
    }    
    if(state.references){
      result.references.states[s] = state.references;
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
      let refCopy = JSON.parse(JSON.stringify(referencedSet))
      refCopy['__include_tpl_name'] = item.include;
      if(item.references){
        refCopy.references = item.references;
      }
      
      result.push(refCopy);
    }    
  
  }

  return result;
}


function lastXDays(history, days){
  if(history.length <= 0) return [];
  let records = history.slice(Math.max(history.length - days, 0));
  let result = records.map(r => r.weekIncidence);
  return result;
}

function parseMomentOptional(date, ctx){
  if(!date) return null;
  try{
    return moment(date, 'YYYY-MM-DD');
  }catch(e){
    console.error('failed parse date', date, 'ctx', ctx);
    return null;
  }
}

function firstIndexWhere(data, days, cond){
  let matches = 0;
  for(let i = data.length - 1; i >= 0; i--){
    if(cond(data[i])){
      matches++;
    } else{
      matches = 0;
    }

    if(matches == days) return i;
  }

  return -1;
}


/**
 * 
 * @param {RuleSet} rs 
 */
function isRuleSetActive(rs, incidenceHistory, today, currentIncidence){
  if(!rs.conditions) return true; // RS without conditions are dispayed always

  let conditions = rs.conditions;

  let fromDate = parseMomentOptional(conditions.date_from);
  let toDate = parseMomentOptional(conditions.date_to);
  // let toDate = this.__parseMomentOptional(rs.incidence_from);
  // let toDate = this.__parseMomentOptional(rs.incidence_to);
  if(fromDate && today.isBefore(fromDate)) return false;
  if(toDate && today.isAfter(toDate)) return false;

  


  if(Number.isFinite(conditions.incidence_days)) {
    // algo (example 'to'):
    // IF last x days < to -> we are fine
    // IF last x days > 'to' -> we are out

    // what about a < x, b > x, c < x ??
    //  --> we take last_days * 3 of history data
    // go back in time and try to find values where x days in a roll > x
    // or where x days in a roll < x


    // 
    // try to get the 

    // [oldest, old, new]
    let lastIncidences = lastXDays(incidenceHistory, (conditions.incidence_days - 1));
    lastIncidences = [...lastIncidences].concat([currentIncidence]);

    // lastIncidences = [0, 51, 20]; // fake data

    if(Number.isFinite(conditions.incidence_to)){
      let matchedDays = lastIncidences.filter(incidence => incidence <= conditions.incidence_to);

      // none of last days matched to condition
      if(matchedDays.length <= 0) return false;

      if(matchedDays.length !== lastIncidences.length) {
        // not all last days where <= to value
        // we have to run the difuse check
        let muchOlderIncidences = lastXDays(incidenceHistory, (conditions.incidence_days * 2) -1 );
        muchOlderIncidences = [...muchOlderIncidences].concat(currentIncidence);

        // muchOlderIncidences = [55,54,5,20,30,70,40];

        let idxWhereBelow = firstIndexWhere(muchOlderIncidences, conditions.incidence_days, (incidence) => incidence <= conditions.incidence_to);
        let idxWhereAbove = firstIndexWhere(muchOlderIncidences, conditions.incidence_days, (incidence) => incidence > conditions.incidence_to);

        if(idxWhereAbove === -1 && idxWhereBelow === -1){
          console.error('difuse situation detected', rs, incidenceHistory, window.document.location.href);
          return false;
        }

        if(idxWhereAbove > idxWhereBelow){
          // prev. we where above, now we should wait
          return false;
        }

        // from here everything fine
        // the to rule matched
      } else{
        // all matched to condition... we are fine here
      }
    }

    if(Number.isFinite(conditions.incidence_from)){
      let matchedDays = lastIncidences.filter(incidence => incidence > conditions.incidence_from);
      // none of last days matched to condition
      if(matchedDays.length <= 0) return false;

      if(matchedDays.length !== lastIncidences.length) {
        // not all last days where <= to value
        // we have to run the difuse check
        let muchOlderIncidences = lastXDays(incidenceHistory, (conditions.incidence_days * 2) -1 );
        muchOlderIncidences = [...muchOlderIncidences].concat(currentIncidence);

        // muchOlderIncidences = [55,54,5,20,30,70,40];
        
        let idxWhereAbove = firstIndexWhere(muchOlderIncidences, conditions.incidence_days, (incidence) => incidence >= conditions.incidence_from);
        let idxWhereBelow = firstIndexWhere(muchOlderIncidences, conditions.incidence_days, (incidence) => incidence < conditions.incidence_from);

        if(idxWhereAbove === -1 && idxWhereBelow === -1){
          console.error('difuse situation detected', rs, incidenceHistory, window.document.location.href);
          return false;
        }

        if(idxWhereBelow > idxWhereAbove){
          // prev. we where above, now we should wait
          return false;
        }

        // from here everything fine
        // the to rule matched
      } else{
        // all matched to condition... we are fine here
      }
    }
    
    // to and from OK
    return true;

  } else{
    let currentDateIncidence = currentIncidence;
    if(Number.isFinite(conditions.incidence_from)){
      if(currentDateIncidence < conditions.incidence_from) return false;
    }
    if(Number.isFinite(conditions.incidence_to)){
      if(currentDateIncidence > conditions.incidence_to) return false;
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
 *  globalStateSettings: {rule_incidence_src: RuleIncidenceSource },
 *  country: RuleSet[],
 *  state: RuleSet[],
 *  references: {{date: string, link: string}[]},
 * }}
 */
export function getAllRulesFor(state, area){
  let result = {
    globalCountryAnnotations: __summary.annotations?.de,
    globalStateAnnotations: __summary.annotations?.states[state],

    globalStateSettings: __summary.settings?.states[state] || {},

    /** @type {{date: string, link: string}[]} */
    references: [],

    /** @type {RuleSet[]} */
    country: [],

    /** @type {RuleSet[]} */
    state: []
  };

  let existingArea = __summary.areas[area];
  if(!existingArea) return result;
  let ruleSets = existingArea.country?.rule_sets;
  result.country = resolveRuleSetReferences(ruleSets);
  if(__summary.references.de){
    result.references = [].concat(__summary.references.de);
  }

  if(__summary.references.states && __summary.references.states[state]){
    result.references = __summary.references.states[state].concat(result.references);
  }

  let stateData = existingArea.states[state];
  if(!stateData) return result;
  if(!stateData.rule_sets) return result;
  result.state = resolveRuleSetReferences(stateData.rule_sets)

  return result;
}


export async function getActiveRuleFor(state, district, area){
  let today = moment().startOf('day');
  // today = moment('2021-03-08', 'YYYY-MM-DD'); // todo simulate 8.3.2021

  let allRules = getAllRulesFor(state, area);

  let districtTodayData = await api.getTodayDataForDistrict(district);
  let stateTodayData = await api.getTodayDataForState(state);
  
  let districtIncidence = districtTodayData.weekIncidence;
  let stateIncidence = stateTodayData.weekIncidence;


  let incidenceHistory = [];
  let ruleIncidence;
  if(allRules.globalStateSettings.rule_incidence_src === 'state'){
    // rule calculation is based on incidence of the state and not on district
    let historyRes = await api.getHistory(`/states/${state}/history/incidence/360`);
    incidenceHistory = historyRes.data[state].history;    
    ruleIncidence = stateIncidence;
  } else{
    let historyRes = await api.getHistory(`/districts/${district}/history/incidence/360`);
    incidenceHistory = historyRes.data[district].history;
    ruleIncidence = districtIncidence;
  }


  // districtIncidence = lastXDays(incidenceHistory, 1)[0].weekIncidence;
  let countryRuleSets = allRules.country.filter(rs => isRuleSetActive(rs, incidenceHistory, today, ruleIncidence) );  
  let stateRuleSets = allRules.state.filter(rs => isRuleSetActive(rs, incidenceHistory, today, ruleIncidence) );  
  
  return {
    districtIncidence: districtIncidence,
    stateIncidence: stateIncidence,
    country: countryRuleSets,
    state: stateRuleSets,

    references: allRules.references,
    
    globalCountryAnnotations: allRules.globalCountryAnnotations,
    globalStateAnnotations: allRules.globalStateAnnotations,

    globalStateSettings: allRules.globalStateSettings,
  };


  
}