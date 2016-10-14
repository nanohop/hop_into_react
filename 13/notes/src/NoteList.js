import React, { Component } from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
  
  render() {
    return (
      <div className="note-list">
        <div>Notes <button onClick={this.props.addNote}>Add</button></div>
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
