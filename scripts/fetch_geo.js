async function fetchStates(){
  let states = (await fetch('https://api.corona-zahlen.org/states/').then(res => res.json())).data;
 let resultS = {};
 for(const [k, val] of Object.entries(states)){
   resultS[k] = {
     abbreviation: val.abbreviation,
     name: val.name
   };
 }    
 
 return resultS;
}

async function fetchDistricts(){
 let districts = (await fetch('https://api.corona-zahlen.org/districts/').then(res => res.json())).data;

 let resultD = {};
 for(const [k, val] of Object.entries(districts)){
   resultD[k] = {
     ags: val.ags,
     name: val.name,
     county: val.county,
     stateAbbreviation: val.stateAbbreviation
   };
 }
 
 return resultD;
}



async function main(){
 let states = await fetchStates();
 let districts = await fetchDistricts();

 
 let result = {states: states, districts: districts};
 
 
 document.getElementById('result').innerHTML = JSON.stringify(result, undefined, 2);
}

main();
