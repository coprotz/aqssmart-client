import React from 'react'
import Labbg from '../../../images/lab.jpg'
import { Link } from "react-router-dom";

const Laboures = () => {
  return (
    <div className='labors'>
       <div className="text__box">
            <h1>Labour Charges</h1>
            <span className='separator'></span>
            <p>Available skills of labour can be available at your location. 
                </p>
                <Link to='/login'><button className='sli__btn'>Get Started</button></Link>
        </div>
        <img src={Labbg} className="slide__img"/>
    </div>
  )
}

export default Laboures
