import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    return (
      <div  className='list-items'>
        {this.props.children}
      </div>
    );
  };
};

export default ListItems;
