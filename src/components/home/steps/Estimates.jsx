import React from 'react'
import Estbg from '../../../images/est.jpg'

const Estimates = () => {
  return (
    <div className='estimates'>
         <div className="text__box">
            <h1>Materials Estimation</h1>
            <span className='separator'></span>
            <p>ncase you are facing this issue with a react-native dependency 
                then once you have installed the recommended version be sure to 
                update your pod file.</p>
                <a href='/services'><button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Estbg} className="slide__img"/>
    </div>
  )
}

export default Estimates
