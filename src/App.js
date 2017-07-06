import React, { Component } from 'react';
import Button from './Button.js';
import DateBlock from './DateBlock.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <DateBlock />
          <p>
            Eventually this will be a list app.
          </p>
        </div>
        <Button>+</Button>
      </div>
    );
  }
}

export default App;
