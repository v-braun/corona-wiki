import rules from '../static-data/rules'


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

export function getRulesFor(state, area){
  console.log('__summary', __summary)
  let result = {
    globalCountryAnnotations: __summary.annotations?.de,
    globalStateAnnotations: __summary.annotations?.states[state],
    country: null,
    state: null
  };

  let existingArea = __summary.areas[area];
  if(!existingArea) return result;
  result.country = existingArea.country;

  let stateData = existingArea.states[state];
  if(!stateData) return result;
  result.state = stateData;

  return result;
}