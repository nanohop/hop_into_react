import React, { Component } from 'react';

class NextMonth extends Component {
  
  render() {
    return <a className="next" onClick={this.props.onClick}>&gt;</a>
  }

}

export default NextMonth;
