import rules from '../static-data/rules'


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
export function getRulesFor(state, area){
  let result = {
    globalCountryAnnotations: __summary.annotations?.de,
    globalStateAnnotations: __summary.annotations?.states[state],

    /** @type {RuleSet[]} */
    country: null,

    /** @type {RuleSet[]} */
    state: null
  };

  let existingArea = __summary.areas[area];
  if(!existingArea) return result;
  result.country = existingArea.country?.rule_sets;

  let stateData = existingArea.states[state];
  if(!stateData) return result;
  result.state = stateData?.rule_sets;

  return result;
}

