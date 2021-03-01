import { Component } from 'react';
import { withRouter } from "react-router-dom";
// import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import {StateSelector} from '../components/state-selector';
import {DistrictSelector} from '../components/district-selector';
import { HScroll } from '../components/horizontal-scroll-container';

import liveAreas from '../static-data/live-areas';
 




// import { Chart } from "react-charts";

import {HistoryChart} from '../components/history-chart';

import './home-page.scss'


// console.log(districts);

class HomePage extends Component{

  async stateSelected(abbr){
    if(!abbr) return;
    if(this.props.match.params.state === abbr){
      // toggle
      this.props.history.push(`${process.env.PUBLIC_URL}`);
      return;
    }
    
    this.props.history.push(`${process.env.PUBLIC_URL}/${abbr}`);
  }

  async districtSelected(ags, ref){
    if(!ags) return;
    if(this.props.match.params.district === ags){
      // toggle
      if(this.props.match.params.state){
        this.props.history.push(`${process.env.PUBLIC_URL}/${this.props.match.params.state}`);
      } else{
        this.props.history.push(`${process.env.PUBLIC_URL}`);
      }
      return;
    }

    let state = this.props.match.params.state;
    this.props.history.push(`${process.env.PUBLIC_URL}/${state}/${ags}`);
    
    setTimeout(() => {
      ref?.current?.scrollIntoView({behavior:'smooth', block:'center',inline:'center'});
    }, 400);

  }

  render(){
    
    let stateDisplayName = '';
    let districtDisplayName = '';
    let currentState = this.props.match.params.state;
    let currentDistrict = this.props.match.params.district;
    if(currentState && geo.states[currentState]){
      stateDisplayName = geo.states[currentState].name;
    }
    if(currentDistrict && geo.districts[currentDistrict]){
      districtDisplayName = geo.districts[currentDistrict].name;
    }    


    return (
      <div id="home-page">
        <section className="section">
          <div className="section-title">Wählen Sie Ihr Bundesland</div>
          <div className="section-child-full">
              <StateSelector 
                onClick={(item, ref) => this.stateSelected(item, ref)} 
                selectedAbbr={currentState}  
              />
          </div>
        </section>

        {currentState && 
          <section className="section">
            <div className="section-title">Verlauf in {stateDisplayName}</div>
            <div className="section-child-full">
              <HScroll>
                <HistoryChart 
                  title={`Inzidenz in ${stateDisplayName}`}
                  apiEndpoint={`/states/${currentState}/history/incidence/360`}
                  historyStateOrDistrictProp={currentState}
                  historyMetricProp='weekIncidence'
                  />                
                <HistoryChart 
                  title={`Infektionen in ${stateDisplayName}`}
                  apiEndpoint={`/states/${currentState}/history/cases/360`}
                  historyStateOrDistrictProp={currentState}
                  historyMetricProp='cases'
                  />

                <HistoryChart 
                  title={`Todesfälle in ${stateDisplayName}`}
                  apiEndpoint={`/states/${currentState}/history/deaths/360`}
                  historyStateOrDistrictProp={currentState}
                  historyMetricProp='deaths'
                  />

                <HistoryChart 
                  title={`Genesungen in ${stateDisplayName}`}
                  apiEndpoint={`/states/${currentState}/history/recovered/360`}
                  historyStateOrDistrictProp={currentState}
                  historyMetricProp='recovered'
                  />
          </HScroll>
            </div>
          </section>
        }
        {currentState && 
          <section className="section">
            <div className="section-title">Landkreise in {stateDisplayName}</div>
            <div className="section-child-full">
              <DistrictSelector 
                selectedStateAbbr={currentState}
                selectedAgs={currentDistrict}
                onClick={(ags, ref) => this.districtSelected(ags, ref)}
              />
            </div>
          </section>
        }
        {currentDistrict && 
          <section className="section">
            <div className="section-title">Verlauf in {districtDisplayName}</div>
            <div className="section-child-full">
              <HScroll>
                <HistoryChart 
                  title={`Inzidenz in ${districtDisplayName}`}
                  apiEndpoint={`/districts/${currentDistrict}/history/incidence/360`}
                  historyStateOrDistrictProp={currentDistrict}
                  historyMetricProp='weekIncidence'
                  />                
                <HistoryChart 
                  title={`Infektionen in ${districtDisplayName}`}
                  apiEndpoint={`/districts/${currentDistrict}/history/cases/360`}
                  historyStateOrDistrictProp={currentDistrict}
                  historyMetricProp='cases'
                  />

                <HistoryChart 
                  title={`Todesfälle in ${districtDisplayName}`}
                  apiEndpoint={`/districts/${currentDistrict}/history/deaths/360`}
                  historyStateOrDistrictProp={currentDistrict}
                  historyMetricProp='deaths'
                  />

                <HistoryChart 
                  title={`Genesungen in ${districtDisplayName}`}
                  apiEndpoint={`/districts/${currentDistrict}/history/recovered/360`}
                  historyStateOrDistrictProp={currentDistrict}
                  historyMetricProp='recovered'
                  />
                </HScroll>
            </div>
          </section>          
        }
      </div>

    ) 
  }

}

export default withRouter(HomePage);
