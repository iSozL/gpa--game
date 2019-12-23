import React, {useState} from 'react';
import './index.css'
const Index = () => {
  const [flag, setFlag] = useState(true)
  const [show, changeShow] = useState(false)
  const onBottom = () => {
    const element: any = document.body
    element.scrollIntoView({ block: "end", behavior: "smooth" })
    if(flag) {
      showWords(0)
    }
  }

  const showWords = (count: number) => {
    setFlag(false)
    if (count < 3) {
      let num = count
      const s1: any = document.getElementById("sentence1")
      const s2: any = document.getElementById("sentence2")
      const s3: any = document.getElementById("sentence3")
      const s4: any = document.getElementById("sentence4")
      const eleList = [s1, s2, s3, s4]
      eleList[num].style.visibility = "visible"
      setTimeout(function() {
        if(num - 1 >= 0) {
          eleList[num - 1].style.visibility = "hidden"
        }
        eleList[num].style.color = "rgba(253, 245, 211, 0.45)"
        if(num + 1 < 4) {
          eleList[num + 1].style.visibility = "visible"
        }
        // 显示获取扭蛋按钮
        if(num === 2) {
          changeShow(true)
        }
        showWords(num + 1)
      }, 5000)
    }
  }

  return (
    <div id="container" className="index-container" onClick={onBottom}>
      <div className="index-title">2019</div>
      <div className="index-flag">生成的你的年度#TAG#</div>
      <div className="index-words">
        <div id="sentence1">
          你即将看到的是<span style={{ fontSize: "6.5vw" }}>家园扭蛋机</span>
          <p style={{ fontSize: "6.3vw" }}>NCUHOME’S GACHAPON</p>
        </div>
        <div id="sentence2">
          正如它的英文名 (咔擦砰)
          <p><span style={{ fontSize: "8vw", marginLeft: 20 }}>"咔擦"</span>一声</p>
        </div>
        <div id="sentence3">
          <p>2019年</p>
          <p>那些或许被你忽视的小碎片</p>
          <p>就会<span style={{ fontSize: "8vw" }}>"砰"</span>的涌现</p>
          <p>月光下的足迹</p>
          <p>教室里的身影</p>
          <p>一些无意坚持下来的小习惯...</p>
        </div>
        <div id="sentence4">
          <p>把它们收集起来</p>
          <p>一起来拼出你的校园人设</p>
          <p style={{ fontSize: "6.5vw" }}>惊喜在这里等你...</p>
        </div>
      </div>
      {show ? (<a className="index-get">点击获取你的家园扭蛋</a>) : <div></div>}
    </div>
  )
}
export default Index;