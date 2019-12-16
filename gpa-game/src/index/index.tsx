import React from 'react';
import './index.css'
const Index = () => {
  return(
    <div className="index-container">
      <div className="index-title">2019</div>
      <div className="index-flag">生成的你的年度#TAG#</div>
      <div className="index-words">
        <div>
          你即将看到的是<span style={{fontSize: "22px"}}>家园扭蛋机</span>
          <div style={{fontSize: "24px"}}>NCUHOME’S GACHAPON</div>
        </div>
        <div>
          正如它的英文名 (咔擦砰)
          <div><span style={{fontSize: "24px", marginLeft: 20}}>"咔擦"</span>一声</div>
        </div>
        <div>
          <p>2019年</p>
          <p>那些或许被你忽视的小碎片</p>
          <p>就会<span style={{fontSize: "24px"}}>"砰"</span>的涌现</p>
          <p>月光下的足迹</p>
          <p>教室里的身影</p>
          <p style={{marginLeft: 20}}>一些无意坚持下来的小习惯···</p>
        </div>
        <div>
          <p>把它们收集起来</p>
          <p>一起来拼出你的校园人设</p>
          <p style={{fontSize: "20px"}}>惊喜在这里等你···</p>
        </div>
      </div>
    </div>
  )
}
export default Index;