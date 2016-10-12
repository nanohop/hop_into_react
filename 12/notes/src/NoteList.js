import React, { Component } from 'react';
import NoteItem from './NoteItem';

class NoteList extends Component {
  
  render() {
    return (
      <div className="note-list">
        <div>Notes <button>Add</button></div>
        <ul>
          {
            this.props.notes.map((note, index) => {
              return <NoteItem 
                key={index} 
                note={note} 
                onClick={() => this.props.editNote(index)} />     
            })
          }
        </ul>
      </div>
    );
  }
}

export default NoteList;
