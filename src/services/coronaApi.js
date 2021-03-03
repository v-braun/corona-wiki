import axios from 'axios'
import localforage from 'localforage'

import { setupCache } from 'axios-cache-adapter'
const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  store: localforage
});
const api = axios.create({
  adapter: cache.adapter
});




// let longTermCache = {};

export async function getStates(){
  // if(longTermCache['getStates']) return caches['getStates'];
  let result = await api.get('https://api.corona-zahlen.org/states');
  // longTermCache['getStates'] = result.data;
  return result.data;
}

export async function getDistricts(){
  // if(longTermCache['getDistricts']) return caches['getDistricts'];
  let result = await api.get('https://api.corona-zahlen.org/districts');
  // longTermCache['getDistricts'] = result.data;
  return result.data;
}


export async function getStatesCasesHistory(stateAbbreviation){
  // if(caches['getStatesCasesHistory']) return caches['getDistricts'];
  
  let result = await api.get(`https://api.corona-zahlen.org/states/${stateAbbreviation}/history/cases`);
  return result.data;
}

export async function getHistory(endpoint){
  let result = await api.get(`https://api.corona-zahlen.org${endpoint}`);
  return result.data;
}