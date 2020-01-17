import React, {Suspense} from "react"
import './index.css'
import Loading from "../components/loading"
import {Link} from "react-router-dom"
import axios from "axios"
import Miracle from "incu-webview"
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
    if (localStorage.getItem("papers") !== null) {
      let data = JSON.parse(localStorage.getItem("papers"))
      if(data.page_4.page_4_data.gpa_rank !== null) {
        if(data.page_4.page_4_data.gpa_rank <= 5) {
          this.setState({
            show1: require("../assets/imgs/xffn.png")
          })
        } else if (data.page_4.page_4_data.gpa_rank <= 30 && data.page_4.page_4_data.gpa_rank > 5) {
          this.setState({
            show1: require("../assets/imgs/jjlr.png")
          })
        } else {
          this.setState({
            show1: require("../assets/imgs/xysr.png")
          })
        }
      }
      // 课时排名
      if(data.page_3.course_hours_defeat !== null) {
        if(data.page_3.course_hours_defeat > 50) {
          this.setState({
            show: require("../assets/imgs/bsxxj.png")
          })
        } else {
          this.setState({
            show: require("../assets/imgs/lnqn.png")
          })
        }
      }
      // 生活费
      if(data.page_7.elec_expense !== null) {
        if(data.page_7.elec_expense > 202) {
          this.setState({
            show3: require("../assets/imgs/gdqbydx.png")
          })
        } else {
          this.setState({
            show3: require("../assets/imgs/dlbhxh.png")
          })
        }
      }
      if(data.page_1.join_year !== null) {
        if(data.page_1.join_year == 2019) {
          this.setState({
            show2: require("../assets/imgs/tjhdxs.png")
          })
        } else if (data.page_1.join_year == 2018) {
          this.setState({
            show2: require("../assets/imgs/ygkbqn.png")
          })
        } else {
          this.setState({
            show2: require("../assets/imgs/ndssyq.png")
          })
        }
      }
    }
    axios.get("https://os.ncuos.com/api/h5/data", { headers: {Authorization: `passport ${localStorage.getItem("token")}`} }).then(
      res => {
        if(res.data.status == 0) {
          this.setState({
            charData: res.data.data
          })
          if(this.state.charData !== null){
            let data = this.state.charData
          if(data.page_4.page_4_data.gpa_rank !== null) {
            if(data.page_4.page_4_data.gpa_rank <= 5) {
              this.setState({
                show1: require("../assets/imgs/xffn.png")
              })
            } else if (data.page_4.page_4_data.gpa_rank <= 30 && data.page_4.page_4_data.gpa_rank > 5) {
              this.setState({
                show1: require("../assets/imgs/jjlr.png")
              })
            } else {
              this.setState({
                show1: require("../assets/imgs/xysr.png")
              })
            }
          }
          // 课时排名
          if(data.page_3.course_hours_defeat !== null) {
            if(data.page_3.course_hours_defeat > 50) {
              this.setState({
                show: require("../assets/imgs/bsxxj.png")
              })
            } else {
              this.setState({
                show: require("../assets/imgs/lnqn.png")
              })
            }
          }
          // 生活费
          if(data.page_7.elec_expense !== null) {
            if(data.page_7.elec_expense > 202) {
              this.setState({
                show3: require("../assets/imgs/gdqbydx.png")
              })
            } else {
              this.setState({
                show3: require("../assets/imgs/dlbhxh.png")
              })
            }
          }
          if(data.page_1.join_year !== null) {
            if(data.page_1.join_year == 2019) {
              this.setState({
                show2: require("../assets/imgs/tjhdxs.png")
              })
            } else if (data.page_1.join_year == 2018) {
              this.setState({
                show2: require("../assets/imgs/ygkbqn.png")
              })
            } else {
              this.setState({
                show2: require("../assets/imgs/ndssyq.png")
              })
            }}
          }
        } else {
          alert(res.data.message)
        }
      }
    )
  }
  render() {
    const imgs = [
      {
        img: this.state.show
      },
      {
        img: this.state.show1
      },
      {
        img: this.state.show2
      },
      {
        img: this.state.show3
      },
    ]
    console.log(imgs)
    // 防止不显示
    // setTimeout(() => {
    //   console.log("finish loading")
    //   document.getElementById("char").style.visibility = "visible"
    //   document.getElementById("char-loading").style.display = "none"
    // }, 6000);
    return (
      <Suspense fallback={<Loading />}>
        <div>
          {/* <div id="char-loading"><Loading /></div> */}
          <div className="characters-container">
            {this.state.show !== null?<img src={imgs[opp].img} className="characters-container" id="char"></img>:""}
            <Link to="/letter" className="get">点击获取小家园的信</Link>
          </div>
        </div>
      </Suspense>
    )
  }
}
export default Characters