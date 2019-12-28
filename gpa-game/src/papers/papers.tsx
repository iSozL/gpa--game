import React from 'react';
import './paper.css'
const Papers = () => {
  const papers = [
    {
      name: "缘起",
      bgcolor: "rgba(40, 97, 167, .5)",
      logo: require('../assets/imgs/nculogo.jpg')
    }
  ]
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="paper-container"></div>
      <div className="paper">
        {
          papers.map((item, index) => (
            <div key={index} className="paper-name">
              <span style={{background: item.bgcolor}}>{item.name}</span>
              <div><div></div></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Papers;