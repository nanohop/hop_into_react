import React, { Component } from 'react';

import SelectedDay from './SelectedDay';
import PrevMonth from './PrevMonth';
import NextMonth from './NextMonth';
import CurrentMonth from './CurrentMonth';
import Day from './Day';
import Timer from './Timer';

class Calendar extends Component {

  state = {
    date: new Date((new Date()).getFullYear(), (new Date()).getMonth()),
    selectedDay: null,
    todos: {},
    timerTodo: null
  }

  renderHeader() {
    return ["Su", "M", "Tu", "W", "Th", "F", "Sa"].map(function(day) {
      return <span className="day" key={day}>{day}</span>
    });
  }

  renderBlanks() {
    var blankWidth = 50 * this.state.date.getDay();
    return <span className="day" style={{width: blankWidth}}></span>
  }
  

  daysOfMonth() {
    var endOfMonth = new Date(this.state.date.getFullYear(), this.state.date.getMonth()+1, 0);
    var dayNumbers = [];
    for(var i = 1; i <= endOfMonth.getDate(); i++) {
      dayNumbers.push(i);
    }
    return dayNumbers;  
  }

  renderDays() {
    return this.daysOfMonth().map(function(number) {
      return <Day key={number} number={number} 
        selected={number === this.state.selectedDay}
        todos={this.todosForDay(number)}
        onClick={this.updateSelectedDay.bind(this, number)} />
    }, this);
  }

  previousMonth() {
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth();
    this.setState({date: new Date(year, month - 1)});
  }
  
  nextMonth() {
    var year = this.state.date.getFullYear();
    var month = this.state.date.getMonth();
    this.setState({date: new Date(year, month + 1)});
  }

  updateSelectedDay(dayNumber) {
    this.setState({selectedDay: dayNumber});
  }

  addTodo(day, todo) {
    var dayTodos = this.state.todos[day] || [];
    var dayObject = {}
    dayObject[day] = dayTodos.concat(todo);
    var newTodos = Object.assign({}, this.state.todos, dayObject)
    this.setState({todos: newTodos});
  }

  removeTodo(day, index) {
    var newTodos = this.state.todos[day].slice();
    newTodos.splice(index, 1);
    var dayObject = {}
    dayObject[day] = newTodos;
    var stateTodos = Object.assign({}, this.state.todos, dayObject)
    this.setState({todos: stateTodos});
  }

  todosForDay(day) {
    var month = this.state.date.getMonth() + 1;
    var year = this.state.date.getFullYear();
    var dayString = month + "/" + day + "/" + year;
    return(this.state.todos[dayString] || []);
  }

  startTimer(todo) {
    this.setState({timerTodo: todo});
  }

  stopTimer() {
    this.setState({timerTodo: null});
  }

  renderSelectedDayOrTimer() {
    if(this.state.timerTodo) {
      return <Timer stopTimer={this.stopTimer.bind(this)} todo={this.state.timerTodo} />
    } else {
      return <SelectedDay 
          currentMonth={this.state.date} 
          selectedDay={this.state.selectedDay} 
          todos={this.todosForDay(this.state.selectedDay)}
          addTodo={this.addTodo.bind(this)} 
          removeTodo={this.removeTodo.bind(this)} 
          startTimer={this.startTimer.bind(this)} />
    }
  }

  render() {
    return (
      <div className="wrapper">
        {this.renderSelectedDayOrTimer()}
        <div className="calendar">
          <PrevMonth date={this.state.date} onClick={this.previousMonth} />
          <NextMonth date={this.state.date} onClick={this.nextMonth} />
          <CurrentMonth date={this.state.date} />
          {this.renderHeader()}
          {this.renderBlanks()}
          {this.renderDays()}
        </div>
      </div>
    )
  }

}

export default Calendar;
