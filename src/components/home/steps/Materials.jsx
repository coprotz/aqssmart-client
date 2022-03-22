import React from 'react'
import Matbg from '../../../images/mat.jpg'
import { Link } from "react-router-dom";

const Materials = () => {
  return (
    <div className='materials'>
        <div className="text__box">
            <h1>Materials Prices</h1>
            <span className='separator'></span>
            <p>Materials prices can be obtain from various suppliers within the Country and outside. Select the best
              suppliers at your destination.
                </p>
                <Link to='/login'><button className='sli__btn'>Get Started</button></Link>
        </div>
        <img src={Matbg} className="slide__img"/>
    </div>
  )
}

export default Materials
