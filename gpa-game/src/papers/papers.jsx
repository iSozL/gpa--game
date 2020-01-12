import React, {useState} from 'react';
import './paper.css'
import papers from '../utils/data'
const Papers = () => {
  const [index, setIndex] = useState(Number(localStorage.getItem("papers")))
  const [show, isShow] = useState(false)

  if(window.location.href.indexOf('#reloaded')==-1){ //判断是否有刷新标记
    window.location.href=window.location.href+"#reloaded";//没有添加标记
    window.location.reload();//刷新
  }
  window.onload = function() {
    console.log("finish loading")
    document.getElementById("paper-before").style.visibility = "visible"
    document.getElementById("paper-loading").style.display = "none"
  }
  const start = () => {
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
  if(localStorage.getItem('papers') > 16) {
    localStorage.removeItem('papers')
  }
  if(!localStorage.getItem("papers")) {
    localStorage.setItem("papers", 0)
  }

  const Show = () => {
    return (
      <div id="paper-show">
        <img id="puzzle" src={papers[index].puzzle} className="puzzle"></img>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={papers[index].end ? () =>{;localStorage.setItem('papers', index + 1);window.location.hash = "/papers"} : () =>setIndex(index + 1)}>
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
  const Before = () => {
    return (
      <div className="paper-before" id="paper-before" onClick={() => {start();isShow(true)}}>
        <img className="sway" src={require("../assets/imgs/yaozhui.png")}></img>
      </div>
    )
  }
  return(
    <div>
      <div style={{width: "20px", background: "red"}} id="paper-loading">loading</div>
      {show ? <Show /> : <Before />}
    </div>
  )
}
export default Papers;