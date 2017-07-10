import React, { Component } from 'react';
import ScrollableList from 'react-scrollable-list';

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
        content: '• ' + this.state.newTodo,
        id: Date.now(),
      }
    );

    this.setState({ items: itemsArray, newTodo: '' });
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
        <ScrollableList
          listItems={this.state.items}
          heightOfItem={30}
          maxItemsToRender={12}
        />
      <input type='submit' className="button" value="+" />
      </form>
    );
  };
};

export default TodoForm;
