import React from "react"
import './index.css'
import Loading from "../components/loading"
const Characters = () => {
  if(window.location.href.indexOf('#reloaded')==-1){ //判断是否有刷新标记
    window.location.href=window.location.href+"#reloaded";//没有添加标记
    window.location.reload();//刷新
  }
  window.onload = function() {
    console.log("finish loading")
    document.getElementById("char").style.visibility = "visible"
    document.getElementById("char-loading").style.display = "none"
  }
  return (
    <div>
      <div id="char-loading"><Loading /></div>
      <div className="characters-container" id="char">
        <img src={require("../assets/imgs/rxjl.png")} className="characters"></img>
      </div>
    </div>
  )
}
export default Characters