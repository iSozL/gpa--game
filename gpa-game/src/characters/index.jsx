import React from "react"
import './index.css'
import Loading from "../components/loading"
import {Link} from "react-router-dom"
class Characters extends React.Component {
  state = {
    charData: null
  }
  render() {
    Request.fetchData("/api/h5/data", "get", null, {xh: 6109118082}).then(
      res => {
        this.setState({
          charData: res.data.data
        })
      }
    )
    if(window.location.href.indexOf('#reload')==-1){ //判断是否有刷新标记
      window.location.href=window.location.href+"#reload";//没有添加标记
      window.location.reload();//刷新
    }
    const opp = Math.round(Math.round(Math.random() * 30 + 10) / 10)
    const imgs = [
      {
        img: require("../assets/imgs/rxjl.png")
      },
      {
        img: require("../assets/imgs/zcm.png")
      },
      {
        img: require("../assets/imgs/hhy.png")
      },
      {
        img: require("../assets/imgs/mty.png")
      },
    ]
    window.onload = function() {
      console.log("finish loading")
      document.getElementById("char").style.visibility = "visible"
      document.getElementById("char-loading").style.display = "none"
    }
    return (
      <div>
        <div id="char-loading"><Loading /></div>
        <div className="characters-container" id="char">
          <img src={imgs[opp - 1].img} className="characters"></img>
          <Link to="/letter" className="get">点击获取小家园的信</Link>
        </div>
      </div>
    )
  }
}
export default Characters