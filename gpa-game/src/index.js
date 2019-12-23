import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './index.css';
import Index from './index/index.tsx';
import Papers from './papers/papers.tsx'
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
