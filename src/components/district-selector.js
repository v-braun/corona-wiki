import { Component } from 'react';
import PropTypes from 'prop-types'
import * as api from '../services/coronaApi';
import geo from '../static-data/geo';
import { HScroll } from './horizontal-scroll-container';
import { DistrictButton } from './district-btn';


/**
* @augments {Component<{
  selectedStateAbbr: string,
  selectedAgs: string, 
  onClick: function,
}, 
{
  districts: { ags: string, 
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
          }[]
}
>}
*/
export class DistrictSelector extends Component{

  static propTypes = {
    selectedStateAbbr: PropTypes.string.isRequired,
    selectedAgs: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      districts: []
    }
  }

  async updateUI(){
    let districtsApiModel = await api.getDistricts();
    let districtsViewModel = [];
    for(const [key, district] of Object.entries(districtsApiModel.data)){
      if(district.stateAbbreviation !== this.props.selectedStateAbbr) continue;

      let geoDistrict = geo.districts[key];
      let vm = {
        name: district.name,
        ags: district.ags,
        weekIncidence: district.weekIncidence,

        newCases: district.delta.cases,
        newDeaths: district.delta.deaths,
        newRecovered: district.delta.recovered,

        cases: district.cases,
        deaths: district.deaths,
        recovered: district.recovered,        

        ico: geoDistrict?.ico
      };

      districtsViewModel.push(vm);
    }

    districtsViewModel = districtsViewModel.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      districts: districtsViewModel
    });
  }

  async componentDidMount(prevProps){
    await this.updateUI();
  }
  async componentDidUpdate(prevProps){
    if(this.props.selectedStateAbbr === prevProps.selectedStateAbbr) return;
    await this.updateUI();
  }
  
  render(){
    return (
      <HScroll>
        {this.state.districts.map(s => 
          <DistrictButton 
            key={s.ags}
            ags={s.ags} 
            name={s.name}
            selected={s.ags === this.props.selectedAgs}
            weekIncidence={s.weekIncidence}
            newCases={s.newCases}
            newDeaths={s.newDeaths}
            newRecovered={s.newRecovered}

            cases={s.cases}
            deaths={s.deaths}
            recovered={s.recovered}

            ico={s.ico}
            onClick={(ags, ref) => this.props.onClick(ags, ref)}
          />      
        )}
      </HScroll>
    )
  }

}

