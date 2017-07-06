import React, { Component } from 'react';
import ListItems from './ListItems.js'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({newTodo: event.target.value});
  }

  handleSubmit = event => {
    console.log('in handleSubmit')
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          placeholder="Add an item"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
      <ListItems>
        <ul>
          <li>Example item</li>
          <li>Example item</li>
          <li>Example item</li>
        </ul>
      </ListItems>
      <input type='submit' className="button" value="+" />
      </form>
    );
  };
};

export default TodoForm;
