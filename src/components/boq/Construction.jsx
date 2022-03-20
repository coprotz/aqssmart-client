import React from 'react'
import { FaAngleLeft} from "react-icons/fa";
import Eqipbg from '../../images/back1.jpg'

const Construction = ({activePage,setActivePage}) => {
  return (
    <div className='inner__wrapper'>
         <div className="buildTop">
          <div className="build__left">
            <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
            <h2>{activePage.name}</h2>
          </div>
          <div className="build__right"></div>
        </div>
        <div className="page__below">          
          <div className="below__page">
            Construction Rate per Square Metre
          </div>
          <div className="below__page">
            Professional Fees
          </div>
        </div>
    </div>
  )
}

export default Construction
