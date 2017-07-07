import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    var todos = this.props.todoItems;

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todos.map(createTasks);

    return (
      <div  className='list-items'>
        {listItems}
      </div>
    );
  };
};

export default ListItems;
