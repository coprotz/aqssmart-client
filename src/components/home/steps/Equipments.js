import React from 'react'
import Eqipbg from '../../../images/equip.jpg'

const Equipments = () => {
  return (
    <div className='equips'>
         <div className="text__box">
            <h1>Equipment Hiring Costs</h1>
            <span className='separator'></span>
            <p>ncase you are facing this issue with a react-native dependency 
                then once you have installed the recommended version be sure to 
                update your pod file.</p>
            <a href='/services'><button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Eqipbg} className="slide__img"/>
    </div>
  )
}

export default Equipments
