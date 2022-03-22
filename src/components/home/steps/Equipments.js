import React from 'react'
import Eqipbg from '../../../images/equip.jpg'
import { Link } from "react-router-dom";

const Equipments = () => {
  return (
    <div className='equips'>
         <div className="text__box">
            <h1>Equipment Hiring Costs</h1>
            <span className='separator'></span>
            <p>Finding an equipment dealers that can provide equipment for your project? This is the best 
              platform that you can achieve.
                </p>
            <Link to='/login'><button className='sli__btn'>Get Started</button></Link>
        </div>
        <img src={Eqipbg} className="slide__img"/>
    </div>
  )
}

export default Equipments
