import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.css';
import Index from './index/index.jsx';
import Papers from './papers/papers.jsx'
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/papers" component={Papers}></Route>
        <Route path="/" component={Index} exact></Route>
      </Switch>
    </Router>
  )
} 
ReactDOM.render(<Routers />, document.getElementById('root'));
