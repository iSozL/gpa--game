import React from 'react'
import Papers from './papers'
import { Show } from "./show";
import Loading from "../components/loading"

function Paper() {
  if(window.location.href.indexOf('#reloaded')==-1){ //判断是否有刷新标记
    window.location.href=window.location.href+"#reloaded";//没有添加标记
    window.location.reload();//刷新
  }
  window.onload = function() {
    console.log("finish loading")
    document.getElementById("flip").style.visibility = "visible"
    document.getElementById("paper-loading").style.display = "none"
  }
  return (
    <div>
      <div id="paper-loading"><Loading /></div>
      <div id="flip" style={{visibility: "hidden"}}>
        <Show>
          <Papers />
        </Show>
      </div>
    </div>
  );
}
export default Paper;