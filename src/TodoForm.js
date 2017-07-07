import React, { Component } from 'react';
import ListItems from './ListItems.js'

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange = event => {
    this.setState({newTodo: event.target.value});
  }

  addItem = event => {
    var itemsArray = this.state.items;

    itemsArray.push(
      {
        text: this.state.newTodo,
        key: Date.now(),
      }
    );

    this.setState({ items: itemsArray });
    this.state.newTodo = '';
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.addItem}
      >
        <input
          type='text'
          placeholder="Add an item"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
      <ListItems todoItems={this.state.items} />
      <input type='submit' className="button" value="+" />
      </form>
    );
  };
};

export default TodoForm;
