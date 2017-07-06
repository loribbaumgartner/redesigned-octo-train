import React, { Component } from 'react';
import MonthDayYear from './MonthDayYear.js';
import Weekday from './Weekday.js'

class DateBlock extends Component {
  render() {
    const today = new Date();

    return (
      <div className="date-block">
        <MonthDayYear
          date={today}
        />
        <Weekday
          date={today}
        />
      </div>
    );
  }
}

export default DateBlock;
