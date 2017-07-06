import React, { Component } from 'react';

class Weekday extends Component {
  render() {
    const locale = "en-us"
    const today = this.props.date.toLocaleString(locale, { weekday: "long" });
    return (
      <div className="weekday">
        {today}
      </div>
    );
  }
}

export default Weekday;
