import React, {useState, useContext} from 'react'
import './paper.css'
import papers from '../utils/data'
import {showContext, UPDATE_SHOW, UPDATE_INDEX} from './show'
const Show = (props) => {
  const {show, dispatch} = useContext(showContext)
  let index = show.index
  const start1 = () => {
    setTimeout(() => {
      document.getElementById('paper-container').style.filter = 'blur(5px)'
      document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
      document.getElementById('paper-container').style.msFilter = 'blur(5px)'
      document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
      document.getElementById('paper-container').style.oFilter = 'blur(5px)'
      document.getElementById('paper-bg').style.visibility = 'visible'
      document.getElementById('puzzle').style.visibility = 'visible'
    }, 0);
  }
  return (
    <div id="paper-show">
      <img id="puzzle" src={papers[index].puzzle} className="puzzle"></img>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={papers[index].end ? () =>{dispatch({ type: UPDATE_INDEX, show: { index: show.index+1, show: false }})} : () => {dispatch({ type: UPDATE_INDEX, show: { index: show.index+1, show: show.show }});start1()}}>
      <div className="paper-container" id="paper-container"></div>
      <div className={papers[index].bg} id="paper-bg">
        <div key={index}>
          <div className="paper-name" style={{color: papers[index].ncolor}}>
            <span style={{background: papers[index].bgcolor}}>{papers[index].name}</span>
          </div>
          <div>{ 
            papers[index].logo ? 
            <img className="logo" src={papers[index].logo} /> : 
            <div style={{marginTop: "6vh"}}></div>
            }
          </div>
          <div className="context" style={{color: papers[index].color}}>{papers[index].context}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Show