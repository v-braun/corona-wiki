import { Component } from 'react';
import PropTypes from 'prop-types'
import * as ruleService from '../services/rulesService';
import geo from '../static-data/geo';

import './area-rule-container.scss';
import { AreaRuleSets } from './area-rule-sets';


/**
* @augments {Component<{
    area: string, 
    state: string, 
    district: string,
    districtName: string,
}, 
{
  
}
>}
*/
export class AreaRuleContainer extends Component{
  static propTypes = {
    area: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    stateIco: PropTypes.string,
    district: PropTypes.string.isRequired,
    districtName: PropTypes.string.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      /** @type {import('../services/rulesService').RuleSet[]} */
      activeCountryRules: null,

      /** @type {import('../services/rulesService').RuleSet[]} */
      activeStateRules: null,

      
      stateIco: null,
      stateName: null,

      activeDistrictIncidence: null,

      globalCountryAnnotations: null,
      globalStateAnnotations: null,

    };
  }

  async getCountryState(countryRules){
    if(!countryRules){
      return {annotations: null, status: null, rules: []}
    }
  }
  
  async updateUI(){
    // let rules = await ruleService.getAllRulesFor(this.props.state, this.props.area);
    let rules = await ruleService.getActiveRuleFor(this.props.state, this.props.district, this.props.area);

    let newState = {
      activeCountryRules: rules.country,
      activeStateRules: rules.state,
      activeDistrictIncidence: rules.districtIndicence,
      
      globalCountryAnnotations: rules.globalCountryAnnotations,
      globalStateAnnotations: rules.globalStateAnnotations,
    }

    
    let state = geo.states[this.props.state];
    if(state.ico){
      newState.stateIco = state.ico;
    } else{
      newState.stateIco = `https://avatars.dicebear.com/api/initials/${state.ico}.svg`;
    }

    newState.stateName = state.name;

    this.setState(newState);
  }

  async componentDidMount(){
    await this.updateUI();
  }
  async componentDidUpdate(prevProps){
    let allSame = (prevProps.area === this.props.area && 
                   prevProps.state === this.props.state && 
                   prevProps.district === this.props.district)

    if(allSame) return;

    await this.updateUI();
  }


  renderAnnotations(annotations){
    return (
      Object.entries(annotations).map(([k,v]) => {
        return <div key={k} className={`annotation ${k}`}>{v}</div>
      })
    )
  }



  render(){
    let activeCountryRules = this.state.activeCountryRules;
    let activeStateRules = this.state.activeStateRules;
    let stateName = this.state.stateName;
    let stateIco = this.state.stateIco;
    let countryGlobalAnnotation = this.state.globalCountryAnnotations;
    let stateGlobalAnnotation = this.state.globalStateAnnotations;
    let activeDistrictIncidence = this.state.activeDistrictIncidence;


    
    return (
      <div className="area-rules">

        {(activeCountryRules && activeCountryRules.length > 0 ) &&
          <div key="country-container" className="rule-main-ctr rule-main-country">
            {countryGlobalAnnotation &&
              <div className="annotations global-annotations country-annotations">
                {this.renderAnnotations(countryGlobalAnnotation)}
              </div>            
            }

            <div className="rule-main-ctr-header">
              <div className="rule-main-ico">
                <img alt="Deutschlandweite Regelungen" src="https://img.icons8.com/cute-clipart/64/000000/germany.png"/>
              </div>
              <label className="rule-main-title">Deutschlandweite Regelungen</label>
            </div>
            <div className="rule-main-ctr-body">
            <AreaRuleSets 
                ruleSets={activeCountryRules}
                state={this.props.state}
                district={this.props.district}
                districtName={this.props.districtName}
                districtIncidence={activeDistrictIncidence}
              />
            </div>            
          </div>
        }

        {(activeStateRules && activeStateRules.length > 0 ) &&
          <div key="state-container" className="rule-main-ctr rule-main-state">
            {stateGlobalAnnotation &&
              <div className="annotations global-annotations state-annotations">
                {this.renderAnnotations(stateGlobalAnnotation)}
              </div>            
            }

            <div className="rule-main-ctr-header">
              <div className="rule-main-ico">
                <img alt={`Regelungen in ${stateName}`} src={stateIco}/>
              </div>
              <label className="rule-main-title">Regelungen in {stateName}</label>
            </div>
            <div className="rule-main-ctr-body">
              <AreaRuleSets 
                ruleSets={activeStateRules}
                state={this.props.state}
                district={this.props.district}
                districtName={this.props.districtName}
                districtIncidence={activeDistrictIncidence}
              />
            </div>
          </div>        
        }

        {( !(activeCountryRules?.length) && !(activeStateRules?.length)) && 
          <div className="no-known-rules">
            Für diesen Lebensbereich sind leider keine Regelungen gepflegt.
            <br />
            <br />
            Wir sind auf Hilfe angewiesen, wenn du beim Corona Wiki mitmachen willst,
            dann melde dich <a href="https://github.com/v-braun/corona-wiki/issues/new">hier</a>.
          </div>   
        }

      </div>
    )
  }

}