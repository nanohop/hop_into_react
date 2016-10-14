import React, { Component } from 'react';

class NoteItem extends Component {
  render() {
    return (
      <li 
        className="note-item" 
        onClick={this.props.onClick}>{this.props.note.title}</li>
    );
  }
}

export default NoteItem;
