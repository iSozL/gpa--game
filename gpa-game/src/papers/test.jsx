import React, {useState, useContext, useEffect,Suspense} from 'react'
import './paper.css'
import papers from '../utils/data'
import {showContext, UPDATE_SHOW, UPDATE_INDEX} from './show'
import Loading from "../components/loading"
const Show = (props) => {
  const {show, dispatch} = useContext(showContext)
  let index = show.index
  const data = JSON.parse(localStorage.getItem("papers"))
  const my = JSON.parse(localStorage.getItem("my"))
  const other = JSON.parse(localStorage.getItem("other"))
  const papers = [
    {
      id: 1,
      name: "缘起",
      bg: "paper1",
      bgcolor: "rgba(40, 97, 167, .4)",
      logo: require('../assets/imgs/nculogo.jpg'),
      puzzle: require('../assets/imgs/yq.png'),
      ncolor: "#2861a1",
      color: "rgba(40, 97, 167, .7)",
      end: true,
      context: <div>{data.page_1.join_year !== null?data.page_1.join_year:"没找到哦"}年{data.page_1.join_month!==null?data.page_1.join_month:"没找到哦"}月<br />南昌大学正式与你相遇<br />直到现在<br />校徽上的蓝色香樟<br />已经见证你{data.page_1.semester_spent!==null?data.page_1.semester_spent:"没找到哦"}个学期的大学生活</div>
    },
    {
      id: 2,
      name: "足迹",
      bg: "paper2",
      bgcolor: "rgba(111, 161, 106, .4)",
      logo: require('../assets/imgs/nculogo.jpg'),
      puzzle: require('../assets/imgs/zj.png'),
      ncolor: "#6fa16a",
      color: "rgba(111, 161, 106, .7)",
      end: false,
      context: <div>这个学期<br />你见过南大{data.page_3.pass_days!==null ? data.page_3.pass_days:"没找到哦"}个夜晚里形状各异的月亮<br />坐在教室里<br />听了{data.page_3.total_course_hours!==null ? data.page_3.total_course_hours:"没找到哦"}次上课铃</div>
    },
    {
      id: 2,
      name: "足迹",
      bg: "paper2",
      bgcolor: "rgba(111, 161, 106, .4)",
      logo: require('../assets/imgs/nculogo.jpg'),
      puzzle: require('../assets/imgs/zj.png'),
      ncolor: "#6fa16a",
      color: "rgba(111, 161, 106, .7)",
      end: true,
      context: <div>关于课堂的模样<br />你的体会或许<br />比全校{data.page_3.course_hours_defeat!==null?parseInt(data.page_3.course_hours_defeat):"没找到哦"}%<br />的同学更深</div>
    },
    {
      id: 3,
      name: "成就",
      bg: "paper3",
      bgcolor: "rgba(216, 195, 76, .4)",
      logo: "",
      puzzle: require('../assets/imgs/cj.png'),
      ncolor: "#d8c34c",
      color: "rgba(216, 195, 76, .7)",
      end: false,
      context: Boolean(data.page_4.if_grade_19) === true ? <div>在已经公布的期末成绩里<br />你考的最好的课程有：{data.page_4.page_4_data.top_three_courses!==null?data.page_4.page_4_data.top_three_courses.map((item, index)=>(<span key={index}><br />{item.class_name}</span>)):"没找到哦"}</div> : <div>星光不负赶路人<br />高达{data.page_4.page_4_data.credits_taken!==null ? data.page_4.page_4_data.credits_taken:"没找到哦"}的学分<br />没有辜负你<br />在专业排名前{data.page_4.page_4_data.gpa_rank!=null ? data.page_4.page_4_data.gpa_rank:"没找到哦"}%<br />{data.page_4.page_4_data.gpa!==null ? data.page_4.page_4_data.gpa: "没找到哦"}平均绩点<br />也在肯定着你的努力</div>
    },
    {
      id: 3,
      name: "成就",
      bg: "paper3",
      bgcolor: "rgba(216, 195, 76, .4)",
      logo: "",
      puzzle: require('../assets/imgs/cj.png'),
      ncolor: "#d8c34c",
      color: "rgba(216, 195, 76, .7)",
      end: true,
      context: Boolean(data.page_4.if_grade_19) === true ? <div>最高的那门{data.page_4.page_4_data.top_three_courses[0].class_name!==null ? data.page_4.page_4_data.top_three_courses[0].class_name : "没找到哦"}<br />超过了全专业{data.page_4.page_4_data.course_defeat_rank!==null ? data.page_4.page_4_data.course_defeat_rank : "没找到哦"}%的同学<br />不用担心啦<br />这次期末一定能过</div> : <div>不知不觉中<br />你已经修满了{data.page_4.page_4_data.credits_taken!==null?data.page_4.page_4_data.credits_taken:"没找到哦"}个学分<br />{data.page_4.page_4_data.gpa!==null?data.page_4.page_4_data.gpa:"没找到哦"}的平均绩点<br />为你的大学生活<br />留下了珍贵的足迹<br />加油！<br />未来的你<br />一定还有着更好的模样</div>
    },
    {
      id: 4,
      name: "初见",
      bg: "paper4",
      bgcolor: "rgba(236, 179, 181, .4)",
      logo: "",
      puzzle: require('../assets/imgs/chuj.png'),
      ncolor: "#ecb3b5",
      color: "rgba(236, 179, 181, .7)",
      end: false,
      context: <div>{data.page_2.join_year !== null ? data.page_2.join_year :"没找到哦"}年9月{data.page_2.first_class_day!==null ? data.page_2.first_class_day : "没找到哦"}日<br />你{data.page_2.first_class_address!==null && data.page_2.first_class_address !== "NULL" ? "在" + data.page_2.first_class_address : ""}上了大学的第一堂课</div>
    },
    {
      id: 4,
      name: "初见",
      bg: "paper4",
      bgcolor: "rgba(236, 179, 181, .4)",
      logo: "",
      puzzle: require('../assets/imgs/chuj.png'),
      ncolor: "#ecb3b5",
      color: "rgba(236, 179, 181, .7)",
      end: true,
      context: <div>在那儿<br />{data.page_2.first_class_teacher!==null ? data.page_2.first_class_teacher : "没找到哦"}老师与你初见<br />也许在毕业季<br />你还会想重温那天那节<br />{data.page_2.first_class_name !==null? data.page_2.first_class_name : "没找到哦"}</div>
    },
    {
      id: 5,
      name: "提醒",
      bg: "paper5",
      bgcolor: "rgba(117, 84, 160, .4)",
      logo: "",
      puzzle: require('../assets/imgs/tx.png'),
      ncolor: "#7554a0",
      color: "rgba(117, 84, 160, .7)",
      end: true,
      context: <div>在潜心专业课的同时<br />不要忘记选修二类通识<br />把还没修的类别记进备忘录吧<br />下次选课 so easy</div>
    },
    {
      id: 6,
      name: "坚持",
      bg: "paper6",
      bgcolor: "rgba(100, 161, 174, .4)",
      logo: "",
      puzzle: require('../assets/imgs/jc.png'),
      ncolor: "#64a1ae",
      color: "rgba(100, 161, 174, .7)",
      end: false,
    context: <div>朝气蓬勃的生活<br />总是离不开良好的习惯<br />在南大app里<br />{my.length > 0 ? '你参与的习惯有' + my[0].title : "你没有参与习惯"} {my.length > 1 ? my[1].title + "等": ""}<br />{my.length > 0? "其中坚持"+my[0].title+"长达"+my[0].check_count+"天" : ""}</div>
    },
    {
      id: 6,
      name: "坚持",
      bg: "paper6",
      bgcolor: "rgba(100, 161, 174, .4)",
      logo: "",
      puzzle: require('../assets/imgs/jc.png'),
      ncolor: "#64a1ae",
      color: "rgba(100, 161, 174, .7)",
      end: false,
      context: <div>你选择坚持的<br />最终也将塑就你<br />新的一年也请继续加油呀~</div>
    },
    {
      id: 6,
      name: "坚持",
      bg: "paper6",
      bgcolor: "rgba(100, 161, 174, .4)",
      logo: "",
      puzzle: require('../assets/imgs/jc.png'),
      ncolor: "#64a1ae",
      color: "rgba(100, 161, 174, .7)",
      end: false,
      context: <div>在南大家园app里<br />有着这样一群人<br />每天互相鼓劲<br />在习惯圈子里坚持打卡<br />其中不乏如读书,早睡<br />这样有趣的习惯</div>
    },
    {
      id: 6,
      name: "坚持",
      bg: "paper6",
      bgcolor: "rgba(100, 161, 174, .4)",
      logo: "",
      puzzle: require('../assets/imgs/jc.png'),
      ncolor: "#64a1ae",
      color: "rgba(100, 161, 174, .7)",
      end: true,
    context: <div>而这些习惯圈子<br />拥有最多的参与者<br />成为了习惯圈子里的王者<br />{other[0].title}: {other[0].count}人 <br />{other[1].title}: {other[1].count}人 <br />{other[2].title}: {other[2].count}人</div>
    },
    // 有一个判断
    {
      id: 7,
      name: "消费",
      bg: "paper7",
      bgcolor: "rgba(203, 139, 65, .4)",
      logo: "",
      puzzle: require('../assets/imgs/xf.png'),
      ncolor: "#cb8b41",
      color: "rgba(203, 139, 65, .7)",
      end: true,
    context: <div>本学期<br />你们寝室的<br />月平均用电量为{data.page_7.elec_expense ? data.page_7.elec_expense : "没找到哦"}度<br />{data.page_7.elec_expense > 200 ? <div>爱用电的寝室,生活一定不会太单调</div>:data.page_7.elec_expense < 35 ?<div>用电理性的你们,一定很擅长生活</div>:<div>恭喜获得<br />"南大用电标准寝室"称号</div>}</div>
    },
    {
      id: 8,
      name: "遗失",
      bg: "paper8",
      bgcolor: "rgba(169,169,169, .4)",
      logo: "",
      puzzle: require('../assets/imgs/ys.png'),
      ncolor: "#a9a9a9",
      color: "rgba(169,169,169, .7)",
      end: false,
      context: <div>最大的遗憾<br />大概就是<br />捡到你东西的人没法联系你<br />不过还好<br />这学期已有1077人<br />通过失物招领功能<br />寻回了自己的失物</div>
    },
    {
      id: 8,
      name: "遗失",
      bg: "paper8",
      bgcolor: "rgba(169,169,169, .4)",
      logo: "",
      puzzle: require('../assets/imgs/ys.png'),
      ncolor: "#a9a9a9",
      color: "rgba(169,169,169, .7)",
      end: true,
      context: <div>我们因此少了1077次遗憾<br />也愿更多的爱心<br />在这里传递下去</div>
    }
  ]
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
  // useEffect(()=>{
  //   if(show.play) {
      // if (document.getElementById('paper-container').complete) {
      //   document.getElementById("test-loading").style.visibility = "hidden"
      //   document.getElementById("paper-show").style.visibility = "visible"
      //   setTimeout(() => {
      //     // document.getElementById('paper-container').src = "http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"+.
      //     document.getElementById('paper-container').style.filter = 'blur(5px)'
      //     document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
      //     document.getElementById('paper-container').style.msFilter = 'blur(5px)'
      //     document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
      //     document.getElementById('paper-container').style.oFilter = 'blur(5px)'
      //     document.getElementById('paper-bg').style.visibility = 'visible'
      //     document.getElementById('puzzle').style.visibility = 'visible'
      // }, 4000);
      // }
      // var timer = setInterval(function(){
      //   if (document.getElementById('paper-container').complete){
      //     // console.log(show.play)
      //     clearInterval(timer);
      //     document.getElementById("test-loading").style.visibility = "hidden"
      //     document.getElementById("paper-show").style.visibility = "visible"
      //     document.getElementById("paper-container").src = document.getElementById("paper-container").src
      //     setTimeout(() => {
      //       // document.getElementById('paper-container').src = "http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"
      //       document.getElementById('paper-container').style.filter = 'blur(5px)'
      //       document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
      //       document.getElementById('paper-container').style.msFilter = 'blur(5px)'
      //       document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
      //       document.getElementById('paper-container').style.oFilter = 'blur(5px)'
      //       document.getElementById('paper-bg').style.visibility = 'visible'
      //       document.getElementById('puzzle').style.visibility = 'visible'
      //   }, 4000);
      //   }
      // }, 10);
    // } else {
    //   var timer1 = setInterval(function(){
    //     if (document.getElementById('paper-container')){
    //       clearInterval(timer1);
    //       document.getElementById("test-loading").style.visibility = "hidden"
    //       document.getElementById("paper-show").style.visibility = "visible"
    //       document.getElementById("paper-container").src="http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"
    //     }
    //   }, 10);
  //   }
  // }, [])
  // var timer = setInterval(function(){
  //   if (document.getElementById('paper-container').complete){
  //     // console.log(show.play)
  //     clearInterval(timer);
  //     document.getElementById("test-loading").style.visibility = "hidden"
  //     document.getElementById("paper-show").style.visibility = "visible"
  //     document.getElementById("paper-container").src = document.getElementById("paper-container").src
  //     setTimeout(() => {
  //       // document.getElementById('paper-container').src = "http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"+.
  //       document.getElementById('paper-container').style.filter = 'blur(5px)'
  //       document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
  //       document.getElementById('paper-container').style.msFilter = 'blur(5px)'
  //       document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
  //       document.getElementById('paper-container').style.oFilter = 'blur(5px)'
  //       document.getElementById('paper-bg').style.visibility = 'visible'
  //       document.getElementById('puzzle').style.visibility = 'visible'
  //   }, 4000);
  //   }
  // }, 10);
  // console.log(show.play)
  if(show.play) {
    var timer = setInterval(function(){
      if (document.getElementById('paper-container').complete){
        // console.log(show.play)
        clearInterval(timer);
        document.getElementById("test-loading").style.visibility = "hidden"
        document.getElementById("paper-show").style.visibility = "visible"
        document.getElementById("paper-container").src = document.getElementById("paper-container").src
        setTimeout(() => {
          // document.getElementById('paper-container').src = "http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"+.
          document.getElementById('paper-container').style.filter = 'blur(5px)'
          document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
          document.getElementById('paper-container').style.msFilter = 'blur(5px)'
          document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
          document.getElementById('paper-container').style.oFilter = 'blur(5px)'
          document.getElementById('paper-bg').style.visibility = 'visible'
          document.getElementById('puzzle').style.visibility = 'visible'
      }, 4000);
      }
    }, 10);
  } else {
    if (document.getElementById('paper-container')){
      var u = navigator.userAgent;
      if (u.indexOf('iPhone') > -1) {
        var timer1 = setInterval(function(){
          clearInterval(timer1);
          document.getElementById("test-loading").style.visibility = "hidden"
          document.getElementById("paper-show").style.visibility = "visible"
          // document.getElementById("paper-container").src="http://q43qyx1kc.bkt.clouddn.com/paperbg.jpg"
        }, 10);
        console.log("苹果")
      } else {
        var timer1 = setInterval(function(){
        clearInterval(timer1);
        document.getElementById("test-loading").style.visibility = "hidden"
        document.getElementById("paper-show").style.visibility = "visible"
        document.getElementById("paper-container").src="http://antelope.fun/paperbg.jpg"
      }, 10);
    }
  } else {
    var u = navigator.userAgent;
      if (u.indexOf('iPhone') > -1) {
        var timer1 = setInterval(function(){
          clearInterval(timer1);
          document.getElementById("test-loading").style.visibility = "hidden"
          document.getElementById("paper-show").style.visibility = "visible"
        }, 10);
        console.log("苹果")
      } else {
        var timer1 = setInterval(function(){
        clearInterval(timer1);
        document.getElementById("test-loading").style.visibility = "hidden"
        document.getElementById("paper-show").style.visibility = "visible"
        document.getElementById("paper-container").src="http://antelope.fun/paperbg.jpg"
      }, 10);
    }
  }
}
  return (
    <div>
      <div id="test-loading"><Loading /></div>
      <div id="paper-show" style={{visibility: "hidden"}}>
        <img id="puzzle" src={papers[index].puzzle} className="puzzle"></img>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={papers[index].end ? () =>{dispatch({ type: UPDATE_INDEX, show: { index: show.index+1, show: false, play: show.play }})} : () => {dispatch({ type: UPDATE_INDEX, show: { index: show.index+1, show: show.show , play: false}});start1()}}>
        <img src="http://antelope.fun/nd.gif" className="paper-container" id="paper-container"></img>
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
    </div>
  )
}
export default Show