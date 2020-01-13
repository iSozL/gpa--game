import React, {useState, Suspense, useContext} from 'react';
import Loading from "../components/loading"
import './paper.css'
import {showContext, UPDATE_SHOW, UPDATE_INDEX} from './show'
import papers from '../utils/data'
const Papers = (props) => {
  const {show, dispatch} = useContext(showContext)
  if(show.index > 16) {
    window.location.hash = "/characters"
  }
  const paper = papers
  const start = () => {
    // 显示gif图后4s模糊背景，显示纸条
    setTimeout(() => {
      document.getElementById('paper-container').style.filter = 'blur(5px)'
      document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
      document.getElementById('paper-container').style.msFilter = 'blur(5px)'
      document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
      document.getElementById('paper-container').style.oFilter = 'blur(5px)'
      document.getElementById('paper-bg').style.visibility = 'visible'
      document.getElementById('puzzle').style.visibility = 'visible'
    }, 4000);
  }
  const flip = () => {
    document.getElementById("unflip").style.visibility = "visible"
    document.getElementById('flip').style.transform = 'rotateX(180deg)'
    setTimeout(function() {document.getElementById("paper-before").style.visibility = "hidden"}, 1000)
  }
  const unflip = () => {
    document.getElementById("paper-before").style.visibility = "visible"
    document.getElementById('flip').style.transform = 'rotateX(0deg)'
    setTimeout(function() {document.getElementById("unflip").style.visibility = "hidden"}, 1000)
  }
  const Test = React.lazy(() => import('./test'))
  const Before = () => {
    return (
      <div className="flip" id="flip">
        <div className="paper-before" id="paper-before">
          <div className="click" onClick={() => {dispatch({ type: UPDATE_SHOW, show: {show: true, index: show.index} }); start()}}></div>
          {show.index > 0 ? <img id="before" className="sway" src={require("../assets/imgs/yaozhui.png")} onClick={flip}></img> : ""}
        </div>
        <div className="puzzle-after" id="unflip">
          <div className="puzzle-flip">
            {show.index > 0 ? <img className="puzzle-bg" src={require(`../assets/imgs/${paper[show.index - 1].id}.png`)} /> : ""}
            <img className="back" src={require("../assets/imgs/back.png")} onClick={unflip} />
          </div>
        </div>
      </div>
    )
  }
  return(
    <div style={{width: "100vw", height: "100vh"}}>
      {Boolean(show.show) ? <Suspense fallback={<Loading />}><Test /></Suspense> : <Before />}
    </div>
  )
}
export default Papers;