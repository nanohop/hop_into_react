import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

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
    this.props.titleChanged(this.state.id, e.target.value);
    this.setState({title: e.target.value});
  }

  noteChanged(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div className="note-editor">
        <FormGroup>
          <FormControl 
            placeholder="Title" 
            value={this.state.title} 
            onChange={this.titleChanged.bind(this)} />
          <br />
          <FormControl 
            componentClass="textarea"
            rows="4" cols="50" 
            placeholder="Note" 
            value={this.state.text} 
            onChange={this.noteChanged.bind(this)} />
          <br />
          <Button 
            bsStyle="primary" 
            onClick={this.updateNote.bind(this)}>Save</Button>
        </FormGroup>
      </div>
    )
  }

}

export default NoteEditor;
