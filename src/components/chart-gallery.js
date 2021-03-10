import { Component } from 'react';
import { HistoryChart } from './history-chart';
import { HScroll } from './horizontal-scroll-container';

import PropTypes from 'prop-types'

import './chart-gallery.scss';


/**
* @augments {Component<{
  type: string, 
  metricKey: string, 
  title: string,
}, object>}
*/
export class ChartGallery extends Component{

  static propTypes = {
    type: PropTypes.string.isRequired,
    metricKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }  

  constructor(props){
    super(props);

    this.state = {
      expanded: false,
      resolution: 'w'
    }
  }

  toggleShow(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render(){
    let days = '360';
    // if(this.state.resolution === 'w'){
    //   days = '7';
    // } else if(this.state.resolution === 'm'){
    //   days = '31';
    // }

    return (
      <div>
        <div className="collapsed-container" onClick={() => this.toggleShow()}>
          <span>
          Aktuelle Statistiken in <b>{this.props.title}</b>
          </span>
          {this.state.expanded ? 
            <img alt="zuklappen" src="https://img.icons8.com/nolan/50/chevron-up.png"/>
            : <img alt="aufklappen" src="https://img.icons8.com/nolan/50/chevron-down.png"/>
          }
        </div>
        {this.state.expanded && 
          // <div className="expanded-container">
          //   <div className="charts-btns">
          //     <button type="button">1W</button>
          //     <button type="button">1M</button>
          //     <button type="button">1J</button>
          //   </div>
            <HScroll>
              <HistoryChart 
                title={`Inzidenz in ${this.props.title}`}
                apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/incidence/${days}`}
                historyStateOrDistrictProp={this.props.metricKey}
                historyMetricProp='weekIncidence'
                />                
              <HistoryChart 
                title={`Infektionen in ${this.props.title}`}
                apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/cases/${days}`}
                historyStateOrDistrictProp={this.props.metricKey}
                historyMetricProp='cases'
                />

              <HistoryChart 
                title={`Todesfälle in ${this.props.title}`}
                apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/deaths/${days}`}
                historyStateOrDistrictProp={this.props.metricKey}
                historyMetricProp='deaths'
                />

              <HistoryChart 
                title={`Genesungen in ${this.props.title}`}
                apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/recovered/${days}`}
                historyStateOrDistrictProp={this.props.metricKey}
                historyMetricProp='recovered'
                />
            </HScroll> 
          // </div>
 
        }
      </div>        

    );
  }

}