import React from 'react';
import { render } from 'react-dom';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
    this._handleSearch = this._handleSearch.bind(this)
  }
  componentDidUpdate() {

  }
  _handleSearch(query) {
    console.log("you are searching", query, localStorage)
    if(!query) {
      return;
    }
  }
  render() {
    return (
      <div className="search-container">
        <AsyncTypeahead
          allowNew
          labelKey="name"
          minLength={1}
          newSelectionPrefix="Search hashtag: #"
          onInputChange={ text => this.props.updateChild(text) }
          onSearch={this._handleSearch}
          options={this.props.options}
          placeholder="Search a hashtag..."
          renderMenuItemChildren={(option, props, index) => (
            <div>
              <span key={index}>{option.name}</span>
            </div>
          )}
        />
      </div>
    );
  }
}
export default SearchBar;
