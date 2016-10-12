import React, { Component } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

let NOTES = [
  {id: 0, title: "Note #1", note: "My note content 1"},
  {id: 1, title: "Note #2", note: "My note content 2"} 
]

class Notes extends Component {

  state = {
    editNoteId: 0
  }
  
  editNote(noteId) {
    this.setState({editNoteId: noteId});
  }

  render() {
    return (
      <div className="notes-container">
        <NoteList notes={NOTES} editNote={this.editNote.bind(this)} />
        <NoteEditor 
          key={this.state.editNoteId} 
          note={NOTES.find(note => note.id === this.state.editNoteId)} />
      </div>
    )
  }

}

export default Notes;
