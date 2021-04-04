import { Component, createRef } from 'react';
import PropTypes from 'prop-types'
import {StateButton} from './state-btn';
import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import { HScroll } from './horizontal-scroll-container';


import './state-selector.scss';

/**
* @augments {Component<{
  selectedAbbr: boolean, 
  onClick: function
}, 
{
  states: { abbreviation: string, 
            name: string, 
            ico: string, 
            selected: bool, 
  
            newCases: number, 
            newDeaths: number, 
            newRecovered: number, 

            cases: number,
            deaths: number,
            recovered: number,

            weekIncidence: number
          }[],  
}
>}
*/
export class StateSelector extends Component{

  static propTypes = {
    selectedAbbr: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      states: []
    }

    this.scrollRef = createRef();
  }

  async componentDidMount(){
    let statesApiModel = await api.getStates();
    if(statesApiModel.error) return; // todo: show error messages here
    let statesViewModel = [];
    for(const [key, state] of Object.entries(statesApiModel.data)){
      let geoState = geo.states[key];
      let vm = {
        name: state.name,
        abbreviation: state.abbreviation,
        weekIncidence: state.weekIncidence,

        newCases: state.delta.cases,
        newDeaths: state.delta.deaths,
        newRecovered: state.delta.recovered,
        population: state.population,

        cases: state.cases,
        deaths: state.deaths,
        recovered: state.recovered,        


        ico: geoState?.ico
      };

      statesViewModel.push(vm);
    }

    statesViewModel = statesViewModel.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      states: statesViewModel
    });
  }

  renderStateButton(s){
    return (
      <StateButton 
        key={s.abbreviation}
        abbreviation={s.abbreviation} 
        name={s.name}
        selected={s.abbreviation === this.props.selectedAbbr}
        weekIncidence={s.weekIncidence}
        newCases={s.newCases}
        newDeaths={s.newDeaths}
        newRecovered={s.newRecovered}

        cases={s.cases}
        deaths={s.deaths}
        recovered={s.recovered}
        population={s.population}

        ico={s.ico}
        onClick={(abbr, ref) => this.props.onClick(abbr, ref)}
      />
    );
  }

  
  render(){
    let states2Render = this.state.states;
    // if(this.props.selectedAbbr){
    //   let selectedItems = this.state.states.filter(s => s.abbreviation === this.props.selectedAbbr);
    //   states2Render.push(...selectedItems);
    // } else{
    //   states2Render = this.state.states;
    // }
    
    return (
        <HScroll innerRef={this.scrollRef}>
          {states2Render.map(s => 
            <StateButton 
              key={s.abbreviation}
              abbreviation={s.abbreviation} 
              name={s.name}
              selected={s.abbreviation === this.props.selectedAbbr}
              weekIncidence={s.weekIncidence}
              newCases={s.newCases}
              newDeaths={s.newDeaths}
              newRecovered={s.newRecovered}

              cases={s.cases}
              deaths={s.deaths}
              recovered={s.recovered}
              population={s.population}

              ico={s.ico}
              onClick={(abbr, ref) => this.props.onClick(abbr, ref)}
            />      
          )}
          {/* {this.props.selectedAbbr && 
            <button className="filter-btn scroll-item all-states-btn" type="button" onClick={() => this.props.onClick(this.props.selectedAbbr, null)}>
              <div className="header-ctr">
                <div className="ico-ctr">
                  <img alt="Alle Bundesländer" src="https://img.icons8.com/cute-clipart/64/000000/germany.png"/>
                </div>
                <div className="title-ctr">
                  <span className="name">weitere Bundesländer</span>
                </div>              
                
              </div>
            </button>
          } */}
        </HScroll>      
    )
  }

}

