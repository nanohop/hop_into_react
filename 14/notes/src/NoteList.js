import React, { Component } from 'react';
import { PageHeader, Button, ListGroup } from 'react-bootstrap';
import NoteItem from './NoteItem';

class NoteList extends Component {
  
  render() {
    return (
      <div>
        <PageHeader>
          Notes
          <Button
            className="pull-right"
            onClick={this.props.addNote}>Add</Button>
        </PageHeader>
        <ListGroup>
          {
            this.props.notes.map((note) => {
              return <NoteItem 
                key={note.id} 
                note={note} 
                onClick={() => this.props.editNote(note.id)} />     
            })
          }
        </ListGroup>
      </div>
    );
  }
}

export default NoteList;
