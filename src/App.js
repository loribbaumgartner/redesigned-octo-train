import React, { Component } from 'react';
import Button from './Button.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <h2>Resdesigned Octo Train</h2>
          <p>
            Eventually this will be a list app.
          </p>
          <Button>+</Button>
        </div>
      </div>
    );
  }
}

export default App;
