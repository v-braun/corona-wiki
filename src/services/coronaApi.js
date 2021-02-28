import axios from 'axios'

let caches = {};

export async function getStates(){
  if(caches['getStates']) return caches['getStates'];
  let result = await axios.get('https://api.corona-zahlen.org/states');
  caches['getStates'] = result.data;
  return result.data;
}

export async function getDistricts(){
  if(caches['getDistricts']) return caches['getDistricts'];
  let result = await axios.get('https://api.corona-zahlen.org/districts');
  caches['getDistricts'] = result.data;
  return result.data;
}


export async function getStatesCasesHistory(stateAbbreviation){
  // if(caches['getStatesCasesHistory']) return caches['getDistricts'];
  let result = await axios.get(`https://api.corona-zahlen.org/states/${stateAbbreviation}/history/cases`);
  return result.data;
}

export async function getHistory(endpoint){
  let result = await axios.get(`https://api.corona-zahlen.org${endpoint}`);
  return result.data;
}