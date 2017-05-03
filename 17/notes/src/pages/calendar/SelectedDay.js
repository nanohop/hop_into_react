import React, { Component } from 'react';

class SelectedDay extends Component {

  state = {
    inputValue: ""
  }
  
  componentWillUnmount() {
    if(this._timer) {
      clearInterval(this._timer);
    }
  }

  renderDate() {
    return <span>Selected Day: {this.dayString()}</span>
  }

  dayString() {
    var month = this.props.currentMonth.getMonth() + 1;
    var day = this.props.selectedDay;
    var year = this.props.currentMonth.getFullYear();
    return month + "/" + day + "/" + year;
  }
  
  inputChanged(e) {
    this.setState({inputValue: e.target.value});
  }
  
  addTodo() {
    this.props.addTodo(this.dayString(), this.state.inputValue);
    this.setState({inputValue: ""});
  }

  removeTodo(index) {
    this.props.removeTodo(this.dayString(), index);
  }

  startTimer(todo, e) {
    e.stopPropagation();
    this.props.startTimer(todo);
  }

  tick() {
    this.setState({currentTime: new Date()})
  }

  renderTodos() {
    return this.props.todos.map(function(todo, index) {
      return (
        <li key={todo} onClick={this.removeTodo.bind(this, index)}>
          {todo}
          <button onClick={this.startTimer.bind(this, todo)}>Start</button>
        </li>
      )
    }, this);
  }

  render() {
    if(!this.props.selectedDay) {
      return null;
    }

    return (
      <div className="selectedDay">
        {this.renderDate()}
        <div>
          <button onClick={this.addTodo.bind(this)}>Add</button>
          <input type="text" onChange={this.inputChanged.bind(this)} value={this.state.inputValue} />
        </div>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }

}

export default SelectedDay;
