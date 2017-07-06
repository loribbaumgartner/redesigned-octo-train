import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};

export default ListItems;
