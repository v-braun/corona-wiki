import { Component, createRef } from 'react';
import PropTypes from 'prop-types'

import ReactTags from 'react-tag-autocomplete'
import * as searchSvc from '../services/searchService';

import "./search-box.scss";


/**
* @augments {Component<{
  onSearched: function,
}, object>}
*/
export class SearchBox extends Component{


  static propTypes = {
    onSearched: PropTypes.func.isRequired,
  }  

  constructor (props) {
    super(props)

    this.state = {
      tags: [],
      suggestions: []
    }

    this.reactTags = createRef()
  }

  renderTag(prop) {
    return (
      // keeup on one line to keep space
      <span id={prop.tag.id} className={`tag tag-${prop.tag.type}`}>{prop.tag.name} </span>
    )
  }

  renderSuggestion(prop){
    return (
      // keeup on one line to keep space
      <span id={prop.item.id} className={`suggestion suggestion-${prop.item.type}`}>{prop.item.name} </span>
    )    
  }

  onDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  onAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })

    if(!tags) return;
    let district = tags.find(item => item.type === 'district');
    let area = tags.find(item => item.type === 'area');

    let notification = {
      state: district?.state,
      district: district?.id,
      area: area?.id
    }

    if(this.props.onSearched) this.props.onSearched(notification)

  }

  async onSearchTextChanged(input){
    let suggestions = [];
    if(input){
      let matches = await searchSvc.search(input);
      suggestions = matches.map(m => m.item);
    }

    this.setState({
      suggestions: suggestions
    });
  }

  suggestionsFilter(suggestions, query) {
    if(!query) return false;
    return true;
  }  

  render() {

    return (
      <div className="search-box">
        <div className="search-ico">
          <img src="https://img.icons8.com/officel/80/000000/search--v1.png"/>
        </div>
        <div className="search-field-cnt">


        <ReactTags
        // ref={this.reactTags}
        tags={this.state.tags}
        minQueryLength={2}
        suggestions={this.state.suggestions}
        onInput={(input) => this.onSearchTextChanged(input)}
        onDelete={this.onDelete.bind(this)}
        onAddition={this.onAddition.bind(this)} 
        tagComponent={(prop) => this.renderTag(prop)}
        suggestionComponent={(prop) => this.renderSuggestion(prop)}
        suggestionsFilter={(suggestions, query) => this.suggestionsFilter(suggestions, query)}
        placeholderText={`z.b.: Berlin Friseure`}
        />


        </div>
      </div>      
      // <TagsInput
      //   value={this.state.tags}
      //   onChange={::this.handleChange}
      //   inputValue={this.state.tag}
      //   onChangeInput={::this.handleChangeInput}
      // />
    )
  }

}





