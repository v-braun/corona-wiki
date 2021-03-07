import { Component } from 'react';
import { withRouter } from "react-router-dom";
// import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import lifeAreas from '../static-data/life_areas';

import {StateSelector} from '../components/state-selector';
import {DistrictSelector} from '../components/district-selector';
import { ChartGallery } from '../components/chart-gallery';

import './home-page.scss'
import { LifeAreaSelector } from '../components/life-area-selector';
import { AreaRuleContainer } from '../components/area-rule-container';

import {SearchBox} from '../components/search-box';


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

    let path = ``;
    if(this.props.match.params.state){
      path += `/${this.props.match.params.state}`;
    }

    if(this.props.match.params.district !== ags){ // not toggle
      if(ags){
        path += `/${ags}`;
      }
      if(this.props.match.params.area){
        path += `/${this.props.match.params.area}`;
      }
    }

    this.props.history.push(path);
    
    setTimeout(() => {
      // ref?.current?.scrollIntoView({behavior:'smooth', block:'center',inline:'center'});
    }, 400);

  }

  async searchExecuted(searchResult){
    if(!searchResult) return;
    if(!searchResult.state) return; // no state selected, we cannot navigate
    let path = `/${searchResult.state}`;

    if(!searchResult.district) return; // no district, cannot continue nav
    path += `/${searchResult.district}`;

    if(!searchResult.area) return;
    path += `/${searchResult.area}`;

    this.props.history.push(path);

  }

  async areaSelected(area, ref){
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
      // ref?.current?.scrollIntoView({behavior:'smooth', block:'center',inline:'center'});
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
    if(currentArea && lifeAreas[currentArea]){
      areaDisplayName = lifeAreas[currentArea].title;
    }


    return (
      <div id="home-page">
        <section className="section">
          <SearchBox
            onSearched={(result) => this.searchExecuted(result)}
          />
        </section>
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
              <LifeAreaSelector 
                selectedStateAbbr={currentState}
                selectedAgs={currentDistrict}
                selectedArea={currentArea}
                onClick={(id, ref) => this.areaSelected(id, ref)}
                districtName={districtDisplayName}
              />
            </div>
          </section>
        }

        {currentArea && 
          <section className="section area-section">
            <div className="section-title area-title">Regelungen betreffend '{areaDisplayName}'</div>
            <div className="">
              <AreaRuleContainer 
                state={currentState}
                district={currentDistrict}
                area={currentArea}
                districtName={districtDisplayName}

                
              />
            </div>
          </section>
        }
      </div>

    ) 
  }

}

export default withRouter(HomePage);
