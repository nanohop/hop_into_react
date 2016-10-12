import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.note.title,
    note: this.props.note.note
  }

  titleChanged(e) {
    this.setState({title: e.target.value});
  }

  noteChanged(e) {
    this.setState({note: e.target.value});
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
          value={this.state.note} 
          onChange={this.noteChanged.bind(this)} />
        <button>Save</button>
      </div>
    )
  }

}

export default NoteEditor;
