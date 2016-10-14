import React, { Component } from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
  
  render() {
    return (
      <div className="note-list">
        <h2>Notes <button>Add Note</button></h2>
        <ul>
          {
            this.props.notes.map((note) => {
              return <NoteItem 
                key={note.id} 
                note={note} 
                onClick={() => this.props.editNote(note.id)} />     
            })
          }
        </ul>
      </div>
    );
  }
}

export default NoteList;
