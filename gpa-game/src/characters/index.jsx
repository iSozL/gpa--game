import React from "react"
import './index.css'
import Loading from "../components/loading"
import {Link} from "react-router-dom"
import Request from "../utils/apiRequest"
if(window.location.href.indexOf('#reload')==-1){ //判断是否有刷新标记
  window.location.href=window.location.href+"#reload";//没有添加标记
  window.location.reload();//刷新
}
const opp = Math.round(Math.round(Math.random() * 30 + 10) / 10)
class Characters extends React.Component {
  state = {
    charData: null,
    show: null,
    show1: null,
    show2: null,
    show3: null
  }
  componentWillMount() {
    Request.fetchData("/api/h5/data", "get", null, {xh: 6109118082}).then(
      res => {
        this.setState({
          charData: res.data.data
        })
        if(this.state.charData !== null) {
          const data = this.state.charData
          // 绩点
          if(data.page_4.page_4_data.gpa_rank) {
            if(data.page_4.page_4_data.gpa_rank <= 5) {
              this.setState({
                show1: require("../assets/imgs/yhwz.png")
              })
            } else if (data.page_4.page_4_data.gpa_rank <= 30 && data.page_4.page_4_data.gpa_rank > 5) {
              this.setState({
                show1: require("../assets/imgs/xxds.png")
              })
            } else {
              this.setState({
                show1: require("../assets/imgs/fxlz.png")
              })
            }
          }
          // 课时排名
          if(data.page_3.course_hours_defeat) {
            if(data.page_3.course_hours_defeat > 50) {
              this.setState({
                show: require("../assets/imgs/tfswz.png")
              })
            } else {
              this.setState({
                show: require("../assets/imgs/ylqn.png")
              })
            }
          }
          // 生活费
          if(data.page_7.elec_expense) {
            if(data.page_7.elec_expense > 202) {
              this.setState({
                show3: require("../assets/imgs/shfss.png")
              })
            } else {
              this.setState({
                show3: require("../assets/imgs/xts.png")
              })
            }
          }
          if(data.page_1.join_year) {
            if(data.page_1.join_year == 2019) {
              this.setState({
                show2: require("../assets/imgs/tjhdxs.png")
              })
            } else if (data.page_1.join_year == 2018) {
              this.setState({
                show2: require("../assets/imgs/ygjzqn.png")
              })
            } else {
              this.setState({
                show2: require("../assets/imgs/ndssyq.png")
              })
            }
          }
        }
      }
    )
  }
  render() {
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
        {this.state.show != null ? <img src={this.state.show} className="words1" /> : ""}
        {this.state.show1 != null ? <img src={this.state.show1} className="words2" /> : ""}
        {this.state.show2 != null ? <img src={this.state.show2} className="words3" /> : ""}
        {this.state.show3 != null ? <img src={this.state.show3} className="words4" /> : ""}
      </div>
    )
  }
}
export default Characters