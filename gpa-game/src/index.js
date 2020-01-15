  
import React, {Suspense, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import Loading from "./components/loading"
import Index from "./index/index"
import Papers from "./papers/index"
import Letter from "./letter/index"
import Miracle from "incu-webview"
const CharactersContext = React.lazy(() => import("./characters/index"))
const Characters = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CharactersContext />
    </Suspense>
  )
}
const Routers = () => {
  useEffect(()=>{
    let token = JSON.stringify(Miracle.getData()) !== '{}' ? Miracle.getData().user.token : "eyJhbGciOiJIUzI1NiIsImlhdCI6MTU3OTA1NzMzMiwiZXhwIjoxNTc5MDYwMzMyfQ.eyJpZCI6Ijk5ODY3Mzg4MTciLCJleHAiOjE1NzkwNjAzMzIsInhoIjoiNjEwOTExODA4MiJ9.izjYyrTIGAyYrDKJw8OANikfsyW8VLNEZVrIyne6rb4"
    localStorage.setItem("token", token)
  })
  return (
    <Router>
      <Switch>
        <Route path="/papers" component={Papers} exact></Route>
        <Route path="/" component={Index} exact></Route>
        <Route path="/characters" component={Characters}></Route>
        <Route path="/letter" component={Letter} />
      </Switch>
    </Router>
  )
} 
ReactDOM.render(<Routers />, document.getElementById('root'));