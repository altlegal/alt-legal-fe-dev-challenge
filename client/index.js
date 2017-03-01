import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavbarMenu from './navbar/navbar.js';
import Main from './main/main.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavbarMenu />
        <Main />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
