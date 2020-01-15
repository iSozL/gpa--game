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
    let token = JSON.stringify(Miracle.getData()) !== '{}' ? Miracle.getData().user.token : ""
    let xh = JSON.stringify(Miracle.getData()) !== '{}' ? Miracle.getData().base_info.xh : ""
    localStorage.setItem("token", token)
    localStorage.setItem("xh", xh)
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
