import React, { Component } from 'react';

class Day extends Component {

  render() {
    return <span className={"day " + (this.props.selected ? "selected" : "")}
      style={{textDecoration: (this.props.todos.length > 0 ? 'underline' : 'none')}} 
      onClick={this.props.onClick}>{this.props.number}</span>
  }

}

export default Day;
