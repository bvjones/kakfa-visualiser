import React, { Component } from 'react';
import logo from './logo.svg';
import openSocket from 'socket.io-client';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.socket = null;
  }

  componentWillMount() {
     this.socket = openSocket('http://localhost:3001');

     this.socket.on('kafkaEvent', function (data) {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
