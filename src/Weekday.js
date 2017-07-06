import React, { Component } from 'react';

class Weekday extends Component {
  getDayString(today) {
    const day = today.getDay();
    switch(day) {
        case 0:
          return 'Sunday'
        case 1:
          return 'Monday'
        case 2:
          return 'Tuesday'
        case 3:
          return 'Wednesday'
        case 4:
          return 'Thursday'
        case 5:
          return 'Friday'
        case 6:
          return 'Saturday'
      }
  }

  render() {
    return (
      <div className="weekday">
        {this.getDayString(this.props.date)}
      </div>
    );
  }
}

export default Weekday;
