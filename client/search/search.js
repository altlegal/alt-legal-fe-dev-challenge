import React from 'react';
import { render } from 'react-dom';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="search-container">
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>#</InputGroup.Addon>
            <FormControl id="searchbar" placeholder="hashTags" type="text" />
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}
export default SearchBar;
