import { Component, createRef } from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import './life-area-btn.scss';


/**
* @augments {Component<{
  id: string,
  ico: string,
  selected: boolean,
  title: string,
  ruleShort: string,
  annotation: string,
  onClick: function,
}, 
{
}
>}
*/
export class LifeAreaButton extends Component{

  static propTypes = {
    id: PropTypes.string.isRequired,
    ico: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string.isRequired,
    ruleShort: PropTypes.string,
    annotation: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props)
    this.btnRef = createRef();
  }
  
  renderAnnotation(annotation){
    switch(annotation){
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

  scrollToMe(){
    if(!this.props.selected) return;

    let el = this.btnRef?.current
    if(!el) return;

    let scrollParent = el.parentElement?.parentElement?.parentElement;
    scrollParent?.scrollTo({behavior:'smooth', left:el.offsetLeft});
  }

  async componentDidUpdate(prevProps){
    if(this.props.selected !== prevProps.selected && this.props.selected){
      this.scrollToMe();
    }
  }    

  componentDidMount(){
    this.scrollToMe();
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
            {this.props.annotation && 
              this.renderAnnotation(this.props.annotation)
            }
          </div>
        </div>
        {/* <div className="body-ctr">
          {this.props.desc && 
            <ReactMarkdown className="desc area-md">{this.props.desc}</ReactMarkdown>
          }
        </div> */}
      </button>
    )    
  }

}