import React, { Component } from 'react';
import DateBlock from './DateBlock.js';
import TodoForm from './TodoForm.js';
import Button from './Button.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <DateBlock />
          <TodoForm />
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
