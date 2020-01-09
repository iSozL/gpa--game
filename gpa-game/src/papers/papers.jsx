import React, {useState} from 'react';
import './paper.css'
import papers from '../utils/data'
const Papers = () => {
  setTimeout(() => {
    document.getElementById('paper-container').style.filter = 'blur(5px)'
    document.getElementById('paper-container').style.mozFilter = 'blur(5px)'
    document.getElementById('paper-container').style.msFilter = 'blur(5px)'
    document.getElementById('paper-container').style.webkitFilter = 'blur(5px)'
    document.getElementById('paper-container').style.oFilter = 'blur(5px)'
    document.getElementById('paper-bg').style.visibility = 'visible'
  }, 4000);
  const [index, setIndex] = useState(0)
  return(
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() =>setIndex(index + 1)}>
      <div className="paper-container" id="paper-container"></div>
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
  )
}
export default Papers;