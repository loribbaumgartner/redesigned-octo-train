import React, { Component } from 'react';

class MonthDayYear extends Component {
  render() {
    const today = this.props.date;
    const month = today.getMonth() + 1;
    const dayOfMonth = today.getDate();
    const year = today.getFullYear();
    return (
      <div className="month-day-year">
        <div className='day'>{dayOfMonth}</div>
        <div className='month-year-stack' >
          <span className='month'>{month}</span>
          <span className='year'>{year}</span>
        </div>
      </div>
    );
  }
}

export default MonthDayYear;
