import React, { Component } from 'react';

class MonthDayYear extends Component {
  render() {
    const today = this.props.date;
    const locale = "en-us"
    const dayOfMonth = today.toLocaleString(locale, { day: "2-digit" });
    const month = today.toLocaleString(locale, { month: "short" });
    const year = today.toLocaleString(locale, { year: "2-digit" });

    return (
      <div className="month-day-year">
        <div className='day'>{dayOfMonth}</div>
        <div className='month-year-stack' >
          <div>{month}</div>
          <div>{year}</div>
        </div>
      </div>
    );
  }
}

export default MonthDayYear;
