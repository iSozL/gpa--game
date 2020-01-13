import React from 'react';
import "./loading.css"
const Loading = () => {
  return (
    <div className="loading">
      <img src={require("../assets/imgs/loading.gif")}></img>
    </div>
  )
}
export default Loading;