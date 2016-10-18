import React, { Component } from 'react';

class Timer extends Component {

  state = {
    startTime: new Date(),
    currentTime: new Date()
  }

  componentWillMount() {
    this._timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    this._timer = null;
  }

  tick = () => {
    this.setState({currentTime: new Date()});
  }

  render() {
    var millis = this.state.currentTime - this.state.startTime;
    var seconds = Math.round((millis) / 1000);
    var minutes = Math.floor(seconds / 60);
    var remaining = seconds - (minutes * 60);
    return (
      <div className="selectedDay timer">
        <div>Task: {this.props.todo}</div>
        <div>
          {minutes}:{(remaining < 10 ? "0" : "")}{remaining}
          <button onClick={this.props.stopTimer}>Stop</button>
        </div>
      </div>
    )
  }

}

export default Timer;
