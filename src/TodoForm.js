import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  handleChange = event => {
    this.setState({newTodo: event.target.value});
  }

  render() {
    console.log(this.state.newTodo);
    return (
      <div className="form-input">
        <input
          type='text'
          placeholder="Add an item"
          value={this.state.newTodo}
          onChange={this.handleChange}
          autoFocus={true}
        />
      </div>
    );
  };
};

export default TodoForm;
