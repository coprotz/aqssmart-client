import React from 'react'
import Estbg from '../../../images/est.jpg'
import { Link } from "react-router-dom";

const Estimates = () => {
  return (
    <div className='estimates'>
         <div className="text__box">
            <h1>Materials Estimation</h1>
            <span className='separator'></span>
            <p>Get various material prices from various suppliers. Choose the price that best for you.
                </p>
                <Link to='/login'><button className='sli__btn'>Get Started</button></Link>
        </div>
        <img src={Estbg} className="slide__img"/>
    </div>
  )
}

export default Estimates
