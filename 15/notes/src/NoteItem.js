import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class NoteItem extends Component {
  render() {
    return (
      <li 
        className="list-group-item pull-left note-item"
        onClick={this.props.onClick}>
          <Button 
            className="pull-right btn-xs" 
            onClick={this.props.deleteNote}>
            <FontAwesome name='trash' />
          </Button>

          {this.props.note.title}
      </li>
    );
  }
}

export default NoteItem;
