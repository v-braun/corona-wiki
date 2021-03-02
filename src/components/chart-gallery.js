import { Component } from 'react';
import { HistoryChart } from './history-chart';
import { HScroll } from './horizontal-scroll-container';

import PropTypes from 'prop-types'



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

  render(){
    return (
      <HScroll>
        <HistoryChart 
          title={`Inzidenz in ${this.props.title}`}
          apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/incidence/360`}
          historyStateOrDistrictProp={this.props.metricKey}
          historyMetricProp='weekIncidence'
          />                
        <HistoryChart 
          title={`Infektionen in ${this.props.title}`}
          apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/cases/360`}
          historyStateOrDistrictProp={this.props.metricKey}
          historyMetricProp='cases'
          />

        <HistoryChart 
          title={`Todesfälle in ${this.props.title}`}
          apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/deaths/360`}
          historyStateOrDistrictProp={this.props.metricKey}
          historyMetricProp='deaths'
          />

        <HistoryChart 
          title={`Genesungen in ${this.props.title}`}
          apiEndpoint={`/${this.props.type}/${this.props.metricKey}/history/recovered/360`}
          historyStateOrDistrictProp={this.props.metricKey}
          historyMetricProp='recovered'
          />
      </HScroll>
    );
  }

}