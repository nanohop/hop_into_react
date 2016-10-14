import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class NoteItem extends Component {
  render() {
    return (
      <ListGroupItem onClick={this.props.onClick}>
        {this.props.note.title}
      </ListGroupItem>
    );
  }
}

export default NoteItem;
