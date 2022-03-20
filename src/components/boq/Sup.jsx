import React from 'react'
import { FaAngleLeft} from "react-icons/fa";

const Sup = ({activePage,setActivePage}) => {
  return (
    <div className='inner__wrapper'>
      <div className="buildTop">
          <div className="build__left">
            <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
            <h2>{activePage.name}</h2>
          </div>
          <div className="build__right"></div>
        </div>
    </div>
  )
}

export default Sup
