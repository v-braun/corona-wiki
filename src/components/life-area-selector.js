import { Component, createRef } from 'react';
import PropTypes from 'prop-types'
import { HScroll } from './horizontal-scroll-container';
import lifeAreas from '../static-data/life_areas';
import { LifeAreaButton } from './life-area-btn';

import './life-area-selector.scss';

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
  
    this.scrollRef = createRef();
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
        ruleShort: 'unknown',
        annotation: val.annotation
      });
    }

    result = result.sort((a, b) => a.title.localeCompare(b.title));

    this.setState({
      areas: result
    });
  }

  async componentDidMount(prevProps){
    await this.updateUI();
  }

  async componentDidUpdate(prevProps){
    if(this.props.selectedArea !== prevProps.selectedArea){
      this.scrollRef?.current?.scrollTo({behavior:'smooth', left:0});
    }
  }  


  render(){        
    let areas2Render = this.state.areas;
    if(this.props.selectedArea){
      let selectedItems = this.state.areas.filter(s => s.id === this.props.selectedArea);
      areas2Render = selectedItems;
    }

    console.log('this.props.selectedArea', this.props.selectedArea);

    return (
      <HScroll innerRef={this.scrollRef}>
        {areas2Render.map(area => {
          return (
            <div className="scroll-item" key={area.id}>
              <LifeAreaButton     
                ico={area.ico}
                onClick={(id, ref) => this.props.onClick(id, ref)}
                title={area.title}
                id={area.id}
                desc={area.desc}
                ruleShort={area.ruleShort}
                annotation={area.annotation}
                selected={area.id === this.props.selectedArea}
              />
            </div>
          )
        })}
        
        {this.props.selectedArea && 
            <button className="filter-btn scroll-item all-areas-btn" type="button" onClick={() => this.props.onClick(this.props.selectedArea, null)}>
              <div className="header-ctr">
                <div className="ico-ctr">
                  <img alt="Alle Lebensbereiche" src="https://img.icons8.com/office/80/000000/dots-loading--v2.png"/>
                </div>
                <div className="title-ctr">
                  <span className="name">weitere</span>
                </div>              
                
              </div>
            </button>
        }          
      </HScroll>
    )    
  }

}