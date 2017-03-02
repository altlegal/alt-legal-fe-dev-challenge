import React from 'react';
import { render } from 'react-dom';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
<<<<<<< HEAD
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import $ from 'jquery';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: [],
      search: '',
      searchText: ''
    }
    this._handleUpdateInput = this._handleUpdateInput.bind(this)
    this._handleNewRequest = this._handleNewRequest.bind(this)
  }
  /* Handles Event When inputting */
  _handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  /* Handles Event When Click or Enter */
  _handleNewRequest = () => {
    this.props.updateChild(this.state.searchText)
  }
  render() {
    this.props.options.forEach((element ,index) => {
      if(element.name[0] === "#") this.state.options.push(element.name);
    })
    return (
      <div className="search-container">
        <MuiThemeProvider>
        <AutoComplete
            label="name"
            filter={(searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1}
            searchText={this.state.search}
            onUpdateInput={this._handleUpdateInput}
            onNewRequest={this._handleNewRequest}
            hintText="Search #hashtag..."
            dataSource={this.state.options}
            openOnFocus={true}
          />
        </MuiThemeProvider>
      </div>
    );
=======

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
>>>>>>> 07adb3a568d60abfc808ffa87bdfa27cbe939f87
  }
}
export default SearchBar;
