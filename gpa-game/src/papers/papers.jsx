import React, {useState} from 'react';
import './paper.css'
import papers from '../utils/data'
const Papers = () => {
  const [index, setIndex] = useState(0)
  return(
    // <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} onClick={() =>setIndex(index + 1)}>
    //   <div className="paper-container"></div>
    //   <div className={papers[index].bg}>
    //   <div key={index}>
    //     <div className="paper-name" style={{color: papers[index].ncolor}}>
    //       <span style={{background: papers[index].bgcolor}}>{papers[index].name}</span>
    //     </div>
    //     <div>{ 
    //       papers[index].logo ? 
    //       <img className="logo" src={papers[index].logo} /> : 
    //       <div style={{marginTop: "6vh"}}></div>
    //       }
    //     </div>
    //     <div className="context" style={{color: papers[index].color}}>{papers[index].context}</div>
    //   </div>
    //   </div>
    // </div>
    <div className="gif-container">
    </div>
  )
}
export default Papers;