import { Component } from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment'



/**
* @augments {Component<{
    ruleSets: import('../services/rulesService').RuleSet[], 

    references: [],
    
    state: string,
    stateName: string,
    
    district: string,
    districtName: string,

    districtIncidence: number,
    stateIncidence: number,

    globalStateSettings: object,
}, 
{
  
}
>}
*/
export class AreaRuleSets extends Component{

  static propTypes = {
    ruleSets: PropTypes.any.isRequired,
    
    state: PropTypes.string.isRequired,
    stateName: PropTypes.string.isRequired,

    district: PropTypes.string.isRequired,
    districtName: PropTypes.string.isRequired,

    references: PropTypes.array,
    
    districtIncidence: PropTypes.number.isRequired,
    stateIncidence: PropTypes.number.isRequired,

    globalStateSettings: PropTypes.object.isRequired,
  }

  constructor(props){
    super(props);

    this.state = {
      
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
      console.error('failed parse date', date, 'ctx', ctx);
      return null;
    }
  }

  __lastXDays(history, days){
    if(history.length <= 0) return [];
    return history.slice(Math.max(history.length - days, 0));
  }

  /**
   * 
   * @param {import('../services/rulesService').RuleSet} ruleSet 
   */
  renderRuleSetReference(references){
    if(!references || references.length <= 0) return;

    let mapped = references.map(r => {
      let linkTitle = null;
      if(r.link){
        try{
          const {hostname} = new URL(r.link)
          linkTitle = hostname;
        }catch(e){
          console.error('could not parse link', r, 'context', references);
        }
      }

      return {
        title: linkTitle,
        url: r.link,
        date: r.date
      };
    }).filter(r => r.title);

    return (
      <div className="rule-set-references">
        {mapped.map((ref, i) => {
        <div className="references-title">Einzelnachweise</div>
          return <a key={i} target="blank" className="ref-link" href={ref.url}>&bull; <b>{ref.title}</b> <span>(vom {ref.date})</span></a>
        })}
        
      </div>
    );
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
    let takeIncidenceFromState = this.props.globalStateSettings.rule_incidence_src === 'state';

    if(!dateFrom && !dateTo && !Number.isFinite(incidenceFrom) && !Number.isFinite(incidenceTo)){
      return;
    }
    
    return (
      <div className="rule-set-banner">
        <div className="rule-set-banner-ico">
          <img alt="Info" src="https://img.icons8.com/officel/80/000000/info.png"/>
        </div>
        <div className="rule-set-banner-content">
          <span key="title">Folgende Regelungen gelten</span>
          {dateFrom && <span key="dateFrom" className="date-value">{` vom ${dateFrom.format('D. MMM. YYYY')}`}</span>}
          {dateTo && <span key="dateFrom" className="date-value">{` bis zum ${dateTo.format('D. MMM. YYYY')}`}</span>}

          {(Number.isFinite(incidenceFrom) || Number.isFinite(incidenceTo)) && 
            <span key="incidence-info">
              <span key="incidenceTitle"> bei einer Inzidenz von</span>
              {Number.isFinite(incidenceFrom) && 
                <span key="incidence-from" className="incidence" > mehr als {incidenceFrom}</span>
              }
              {(Number.isFinite(incidenceFrom) && Number.isFinite(incidenceTo)) &&               
                <span key="incidence-and"> und</span>
              }
              {Number.isFinite(incidenceTo) && 
                <span key="incidence-to" className="incidence"> weniger als {incidenceTo}</span>
              }
              {Number.isFinite(incidenceDays) && 
                <span key="incidence-days"> über die <span className="incidence">letzten {incidenceDays} Tage</span></span>
              }
              {(Number.isFinite(incidenceFrom) || Number.isFinite(incidenceTo)) &&
                <span>
                  {takeIncidenceFromState && 
                    <i>
                      <br />
                      <br />
                      In <b>{this.props.stateName}</b> gilt:
                      <br />
                      Die Inzidenz des Bundeslandes (<span className="incidence">{this.props.stateIncidence.toFixed(0)}</span>) ist Grundlage der Regelberechnung
                    </i>
                  }
                  {!takeIncidenceFromState && 
                    <span key="district-incidence">
                      <i>
                        <br />
                        <br />
                        Aktuelle Inzidenz in <b>{this.props.districtName}</b> beträgt <span className="incidence">{this.props.districtIncidence.toFixed(0)}</span>
                      </i>
                    </span>
                  }
                </span>

              }
            </span>
          }
        </div>
      </div>      
    );
  }  


  
  render(){
    return (
      (this.props.ruleSets && this.props.ruleSets.length > 0) &&
        this.props.ruleSets.map((rs, i) => {
          return <div key={i} className="rule-set">
            {this.renderRuleSetBanner(rs)}
            {rs.rules.map((rule, i) => {
              return this.renderRule(rule, i)
            })}
            {this.renderRuleSetReference(this.props.references)}
          </div>
        })
      
    );
  }

}