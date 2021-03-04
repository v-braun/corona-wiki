import { Component } from 'react';
import PropTypes from 'prop-types'
import * as ruleService from '../services/rulesService';
import geo from '../static-data/geo';

import './area-rule-container.scss';
import { AreaRuleSet } from './area-rule-set';


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
      country: null,

      /** @type {import('../services/rulesService').RuleSet[]} */
      state: null,
      stateIco: null,
      stateName: null,


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
    let rules = await ruleService.getRulesFor(this.props.state, this.props.area);

    let newState = {
      country: rules.country,
      state: rules.state,
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
    let country = this.state.country;
    let state = this.state.state;
    let stateName = this.state.stateName;
    let stateIco = this.state.stateIco;
    let countryGlobalAnnotation = this.state.globalCountryAnnotations;
    let stateGlobalAnnotation = this.state.globalStateAnnotations;
    console.log('country', country)
    return (
      <div className="area-rules">
        {country &&
          <div className="rule-main-ctr rule-main-country">
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
            <AreaRuleSet 
                ruleSets={country}
                state={this.props.state}
                district={this.props.district}
                districtName={this.props.districtName}
                noRulesMessage={`Aktuell sind keine Deutschlandweiten Regelungen bekannt`}
              />
            </div>            
          </div>
        }

        {state && 
          <div className="rule-main-ctr rule-main-state">
            <div className="rule-main-ctr-header">
              <div className="rule-main-ico">
                <img alt={`Regelungen in ${stateName}`} src={stateIco}/>
              </div>
              <label className="rule-main-title">Regelungen in {stateName}</label>
            </div>
            <div className="rule-main-ctr-body">
              <AreaRuleSet 
                ruleSets={state}
                state={this.props.state}
                district={this.props.district}
                districtName={this.props.districtName}
              />
            </div>
          </div>        
        }
        {/* {this.state.state ?? 
          <div>{this.props.state.toString()}: {this.state?.toString()}</div>
        } */}
      </div>
    )
  }

}