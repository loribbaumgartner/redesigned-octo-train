import React, { Component } from 'react';
import DateBlock from './DateBlock.js';
import TodoForm from './TodoForm.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list">
          <DateBlock />
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
