import { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import * as api from '../services/coronaApi';
import { HScroll } from './horizontal-scroll-container';


import './statsistic-gallery.scss';
import moment from 'moment';

/**
* @augments {Component<{
  selectedAbbr: boolean, 
  onClick: function
}, 
{
  modelLoaded: boolean, 

  secondVac: string, 
  secondVacPer: string, 

  firstVac: string, 
  firstVacPer: string,
 
}
>}
*/
export class StatsisticGallery extends Component{

  static propTypes = {
    
  }

  constructor(props){
    super(props);
    this.state = {
      modelLoaded: false,
      secondVac: 0,
      secondVacPer: '',
      firstVac: 0,
      firstVacPer: '',

      leftDays: 0,      
      avgFirstPerSec: 0,
      avgSecondPerSec: 0,

      leftHr: '',
      leftMin: '',
      leftSec: '',
    }

  }

  updatePandemicLeftTime(){
    let now = moment();
    let midnight = now.clone().endOf('day');
    let duration =  moment.duration(midnight.diff(now));

    var hrs = duration.hours();
    var min = duration.minutes();
    var sec = duration.seconds();    
    
    this.setState({
      leftHr: hrs.toFixed(0),
      leftMin: min.toFixed(0),
      leftSec: sec.toFixed(0),     
      
      firstVac: this.state.firstVac + this.state.avgFirstPerSec,
      secondVac: this.state.secondVac + this.state.avgSecondPerSec,
    });
  }

  async componentDidMount(){
    let vacApiModel = await api.getVaccinations();
    let vacHistApiModel = await api.getVaccinationHistory();
    let casesApiModel = await api.getGermany();

    if(vacApiModel.error) return; // todo: show error messages here
    if(vacHistApiModel.error) return; // todo: show error messages here
    if(casesApiModel.error) return; // todo: show error messages here

    if(!vacApiModel.data.secondVaccination) return; // todo: show error messages here
    if(!casesApiModel.recovered) return; // todo: show error messages here
    if(!vacHistApiModel.data.history) return; // todo: show error messages here


    let modelLoaded = true;
    let secondVac = vacApiModel.data.secondVaccination.vaccinated;
    let secondVacPer = (vacApiModel.data.secondVaccination.quote * 100).toFixed(0) + '%';

    let firstVac = vacApiModel.data.vaccinated;
    let firstVacPer = (vacApiModel.data.quote * 100).toFixed(0) + '%';

    let both = [];
    let first = [];
    let second = [];
    for(let i = vacHistApiModel.data.history.length - 1; i >= (vacHistApiModel.data.history.length - 7); i--){
      let rec = vacHistApiModel.data.history[i];
      both.push(rec.firstVaccination + rec.secondVaccination);
      first.push(rec.firstVaccination);
      second.push(rec.secondVaccination);
    }

    let totalRecovered = (casesApiModel.recovered * 2); // assume 'dunkelziffer' * 2

    let avgBothPerDay = both.reduce( ( a, b ) => a + b, 0 ) / both.length;
    let avgFirstPerDay = first.reduce( ( a, b ) => a + b, 0 ) / first.length;
    let avgSecondPerDay = second.reduce( ( a, b ) => a + b, 0 ) / second.length;
    let populationTotal = 83020000;
    let herdImun = populationTotal * 0.75;
    herdImun = herdImun * 2; // two vaccines needed
    let bothTotal = vacApiModel.data.vaccinated + vacApiModel.data.secondVaccination.vaccinated;
    let leftTotal = herdImun - bothTotal - totalRecovered; 
    let leftDays = leftTotal / avgBothPerDay;
    
    setInterval(() => this.updatePandemicLeftTime(), 1000);


    this.setState({
      modelLoaded: modelLoaded,

      secondVac: secondVac,
      secondVacPer: secondVacPer,

      firstVac: firstVac,
      firstVacPer: firstVacPer,

      avgFirstPerSec: avgFirstPerDay / 24 / 60 / 60,
      avgSecondPerSec: avgSecondPerDay / 24 / 60 / 60,

      leftDays: leftDays,
      leftHr: '',
      leftMin: '',
      leftSec: '',      
    });
    this.updatePandemicLeftTime();

  }

  renderTile(cls, h1, h2, h3){
    return (
      <div className={`stats-gallery-tile scroll-item ${cls}`}>
        <div className="tile-h1">{h1}</div>
        <div className="tile-h3">{h3}</div>
        <div className="tile-h2">{h2}</div>
      </div>
    )    
  }

  
  render(){
    // if(this.props.selectedAbbr){
    //   let selectedItems = this.state.states.filter(s => s.abbreviation === this.props.selectedAbbr);
    //   states2Render.push(...selectedItems);
    // } else{
    //   states2Render = this.state.states;
    // }
    
    return (
      <Fragment>
        <HScroll>
          <div className={`stats-gallery-tile scroll-item timer-tile`}>
            <div className="time-row">
              <div className="tile-h1">{this.state.leftDays.toFixed(0)}</div>
              <div className="tile-h1">{this.state.leftHr}</div>
              <div className="tile-h1">{this.state.leftMin}</div>
              <div className="tile-h1">{this.state.leftSec}</div>
            </div>
            <div className="lbl-row">
              <div className="tile-h3">Tage</div>
              <div className="tile-h3">Stunden</div>
              <div className="tile-h3">Minuten</div>
              <div className="tile-h3">Sekunden</div>              
            </div>
            <div className="footer-row">
              <div className="tile-h3">bis zur</div>
              <div className="tile-h2">Herdenimmunität</div>              
            </div>

          </div>          


          {this.renderTile('vac-2', this.state.secondVacPer, 'Zweitimpfungen', this.state.secondVac.toLocaleString('de-DE',{maximumFractionDigits: 0}))}
          {this.renderTile('vac-1', this.state.firstVacPer, 'Erstimpfungen', this.state.firstVac.toLocaleString('de-DE',{maximumFractionDigits: 0}))}
        </HScroll>   

        <span className="statistics-disclaimer">
          * Schätzung basierend auf der Impfquote der letzten 7 Tage, falls Herdenimmunität bei 75%.
          
        </span> 
      </Fragment>
  
    )
  }

}

