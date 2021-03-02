import { Component } from 'react';
import PropTypes from 'prop-types'



/**
* @augments {Component<{
  abbreviation: string, 
  name: string, 
  ico: string, 
  selected: bool, 
  
  newCases: number, 
  newDeaths: number, 
  newRecovered: number, 

  cases: number,
  deaths: number,
  recovered: number,  

  weekIncidence: number, 
  
  onClick: function
}, object>}
*/
export class StateButton extends Component{

  static propTypes = {
    abbreviation: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ico: PropTypes.string,

    selected: PropTypes.bool,
    
    newCases: PropTypes.number.isRequired,
    newDeaths: PropTypes.number.isRequired,
    newRecovered: PropTypes.number.isRequired,

    cases: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,    

    weekIncidence: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }
  
  render(){
    let ico = this.props.ico;
    if(!ico){
      ico = `https://avatars.dicebear.com/api/initials/${this.props.abbreviation}.svg`;
    }
    let classes = 'filter-btn scroll-item';
    if(this.props.selected){
      classes += ' selected';
    }

    return (
      <button className={classes} type="button" onClick={() => this.props.onClick(this.props.abbreviation)}>
        <div className="header-ctr">
          <div className="ico-ctr">
            <img alt={this.props.name} src={ico} />
          </div>
          <div className="title-ctr">
            <span className="name">{this.props.name}</span>

              <span className="fg-incidence">
                (Inzidenz: {this.props.weekIncidence.toFixed(0)})
              </span>            
          </div>
        </div>

        <div className="stats-ctr">
          <div className="stats">
              <span className="stat fg-cases">
                <span className="stat-name">Fälle</span>
                <span className="stat-val">{this.props.cases.toLocaleString()}</span>
                <span className="stat-val-sub">+{this.props.newCases.toLocaleString()}</span>
              </span>
              <span className="stat fg-deaths">
                <span className="stat-name">Verstorben</span>
                <span className="stat-val">{this.props.deaths.toLocaleString()}</span>
                <span className="stat-val-sub">+{this.props.newDeaths.toLocaleString()}</span>
              </span>            
              <span className="stat fg-recovered">
                <span className="stat-name">Genesen</span>
                <span className="stat-val">{this.props.recovered.toLocaleString()}</span>
                <span className="stat-val-sub">+{this.props.newRecovered.toLocaleString()}</span>
              </span>
          </div>          
        </div>
      </button>
    )
  }

}


// export default StateButton;