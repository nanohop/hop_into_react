import React, { Component } from 'react';
import { PageHeader, Button, ListGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import NoteItem from './NoteItem';

class NoteList extends Component {
  
  render() {
    if(!this.props.loaded) {
      return (
        <div className="loading">Loading...</div>
      )
    }

    return (
      <div>
        <PageHeader>
          Notes
          <Button className="pull-right" onClick={this.props.addNote}>
            <FontAwesome name='plus' />
          </Button>
        </PageHeader>
        <ListGroup>
          {
            this.props.notes.map((note) => {
              return <NoteItem 
                key={note.id} 
                note={note} 
                deleteNote={() => this.props.deleteNote(note.id)}
                onClick={() => this.props.editNote(note.id)} />     
            })
          }
        </ListGroup>
      </div>
    );
  }
}

export default NoteList;
