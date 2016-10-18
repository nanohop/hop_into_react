import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Menu from './Menu';
import Notes from './pages/notes/Notes';
import Home from './pages/home/Home';
import Calendar from './pages/calendar/Calendar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Menu} >
      <IndexRoute component={Home} />
      <Route path="/notes" component={Notes}/>
      <Route path="/calendar" component={Calendar}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
