import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import Loading from "./components/loading"
const IndexContext = React.lazy(() => import("./index/index"))
const Index = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <IndexContext />
    </Suspense>
  )
}
const PapersContext = React.lazy(() => import("./papers/index"))
const Papers = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <PapersContext />
    </Suspense>
  )
}
const CharactersContext = React.lazy(() => import("./characters/index"))
const Characters = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <CharactersContext />
    </Suspense>
  )
}
const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/papers" component={Papers} exact></Route>
        <Route path="/" component={Index} exact></Route>
        <Route path="/characters" component={Characters}></Route>
        <Route path="/loading" component={Loading}></Route>
      </Switch>
    </Router>
  )
} 
ReactDOM.render(<Routers />, document.getElementById('root'));
