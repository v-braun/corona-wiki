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

  async areaSelected(area, ref){
    if(!area) return;

    let path = ``;
    if(this.props.match.params.state){
      path += `/${this.props.match.params.state}`;
    }
    if(this.props.match.params.district){
      path += `/${this.props.match.params.district}`;
    }        

    if(this.props.match.params.area !== area){
      // NOT toggle
      path += `/${area}`;
    }

    this.props.history.push(path);    
  }


  async searchExecuted(searchResult){
    if(!searchResult) return;

    let path = ``;
    if(searchResult.state){
      path += `/${searchResult.state}`;
      if(searchResult.district) {
        path += `/${searchResult.district}`;
  
        if(searchResult.area){
          path += `/${searchResult.area}`;
        }
      }
    }

    this.props.history.push(path);
  }



  render(){
    
    let stateDisplayName = '';
    let districtDisplayName = '';
    let currentState = this.props.match.params.state;
    let currentDistrict = this.props.match.params.district;
    let currentArea = this.props.match.params.area;
    let areaDisplayName = '';
    let currentStateIco = '';
    if(currentState && geo.states[currentState]){
      stateDisplayName = geo.states[currentState].name;
      currentStateIco = geo.states[currentState].ico;
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
                selectedStateIco={currentStateIco}
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
