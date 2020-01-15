import React from 'react'
import Papers from './papers'
import { Show } from "./show";
import Loading from "../components/loading"

function Paper() {
  setTimeout(() => {
    document.getElementById("flip").style.visibility = "visible"
    document.getElementById("paper-loading").style.display = "none"
  }, 5000);
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