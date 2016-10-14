import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

class Notes extends Component {

  state = {
    notes: [],
    editNoteId: null,
    loaded: false
  }
  
  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes() {
    var request = new Request('http://localhost:3001/notes', {
      method: 'GET',
    });

    fetch(request)
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {this.setState({notes: json, loaded: true})}, 1000)
      })
      .catch((err) => console.warn("Error! ", err));
  }
  
  addNote() {
    var request = new Request('http://localhost:3001/notes', {
      method: 'POST',
      body: {}
    });

    fetch(request)
      .then((response) => this.fetchNotes())
      .catch((err) => console.warn("Error! ", err));
  }

  updateNote(note) {
    var request = new Request('http://localhost:3001/notes/'+note.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });

    fetch(request)
      .then((response) => this.fetchNotes())
      .catch((err) => console.warn("Error! ", err));
  }

  deleteNote(note_id) {
    var request = new Request('http://localhost:3001/notes/'+note_id, {
      method: 'DELETE'
    });

    fetch(request)
      .then((response) => this.fetchNotes())
      .catch((err) => console.warn("Error! ", err));
  }

  editNote(noteId) {
    this.setState({editNoteId: noteId});
  }

  titleChanged(noteId, newTitle) {
    const newNotes = this.state.notes.map((note) => {
      if(note.id === noteId) {
        return {
          id: noteId,
          title: newTitle,
          text: note.text
        }
      } else {
        return note;
      }
    })

    this.setState({notes: newNotes});
  }

  render() {
    return (
      <Grid className="notes-grid">
        <Row>
          <Col xs={4}>
            <NoteList 
              notes={this.state.notes} 
              editNote={this.editNote.bind(this)} 
              addNote={this.addNote.bind(this)} 
              deleteNote={this.deleteNote.bind(this)} 
              loaded={this.state.loaded} />
          </Col>
          <Col xs={8}>
            <NoteEditor 
              key={this.state.editNoteId} 
              note={this.state.notes.find(note => note.id === this.state.editNoteId)} 
              titleChanged={this.titleChanged.bind(this)}
              updateNote={this.updateNote.bind(this)} />
          </Col>
        </Row>
      </Grid>
    )
  }

}

export default Notes;
