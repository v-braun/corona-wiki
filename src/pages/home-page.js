import { Component } from 'react';
import { withRouter } from "react-router-dom";
// import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import liveAreas from '../static-data/life_areas';

import {StateSelector} from '../components/state-selector';
import {DistrictSelector} from '../components/district-selector';
import { ChartGallery } from '../components/chart-gallery';

import './home-page.scss'
import { LiveAreaSelector } from '../components/live-area-selector';
import { AreaRuleContainer } from '../components/area-rule-container';


// console.log(districts);

class HomePage extends Component{

  async stateSelected(abbr){
    if(!abbr) return;
    if(this.props.match.params.state === abbr){
      // toggle
      this.props.history.push(`/`);
      return;
    }
    
    this.props.history.push(`/${abbr}`);
  }

  async districtSelected(ags, ref){
    if(!ags) return;
    if(this.props.match.params.district === ags){
      // toggle
      if(this.props.match.params.state){
        this.props.history.push(`/${this.props.match.params.state}`);
      } else{
        this.props.history.push(`/`);
      }
      return;
    }

    let state = this.props.match.params.state;
    this.props.history.push(`/${state}/${ags}`);
    
    setTimeout(() => {
      ref?.current?.scrollIntoView({behavior:'smooth', block:'center',inline:'center'});
    }, 400);

  }

  async areaSelected(area, ref){
    console.log('select area', area)
    if(!area) return;

    let state = this.props.match.params.state;
    let ags = this.props.match.params.district;    
    if(this.props.match.params.area === area){
      // toggle
      if(ags){
        this.props.history.push(`/${state}/${ags}`);
      }
      if(state){
        this.props.history.push(`/${state}`);
      } else{
        this.props.history.push(`/`);
      }
      return;
    }
    

    this.props.history.push(`/${state}/${ags}/${area}`);    

    setTimeout(() => {
      console.log('scroll to', ref)
      ref?.current?.scrollIntoView({behavior:'smooth', block:'center',inline:'center'});
    }, 400);    
  }

  render(){
    
    let stateDisplayName = '';
    let districtDisplayName = '';
    let currentState = this.props.match.params.state;
    let currentDistrict = this.props.match.params.district;
    let currentArea = this.props.match.params.area;
    let areaDisplayName = '';
    if(currentState && geo.states[currentState]){
      stateDisplayName = geo.states[currentState].name;
    }
    if(currentDistrict && geo.districts[currentDistrict]){
      districtDisplayName = geo.districts[currentDistrict].name;
    }
    if(currentArea && liveAreas[currentArea]){
      areaDisplayName = liveAreas[currentArea].title;
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
                selectedArea={currentArea}
                onClick={(id, ref) => this.areaSelected(id, ref)}
              />
            </div>
          </section>
        }

        {currentArea && 
          <section className="section">
            <div className="section-title area-title">Regelungen betreffend '{areaDisplayName}'</div>
            <div className="">
              <AreaRuleContainer 
                state={currentState}
                district={currentDistrict}
                area={currentArea}
                
              />
            </div>
          </section>
        }
      </div>

    ) 
  }

}

export default withRouter(HomePage);