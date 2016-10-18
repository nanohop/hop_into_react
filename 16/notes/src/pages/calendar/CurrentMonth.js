import React, { Component } from 'react';

class CurrentMonth extends Component {

  render() {
    var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var monthLabel = months[this.props.date.getMonth()]
    return <div className="currentMonth">{monthLabel}, {this.props.date.getFullYear()}</div>
  }

}

export default CurrentMonth;
