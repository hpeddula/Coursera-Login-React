import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import CssBaseline from '@material-ui/core/CssBaseline';
class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
