import { Component } from 'react';
import { withRouter } from "react-router-dom";
// import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import {StateSelector} from '../components/state-selector';
import {DistrictSelector} from '../components/district-selector';
import { ChartGallery } from '../components/chart-gallery';

import './home-page.scss'
import { LiveAreaSelector } from '../components/live-area-selector';


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
              <ChartGallery 
                metricKey={currentState}
                title={stateDisplayName}
                type="states"
              />
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
              <ChartGallery 
                metricKey={currentDistrict}
                title={districtDisplayName}
                type="districts"
              />
            </div>
          </section>          
        }

        {currentDistrict && 
          <section className="section">
            <div className="section-title">Regelungen in {districtDisplayName}</div>
            <div className="section-child-full">
              <LiveAreaSelector 
                selectedStateAbbr={currentState}
                selectedAgs={currentDistrict}
                onClick={() => console.log('selected area')}
              />
            </div>
          </section>
        
        }
      </div>

    ) 
  }

}

export default withRouter(HomePage);
