import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    id: this.props.note && this.props.note.id,
    title: this.props.note && this.props.note.title,
    text: this.props.note && this.props.note.text
  }

  updateNote() {
    this.props.updateNote(this.state)
  }

  titleChanged(e) {
    this.setState({title: e.target.value});
  }

  noteChanged(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div className="note-editor">
        <input 
          type="text" 
          placeholder="Title" 
          value={this.state.title} 
          onChange={this.titleChanged.bind(this)} />
        <textarea rows="4" cols="50" 
          placeholder="Note" 
          value={this.state.text} 
          onChange={this.noteChanged.bind(this)} />
        <button onClick={this.updateNote.bind(this)}>Save</button>
      </div>
    )
  }

}

export default NoteEditor;
