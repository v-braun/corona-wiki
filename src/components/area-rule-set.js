import { Component } from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown';
import * as api from '../services/coronaApi';
import * as moment from 'moment'



/**
* @augments {Component<{
    ruleSets: import('../services/rulesService').RuleSet[], 
    state: string,
    district: string,
    noRulesMessage: string,
}, 
{
  
}
>}
*/
export class AreaRuleSet extends Component{

  static propTypes = {
    ruleSets: PropTypes.any.isRequired,
    state: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    noRulesMessage: PropTypes.string.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      /** @type {import('../services/rulesService').RuleSet[]} */
      activeRuleSets: null,
      todayIncidence: null
    };
  }

  renderRuleIco(ruleStatus){
    switch(ruleStatus){
      case "allow": return <img alt="Erlaubt" src="https://img.icons8.com/flat-round/128/000000/checkmark.png" />;
      case "forbidden": return <img alt="Verboten" src="https://img.icons8.com/flat-round/64/000000/no-entry--v1.png" />;

      case "limit": return <img alt="Mit Einschränkungen" src="https://img.icons8.com/emoji/64/000000/warning-emoji.png" />;
      case "nolimit": return <img alt="Ohne Einschränkungen" src="https://img.icons8.com/flat-round/128/000000/checkmark.png" />;
      
      case "open": return <img alt="Geöffnet" src="https://img.icons8.com/fluent/96/000000/open-sign.png" />;
      case "closed": return <img alt="Info" src="https://img.icons8.com/fluent/96/000000/closed-sign.png" />;

      default: return <img alt="Info" src="https://img.icons8.com/flat-round/64/000000/question-mark.png" />;
    }
  }  

  renderRule(rule, idx){
    return (
      <div key={idx} className="rule-item">
        <div className="rule-ico">{this.renderRuleIco(rule.status)}</div>
        <ReactMarkdown className="rule-md">
          {rule.text}
        </ReactMarkdown>
      </div>
    );
  }
  

  // async findBestRule
  __parseMomentOptional(date, ctx){
    if(!date) return null;
    try{
      return moment(date, 'YYYY-MM-DD');
    }catch(e){
      console.log('failed parse date', date, 'ctx', ctx);
      return null;
    }
  }

  __lastXDays(history, days){
    if(history.length <= 0) return [];
    return history.slice(Math.max(history.length - days, 0));
  }


  async updateUI(){
    let incidenceHistory = (await api.getHistory(`/districts/${this.props.district}/history/incidence/360`)).data[this.props.district].history;
    let today = moment();
    // console.log(today.format('YYYY-MM-DD'));

    //  = [];
    let matchedRuleSets = this.props.ruleSets.filter(rs => {
      if(!rs.conditions) return true; // RS without conditions are dispayed always

      let conditions = rs.conditions;

      let fromDate = this.__parseMomentOptional(conditions.date_from);
      let toDate = this.__parseMomentOptional(conditions.date_to);
      // let toDate = this.__parseMomentOptional(rs.incidence_from);
      // let toDate = this.__parseMomentOptional(rs.incidence_to);
      if(fromDate && today.isBefore(fromDate)) return false;
      if(toDate && today.isAfter(toDate)) return false;

      if(Number.isFinite(conditions.incidence_days)){
        let lastDaysIncidence = this.__lastXDays(incidenceHistory, conditions.incidence_days);
        if(!Number.isFinite(conditions.incidence_from) && !Number.isFinite(conditions.incidence_to)){
          console.error(`unexpected conditions.incidence_days (${conditions.incidence_days}) without incidence_from / incidence_from`, rs);
          return false;
        }

        if(Number.isFinite(conditions.incidence_from)){
          let matchedDays = lastDaysIncidence.filter(incidence => incidence.weekIncidence >= conditions.incidence_from);
          if(matchedDays.length != lastDaysIncidence.length) return false;
        }
        if(Number.isFinite(conditions.incidence_to)){
          let matchedDays = lastDaysIncidence.filter(incidence => incidence.weekIncidence <= conditions.incidence_to);
          if(matchedDays.length != lastDaysIncidence.length) return false;
        }
        
        return true;
      } else{
        let currentDateIncidence = this.__lastXDays(incidenceHistory, 1);
        if(Number.isFinite(conditions.incidence_from)){
          if(currentDateIncidence.weekIncidence < conditions.incidence_from) return false;
        }
        if(Number.isFinite(conditions.incidence_to)){
          if(currentDateIncidence.weekIncidence > conditions.incidence_to) return false;
        }

        return true;
      }
    });
    
    let todayIncidence = this.__lastXDays(incidenceHistory, 1);
    this.setState({
      activeRuleSets: matchedRuleSets,
      todayIncidence: todayIncidence[0].weekIncidence
    });
  }

  __joinHtmlNodes(array, separator){
    if(array.length <= 0) return;
    if(array.length == 1) return array;

    let result = []
    for(let item of array){
      result.push(item);
      result.push(separator);
    }

    return result.slice(0, result.length - 1);
  }

  /**
   * 
   * @param {import('../services/rulesService').RuleSet} ruleSet 
   */
  renderRuleSetBanner(ruleSet){
    let dateFrom = this.__parseMomentOptional(ruleSet.conditions?.date_from);
    let dateTo = this.__parseMomentOptional(ruleSet.conditions?.date_to);
    let incidenceFrom = ruleSet.conditions?.incidence_from;
    let incidenceTo = ruleSet.conditions?.incidence_to;
    let incidenceDays = ruleSet.conditions?.incidence_days;
    
    
    let dateItems = [];
    let incidenceItems = [];
    
    if(dateFrom) dateItems.push(<span className="date-value">{`vom ${dateFrom.format('D. MMM. YYYY')}`}</span>);      
    if(dateTo) dateItems.push(<span className="date-value">{`bis zum ${dateTo.format('D. MMM. YYYY')}`}</span>);

    if(Number.isFinite(incidenceFrom)) incidenceItems.push(<span className="incidence-value">mehr als {incidenceFrom}</span>);
    if(Number.isFinite(incidenceTo)) incidenceItems.push(<span className="incidence-value">weniger als {incidenceTo}</span>);
    

    if(dateItems.length <= 0 && incidenceItems.length <= 0) return;
    
    let htmlItems = [];
    htmlItems.push(<span>Folgende Regelungen gelten </span>,);
    if(dateItems.length > 0) {
      htmlItems.push(...this.__joinHtmlNodes(dateItems, <span> </span>), <span> </span>);
    }
    if(incidenceItems.length > 0){
      htmlItems.push(<span>bei einer Inzidenz von </span>, ...this.__joinHtmlNodes(incidenceItems, <span> und </span>), <span> </span>);       
      if(Number.isFinite(incidenceDays)) {
        htmlItems.push(<span>über die letzten <span className="incidence-days">{incidenceDays} Tage</span></span>);
      };
      // htmlItems.push(<span>.</span>);       


      if(Number.isFinite(this.state.todayIncidence)){
        htmlItems.push(<br />);
        htmlItems.push(<span>Aktuelle Inzidenz im LK <span className="incidence-value">{this.state.todayIncidence.toFixed(2)}</span> </span>);
      }      
    }
    //  else{
    //   htmlItems.push(<span>.</span>);       
    // }

    // if(dateItems.length == 2){
    //   htmlItems.push(
    //     dateItems[0],
    //     <span>, </span>,
    //     dateItems[1],
    //     <span> </span>,
    //   );
    // } else{
    //   htmlItems.push(
    //     dateItems[0],
    //     <span> </span>
    //   );
    // }

    // if(incidenceItems.length > 0){
    //   htmlItems.push(
    //     <span>bei einer Inzidenz </span>
    //   );      
    //   if(incidenceItems.length == 2){
    //     htmlItems.push(
    //       incidenceItems[0],
    //       <span> und </span>,
    //       incidenceItems[1],
    //       <span>.</span>,
    //     );        
    //   } else{
    //     htmlItems.push(
    //       incidenceItems[0],
    //       <span>.</span>
    //     );        
    //   }
    // }

    return (
      <div className="rule-set-banner">
        <div className="rule-set-banner-ico">
          <img src="https://img.icons8.com/officel/80/000000/info.png"/>
        </div>
        <div className="rule-set-banner-content">
          {htmlItems}
        </div>
      </div>
    )
  }

  async componentDidMount(){
    await this.updateUI();
  }

  
  render(){
    return (
      (this.state.activeRuleSets && this.state.activeRuleSets.length > 0) ?  
        this.state.activeRuleSets.map((rs, i) => {
          return <div key={i} className="rule-set">
            {this.renderRuleSetBanner(rs)}
            {rs.rules.map((rule, i) => {
              return this.renderRule(rule, i)
            })}
          </div>
        })
      :
        <div className="no-ruleset">{this.props.noRulesMessage}</div>
    );
  }

}