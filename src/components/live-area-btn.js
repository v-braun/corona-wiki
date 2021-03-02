import { Component, createRef } from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './live-area-btn.scss';


/**
* @augments {Component<{
  id: string,
  ico: string,
  selected: boolean,
  title: string,
  desc: string,
  ruleShort: string,
  onClick: function,
}, 
{
}
>}
*/
export class LiveAreaButton extends Component{

  static propTypes = {
    id: PropTypes.string.isRequired,
    ico: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    ruleShort: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props)
    this.btnRef = createRef();
  }
  
 
  renderRuleShort(ruleShort){
    switch(ruleShort){
      case 'unknown': return (<div className="rule-short rule-short-na">Fehlende Infos</div>)
      case 'closed': return (<div className="rule-short rule-short-danger">Geschloßen</div>)
      case 'forbidden': return (<div className="rule-short rule-short-danger">Nicht erlaubt</div>)
      case 'limit': return (<div className="rule-short rule-short-warn">Mit Einschränkungen</div>)
      case 'nolimit': return (<div className="rule-short rule-short-success">Ohne Einschränkungen</div>)
      case 'open': return (<div className="rule-short rule-short-success">Geöffnet</div>)
      case 'allow': return (<div className="rule-short rule-short-success">Erlaubt</div>)

      default: return (<div className="rule-short rule-short-unknown">&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;</div>)
    }
  }


  render(){        
    let ico = this.props.ico;
    if(!ico){
      ico = `https://avatars.dicebear.com/api/initials/${this.props.title}.svg`;
    }
    let classes = 'filter-btn area-btn';
    if(this.props.selected){
      classes += ' selected';
    }
    let titleCls = 'title';
    if(this.props.title){
      if(this.props.title.length < 25){
        titleCls += '';
      } else if(this.props.title.length < 35){
        titleCls += ' title-l';
      } else {
        titleCls += ' title-xl';
      }
    } 

    return (
      <button  ref={this.btnRef} className={classes} type="button" onClick={() => this.props.onClick(this.props.id, this.btnRef)}>
        <div className="header-ctr">
          <div className="ico-ctr">
            <img alt={this.props.name} src={ico} />
          </div>
          <div className="title-ctr">
            <ReactMarkdown className={titleCls}>
              {this.props.title}                
            </ReactMarkdown>
            {this.renderRuleShort(this.props.ruleShort)}
          </div>
        </div>
        <div className="body-ctr">
          {this.props.desc && 
            <ReactMarkdown className="desc area-md">{this.props.desc}</ReactMarkdown>
          }
        </div>
      </button>
    )    
  }

}