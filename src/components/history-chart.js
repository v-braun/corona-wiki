import { Component } from 'react';
import PropTypes from 'prop-types'
import * as api from '../services/coronaApi';
import { Chart } from "react-charts";
import './history-chart.scss';



/**
* @augments {Component<{
  title: string, 
  apiEndpoint: string, 
  historyStateOrDistrictProp: string,
  historyMetricProp: string,
}, object>}
*/
export class HistoryChart extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    apiEndpoint: PropTypes.string.isRequired,
    historyStateOrDistrictProp: PropTypes.string.isRequired,
    historyMetricProp: PropTypes.string.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      apiEndpoint: props.apiEndpoint,
      chartData: []
    }

    this.series = () => {
      return {
        showPoints: false,
        // curve: curveBasis,
      }
    };
    

    // let monthFormatter = new Intl.DateTimeFormat('de', { month: 'short' });
    this.axes = [
      { primary: true, 
        type: 'time', 
        position: 'bottom', 
        showGrid: false,
        show: true,
        tickPadding: 5,
        tickSizeInner: 2,
        tickSizeOuter: 2,
        format: function(val) {
          if(!isNaN(parseFloat(val))) return val.substr(2, 2); // is year
          return val.substr(0, 3);



          // if(!val) return '';
          // if(!val.replaceAll) return '';

          // let normalizedNum = val.replaceAll('.', '').replaceAll(',', '');
          // let dateNum = parseFloat(normalizedNum);
          // let parsed = new Date(dateNum);

          // let month = parsed.getMonth();
          // if(month % 2 != 0) return '';

          // return monthFormatter.format(parsed);          
        } 
      },
      { type: 'linear', 
        position: 'left',
        showGrid: false,
        tickPadding: 2,
        tickSizeInner: 2,
        tickSizeOuter: 2,
        // showTicks: false,
        // format: function(val) {
        //   // if(val === '0') return '';
        //   val = val.replace(',', '').replace('.', '');
        //   let parsed = parseFloat(val);
        //   if(isNaN(parsed)) return val;
        //   if((parsed % 1000) === 0 ) return val;
        //   return '';
        // } 
      },
    ];    
    
  }

  async componentDidMount(){
    await this.updateUI(this.props.apiEndpoint, 
      this.props.historyStateOrDistrictProp, 
      this.props.historyMetricProp, this.props.title);
  }

  async componentDidUpdate(prevProps){
    if(this.props.apiEndpoint === prevProps.apiEndpoint) return;
    await this.updateUI(this.props.apiEndpoint, 
          this.props.historyStateOrDistrictProp, 
          this.props.historyMetricProp, this.props.title);
  }  

  // dont let updateUI use props directly
  // changes on the props could happen during
  // the api call and therefor the parameters could become invalid
  // after the call was succeeded
  async updateUI(apiEndpoint, historyStateOrDistrictProp, historyMetricProp, title){
    let res = await api.getHistory(apiEndpoint);
    let stateOrDistrictId = historyStateOrDistrictProp;
    let metricObj = res.data[stateOrDistrictId];
    if(!metricObj || !metricObj.history){
      console.error(`[invalid_response] | stateOrDistrictId:${stateOrDistrictId} | `, res.data);
      return;
    }

    let history = res.data[stateOrDistrictId].history;
    let metricName = historyMetricProp;
    let metricMapped = history.map(r => {
      let val = r[metricName];
      if(val === 0){
        // there is a bug in react-chart
        // it generates invalid svg paths (NaN) if value is 0
        // https://github.com/tannerlinsley/react-charts/issues/131
        val = 0.000001;
      }
      return {
        primary: new Date(r.date), 
        secondary: val
      }
    });

    const chartData = [
      {"label": title, data: metricMapped}
    ];

    this.setState({
      chartData: chartData
    });
  }



  
  render(){
    return (
      <div className={`chart-tile scroll-item ${this.props.historyMetricProp ?? ''}`}>
        {this.state.chartData.length > 0 && 
          <div className="chart-ctr">
            <div className="chart-title">{this.props.title}</div>
            <div className="chart-wrapper">
                <Chart 
                  data={this.state.chartData} 
                  series={this.series} 
                  axes={this.axes}  />          
            </div>
          </div>
        }
      </div>
    )
  }

}


// export default StateButton;