import { Component } from 'react';
import PropTypes from 'prop-types'
import { HScroll } from './horizontal-scroll-container';
import lifeAreas from '../static-data/life_areas';
import { LifeAreaButton } from './life-area-btn';


/**
 * @typedef Area
 * @type {object}
 * @property {string} id 
 * @property {string} title 
 * @property {string} ico
 * @property {string} desc 
 * @property {'unknown' | 'closed' | 'forbidden' | 'limit' | 'nolimit' | 'open'} ruleShort 
 */



/**
* @augments {Component<{
  onClick: function,
  selectedArea: string,
}, 
{
  areas: { id: string, 
           title: string, 
           ico: string, 
           selected: bool
          }[]
}
>}
*/
export class LifeAreaSelector extends Component{

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    selectedArea: PropTypes.string,
  }

  constructor(props){
    super(props);
    this.state = {
      areas: []
    }
  }
  
  async updateUI(){
    /** @type {Area[]} */
    let result = [];
    for(let [ , val] of Object.entries(lifeAreas)){
      result.push({
        id: val.id,
        title: val.title,
        ico: val.ico,
        desc: val.desc,
        ruleShort: 'unknown'
      });
    }

    this.setState({
      areas: result
    });
  }

  async componentDidMount(prevProps){
    await this.updateUI();
  }


  render(){        
    return (
      <HScroll>
        {this.state.areas.map(area => {
          return (
            <div className="scroll-item" key={area.id}>
              <LifeAreaButton     
                ico={area.ico}
                onClick={(id, ref) => this.props.onClick(id, ref)}
                title={area.title}
                id={area.id}
                desc={area.desc}
                ruleShort={area.ruleShort}
                selected={area.id === this.props.selectedArea}
              />
            </div>
          )
        })}
      </HScroll>
    )    
  }

}