import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers/Customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React </h3>
        </header>
        <Customers />

      </div>
    );
  }
}

export default App;
