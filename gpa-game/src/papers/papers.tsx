import React from 'react';
import './paper.css'
const Papers = () => {
  const papers = [
    {
      name: "缘起",
      bgcolor: "rgba(40, 97, 167, .5)",
      logo: require('../assets/imgs/nculogo.jpg'),
      context: <div>2019年9月14日,<br />南昌大学正式与你相遇。<br />直到现在,<br />校徽上的蓝色香樟<br />已经见证你一个学期的大学生活。</div>
    }
  ]
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="paper-container"></div>
      <div className="paper">
        {
          papers.map((item, index) => (
            <div key={index}>
              <div className="paper-name">
                <span style={{background: item.bgcolor}}>{item.name}</span>
              </div>
              <div className="logo"><div></div></div>
              <div className="context">{item.context}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Papers;