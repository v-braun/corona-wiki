import { Component, createRef, Fragment } from 'react';
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
    let tag = prop.tag.item;
    return (
      // keeup on one line to keep space
      <span id={tag.id} className={`tag tag-${tag.type}`}>{tag.name} </span>
    )
  }

  /**
   * 
   * @param {string} text 
   * @param {*} match 
   */
  renderSuggestionText(text, match){
    if(!match) return text;
    if(!match.indices || match.indices.length < 0) return text;

    // space for improvements (mark only first match not all substrings) #todo
    let index = match.indices[0];
    if(index.length < 2) return text;
    let hilghlited = text.substr(index[0], index[1]-index[0]+1);
    let before = text.substr(0, index[0]);
    let after = text.substr(index[1]+1, text.length-before.length-hilghlited.length);
    
    return (<Fragment>
      {before}<b>{hilghlited}</b>{after}
    </Fragment>)
  }

  renderSuggestion(prop){
    let match = null;
    if(prop.item.matches && prop.item.matches.length > 0){
      match = prop.item.matches[0];
    }

    if(prop.item.item.type === 'district'){
      return (<span id={prop.item.item.id} className={`suggestion suggestion-${prop.item.item.type}`}>{this.renderSuggestionText(prop.item.item.name, match)} </span>)
    } 

    // area
    return (  
      <span id={prop.item.item.id} className={`suggestion suggestion-${prop.item.item.type}`}>
        {match?.key === 'name' ? 
          <span className="area-name">{this.renderSuggestionText(prop.item.item.name, match)}</span>
          :
          <span className="area-name-with-hint">
            <span className="area-name">
              {this.renderSuggestionText(prop.item.item.name, null)}
            </span>
            <span className="area-example">
              z.b.: {this.renderSuggestionText(match.value, match)}
            </span>
          </span>
        } 
      </span>
    );
    
  }

  onDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }

  onAddition (tag) {
    let tags = this.state.tags.filter(t => t.item.type !== tag.item.type); // remove existing of same type 
    tags = [].concat(tags, tag)
    this.setState({ tags })

    if(!tags) return;
    let district = tags.find(item => item.item.type === 'district');
    let area = tags.find(item => item.item.type === 'area');

    let notification = {
      state: district?.item?.state,
      district: district?.item?.id,
      area: area?.item?.id
    }

    if(this.props.onSearched) this.props.onSearched(notification)

  }

  async onSearchTextChanged(input){
    let suggestions = [];
    if(input){
      let matches = await searchSvc.search(input);
      // suggestions = matches.map(m => m.item);
      suggestions = matches;
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
          <img alt="Suche" src="https://img.icons8.com/officel/80/000000/search--v1.png"/>
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
        placeholderText={`z.b.: Berlin MediaMarkt`}
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





