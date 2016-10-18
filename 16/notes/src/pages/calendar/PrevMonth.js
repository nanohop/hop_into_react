import React, { Component } from 'react';

class PrevMonth extends Component {
  
  render() {
    return <a className="prev" onClick={this.props.onClick}>&lt;</a>
  }

}
export default PrevMonth;
