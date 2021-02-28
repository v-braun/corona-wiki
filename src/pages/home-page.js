import { Component } from 'react';
import { withRouter } from "react-router-dom";
// import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import {StateSelector} from '../components/state-selector';
import {DistrictSelector} from '../components/district-selector';
import { HScroll } from '../components/horizontal-scroll-container';
// import { Chart } from "react-charts";

import {HistoryChart} from '../components/history-chart';

import './home-page.scss'


// console.log(districts);

class HomePage extends Component{

  constructor(props){
    super(props)

    this.state = {
      selectedState: '',
      selectedStateName: '',

      selectedDistrict: '',
      selectedDistrictName: ''      
    };

    
  }

  async stateSelected(abbr){
    if(!abbr) return;
    if(this.state.selectedState === abbr){
      // toggle
      this.setState({
        selectedState: '',
        selectedDistrict: '',
        selectedDistrictName: '',        
      });
      return;
    }
    
    this.setState({
      selectedState: abbr,
      selectedStateName: geo.states[abbr].name,
      selectedDistrict: '',
      selectedDistrictName: '',
    });
  }

  async districtSelected(ags, ref){
    if(!ags) return;
    if(this.state.selectedDistrict === ags){
      // toggle
      this.setState({selectedDistrict: ''});
      return;
    }
    
    this.setState({
      selectedDistrict: ags,
      selectedDistrictName: geo.districts[ags].name,
    });

    console.log('scroll to', ref, ref?.current);
    setTimeout(() => {
      ref?.current?.scrollIntoView(true);
    }, 200);
    // let el = document.getElementById('');
    
  }

  render(){
    return (
      <div id="home-page">
        <section className="section">
          <div className="section-title">Wählen Sie Ihr Bundesland</div>
          <div className="section-child-full">
              <StateSelector 
                onClick={(item, ref) => this.stateSelected(item, ref)} 
                selectedAbbr={this.state.selectedState}  
              />
          </div>
        </section>

        {this.state.selectedState && 
          <section className="section">
            <div className="section-title">Verlauf in {this.state.selectedStateName}</div>
            <div className="section-child-full">
              <HScroll>
                <HistoryChart 
                  title={`Inzidenz in ${this.state.selectedStateName}`}
                  apiEndpoint={`/states/${this.state.selectedState}/history/incidence/360`}
                  historyStateOrDistrictProp={this.state.selectedState}
                  historyMetricProp='weekIncidence'
                  />                
                <HistoryChart 
                  title={`Infektionen in ${this.state.selectedStateName}`}
                  apiEndpoint={`/states/${this.state.selectedState}/history/cases/360`}
                  historyStateOrDistrictProp={this.state.selectedState}
                  historyMetricProp='cases'
                  />

                <HistoryChart 
                  title={`Todesfälle in ${this.state.selectedStateName}`}
                  apiEndpoint={`/states/${this.state.selectedState}/history/deaths/360`}
                  historyStateOrDistrictProp={this.state.selectedState}
                  historyMetricProp='deaths'
                  />

                <HistoryChart 
                  title={`Genesungen in ${this.state.selectedStateName}`}
                  apiEndpoint={`/states/${this.state.selectedState}/history/recovered/360`}
                  historyStateOrDistrictProp={this.state.selectedState}
                  historyMetricProp='recovered'
                  />
          </HScroll>
            </div>
          </section>
        }
        {this.state.selectedState && 
          <section className="section">
            <div className="section-title">Landkreise in {this.state.selectedStateName}</div>
            <div className="section-child-full">
              <DistrictSelector 
                selectedStateAbbr={this.state.selectedState}
                selectedAgs={this.state.selectedDistrict}
                onClick={(ags, ref) => this.districtSelected(ags, ref)}
              />
            </div>
          </section>
        }
        {this.state.selectedDistrict && 
          <section className="section">
            <div className="section-title">Verlauf in {this.state.selectedDistrictName}</div>
            <div className="section-child-full">
              <HScroll>
                <HistoryChart 
                  title={`Inzidenz in ${this.state.selectedDistrictName}`}
                  apiEndpoint={`/districts/${this.state.selectedDistrict}/history/incidence/360`}
                  historyStateOrDistrictProp={this.state.selectedDistrict}
                  historyMetricProp='weekIncidence'
                  />                
                <HistoryChart 
                  title={`Infektionen in ${this.state.selectedDistrictName}`}
                  apiEndpoint={`/districts/${this.state.selectedDistrict}/history/cases/360`}
                  historyStateOrDistrictProp={this.state.selectedDistrict}
                  historyMetricProp='cases'
                  />

                <HistoryChart 
                  title={`Todesfälle in ${this.state.selectedDistrictName}`}
                  apiEndpoint={`/districts/${this.state.selectedDistrict}/history/deaths/360`}
                  historyStateOrDistrictProp={this.state.selectedDistrict}
                  historyMetricProp='deaths'
                  />

                <HistoryChart 
                  title={`Genesungen in ${this.state.selectedDistrictName}`}
                  apiEndpoint={`/districts/${this.state.selectedDistrict}/history/recovered/360`}
                  historyStateOrDistrictProp={this.state.selectedDistrict}
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
