import React, {useState} from "react"
import "./index.css"
const Letter = () => {
  let click = true
  const click1 = () => {
    document.getElementById("word1").style.display = "none"
    document.getElementById("word2").style.display = "none"
    document.getElementById("word3").style.display = "block"
    setTimeout(() => {
      document.getElementById("word3").style.color = "rgba(253, 245, 211, 0.45)"
      document.getElementById("word4").style.display = "block"
    }, 5000);
  }
  const click2 = () => {
    document.getElementById("word3").style.display = "none"
    document.getElementById("word4").style.display = "none"
    document.getElementById("word5").style.display = "block"
    setTimeout(() => {
      document.getElementById("word5").style.color = "rgba(253, 245, 211, 0.45)"
    }, 5000);
  }
  const click3 = () => {
    document.getElementById("word5").style.display = "none"
    document.getElementById("word6").style.display = "block"
    setTimeout(() => {
      document.getElementById("word6").style.color = "rgba(253, 245, 211, 0.45)"
      document.getElementById("word7").style.display = "block"
      setTimeout(() => {
        document.getElementById("word7").style.color = "rgba(253, 245, 211, 0.45)"
        document.getElementById("word8").style.display = "block"
      }, 5000);
    }, 5000);
  }
  window.addEventListener("click", function() {
    if(click) {
      document.getElementById("word1").style.display = "block"
      setTimeout(() => {
        document.getElementById("word1").style.color = "rgba(253, 245, 211, 0.45)"
        document.getElementById("word2").style.display = "block"
      }, 5000);
      click = false
    }
  })
  return (
    <div className="letter-container">
      <div className="letter-words">
        <div style={{paddingTop: "10vh"}} id="word1">
          <p>咔、嚓、砰——”</p>
          <p>随着扭蛋被一个个拧开，</p> 
          <p>2019也像是被按下快门，一帧帧定格于昨日。</p>
        </div>
        <div id="word2">
          <p>截至2019年，</p>
          <p>云家园用户量达到82142，</p>
          <p>南大家园APP累积用户量超过了73000，</p>
          <p>家园主站访问总量达到了75000，</p>
          <p>微信公众平台粉丝量突破到了30000。</p>
          <p>数据的开头字符从零到一，从一到二，再从二跳到三，</p>
          <p>是背后的你，让它的涨落变得振奋人心。</p>
          <p className="letter-click" onClick={click1}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word3">
          <p>2019年5月20日，我们的默契测试游戏“无二研究所”正式上线。</p>
          <p>南昌初夏的热意还没正式蒸腾，</p>
          <p>恋人的爱意却顺应季候破土发芽。</p>
        </div>
        <div id="word4" style={{marginTop: "10vh"}}>
          <p>同年8月，四六级助手登录APP首页，</p>
          <p>为近7000人找回了准考证号，</p>
          <p>带你经历得知四六级成绩的极速3秒。</p>
          <p className="letter-click" onClick={click2}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word5">
          一年的时间，总有改变。南大有了自己的哈啰单车，商业街的店铺统一换了红彤彤的招牌，小家园也终于迎来了自己的18岁。但总有些什么，从未改变。二类通识开始了新一轮选修，妖风又吹过前湖的秋，我们仍在为成为“全国一流的互联网学生团队”这个目标不懈努力着，致力于持续为数万南大人提供更多深入人心的优质服务。
          <p className="letter-click" onClick={click3}>下一页</p>
        </div>
        <div style={{paddingTop: "10vh"}} id="word6">
          让小家园偷偷告诉你叭，2020年，APP将迎来又一次改版，崭新的南大家园正在赶来的路上快马加鞭，更多像四六级助手这样的小产品，也即将冲出头脑风暴来到你的面前。
        </div>
        <div id="word7">
          谢谢你又一年的陪伴，是你默默的鼓励和及时的建议，夯实了我们前行的后背。新的一年，也请多多关照吧！
        </div>
        <div id="word8">
          <p style={{float: "right", paddingTop: "6vh"}}>爱你们的南昌大学家园工作室</p>
          <p style={{float: "right", paddingTop: "2vh"}}>2020年1月15日</p>
        </div>
      </div>
    </div>
  )
}
export default Letter