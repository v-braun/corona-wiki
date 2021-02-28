import { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import './district-nav.scss';
import * as api from '../services/coronaApi';
import rules from '../static-data/rules';




// console.log(districts);

class DistrictNav extends Component{
  constructor(props){
    super(props)

    // let { state, district } = this.props.;
    this.state = {
      selectedState: '',
      selectedDistrict: '',
    };

    this.state = {
      states: [],
      districts: [],
    };

  }

  async fetchData(){
    let states = await api.getStates();
    let districts = await api.getDistricts();

    let statesVM = [];
    for(const [key, state] of Object.entries(states.data)){
      statesVM.push(state);
    }

    let districtsVM = [];
    for(const [key, district] of Object.entries(districts.data)){
      districtsVM.push(district);
    }

    this.setState({
      states: statesVM,
      districts: districtsVM,      
    });


  }

  async componentDidMount(){
    await this.fetchData();
  }

  renderDistricts(){
    
    if(!this.props.match.params.state) return;

    let districts = this.state.districts.filter(s => s.stateAbbreviation === this.props.match.params.state);
    if(!districts) return;

    return districts.map(item => 
      <Link className={this.districtButtonClasses(item)} 
        to={`/${this.props.match.params.state}/${item.ags}`} 
        key={item.ags} >
          <span className="filter-btn-title">{item.name}</span>
          <span className="filter-btn-footer">
            <span className="filter-btn-attr">
              <span className="filter-btn-attr-name">Neu:</span>&nbsp;
              <span className="filter-btn-attr-val">{item.delta.cases}</span>
              &nbsp;&#8226;
            </span>
            <span className="filter-btn-attr">
              <span className="filter-btn-attr-name">Genesen:</span>&nbsp;
              <span className="filter-btn-attr-val">{item.delta.recovered}</span>
              &nbsp;&#8226;
            </span>
            <span className="filter-btn-attr">
              <span className="filter-btn-attr-name">Inzidenz:</span>&nbsp;
              <span className="filter-btn-attr-val">{item.weekIncidence.toFixed(0)}</span>
            </span>

          </span>
      </Link>
    );
  }

  renderAreas(){
    if(!this.props.match.params.state) return;
    if(!this.props.match.params.district) return;

    let state = this.props.match.params.state;
    let district = this.props.match.params.district;
    return rules.NI.areas.map((item) => 
      item.titles.map((title, i) => 
        <Link 
          key={`r-${state}-${district}-${item.id}-${i}`}
          data-my-key={`r-${state}-${district}-${item.id}-${i}`}
          to={`/${this.props.match.params.state}/${this.props.match.params.district}/${item.id}/${i}`} 
          className={this.areaButtonClasses(item)}
        >
          {this.getIconByIndex(item.ico, i) && 
            <div className="area-icon-container"><img src={this.getIconByIndex(item.ico, i)}/></div>
          }
          <span>{title}</span>
        </Link>
      )
    )
  }

  getIconByIndex(icons, idx){
    if(!icons) return undefined;
    if(typeof icons === 'string') return icons;
    if(icons.length <= 0) return undefined;
    if(idx >= icons.length) return icons[0];
    return icons[idx];
  }

  areaButtonClasses(item){
    let result = 'filter-btn filter-btn-area';
    if(this.props.match.params.area === item.id){
      result += ' filter-btn-sel';
    }
    else if(this.props.match.params.area){
      result += ' filter-btn-hide';
    }

    return result;    
  }

  districtButtonClasses(item){
    let result = 'filter-btn filter-btn-complex';
    if(this.props.match.params.district === item.ags){
      result += ' filter-btn-sel';
    }
    else if(this.props.match.params.state !== undefined && this.props.match.params.district !== undefined){
      result += ' filter-btn-hide';
    }

    return result;
  }

  stateButtonClasses(item){
    let result = 'filter-btn';
    if(this.props.match.params.state === item.abbreviation ? 'filter-btn-sel' : ''){
      result += ' filter-btn-sel';
    }
    else if(this.props.match.params.state){
      result += ' filter-btn-hide';
    }

    return result;
  }

  findCurrentStageId(currentDistrict){
    let incidence = currentDistrict.weekIncidence;
    for(const [name, stage] of Object.entries(rules.NI.stages)){
      if(incidence > stage.incidence.gt && incidence <= stage.incidence.lt){
        return name;
      }
    }

    return '???';
  }

  getCurrentDistrict(){
    let currentDistrictAgs = this.props.match.params.district;
    let currentDistrict = this.state.districts.find(d => d.ags === currentDistrictAgs);
    return currentDistrict;
  }

  renderCurrentRule(){
    if(this.state.districts.length <= 0) return;
    if(!this.props.match.params.state) return;
    if(!this.props.match.params.district) return;
    if(!this.props.match.params.area) return;

    let currentDistrict = this.getCurrentDistrict();
    let currentStageId = this.findCurrentStageId(currentDistrict);
    let stage = rules.NI.stages[currentStageId];

    let areadId = this.props.match.params.area;
    let area = rules.NI.areas.find(r => r.id === areadId);
    let activeRule = area.stages[currentStageId];

    
    return (
      <div className="rule-entry">
        <div className="rule-header">
            Nach aktueller Inzidenz befindet sich dieser Landkreis auf: 
            <br />
            <b>{stage.title}</b> <i>({stage.desc})</i>
            <br />
            <br />
            <span>Folgende Regeln treten in Kraft:</span>
        </div>
        <div className="rule-body">

          {activeRule.lines.map((line, idx) => 
            <div key={idx} className="rule-line">{line}</div>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="district-nav" style={{"display": "flex", "flexDirection": "column"}} >
        <h3>Bundesland</h3>
        <div className="states-container filter-btn-container">
          {this.state.states.map(item => 
            <Link className={`filter-btn ${this.stateButtonClasses(item)}`} 
                  to={`/${item.abbreviation}`} 
                  key={item.abbreviation} >{item.name}</Link>
          )}
          {this.props.match.params.state !== undefined &&
            <Link className={`filter-btn reset-btn`} 
            to={`/`} 
            key="others-states" >Alle Bundesländer</Link>            
          }
        </div>

        <h3>Landkreis</h3>
        <div className="districts-container filter-btn-container">
            {this.renderDistricts()}
            {this.props.match.params.state !== undefined && this.props.match.params.district !== undefined &&
              <Link className={`filter-btn reset-btn`} 
                    to={`/${this.props.match.params.state}`} 
                    key="others-districts" >Alle Landkreise</Link>            
            }
        </div>


        <h3>Lebensbereiche</h3>
        <div className="area-container filter-btn-container">
            {this.renderAreas()}
            {this.props.match.params.state !== undefined && this.props.match.params.district !== undefined &&
              <Link className={`filter-btn reset-btn`} 
                    to={`/${this.props.match.params.state}/${this.props.match.params.district}`} 
                    key="others-districts" >Alle Lebensbereiche</Link>            
            }
        </div>

        <h3>Regelungen</h3>
        <div className="rule-container filter-btn-container">
          {this.renderCurrentRule()}
            
        </div>



      </div>
    );
  }
}


export default withRouter(DistrictNav);