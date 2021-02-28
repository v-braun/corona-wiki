import { Component } from 'react';
import PropTypes from 'prop-types'
import {StateButton} from './state-btn';
import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import { HScroll } from './horizontal-scroll-container';


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
  }

  async componentDidMount(){
    let statesApiModel = await api.getStates();
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
  
  render(){
    return (
      <HScroll>
        {this.state.states.map(s => 
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

            ico={s.ico}
            onClick={(abbr, ref) => this.props.onClick(abbr, ref)}
          />      
        )}
      </HScroll>
    )
  }

}

