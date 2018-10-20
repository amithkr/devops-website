import React, { Component } from 'react';
import logo from './devops.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            A website for devops 
          </h1>
          
        </header>
        <footer>
          OPEN SOURCE
        </footer>
      </div>
    )}
}

export default App;
