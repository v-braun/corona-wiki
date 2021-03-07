import { Component } from 'react';
import './horizontal-scroll-container.scss'

export class HScroll extends Component{

  render(){
    return (
      <div ref={this.props.innerRef} className="h-scroll-cnt">
        <div className="h-scroll-cnt-inner">
          {this.props.children}     
        </div>
      </div>
    )
  }
}