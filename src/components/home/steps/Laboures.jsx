import React from 'react'
import Labbg from '../../../images/lab.jpg'

const Laboures = () => {
  return (
    <div className='labors'>
       <div className="text__box">
            <h1>Labour Charges</h1>
            <span className='separator'></span>
            <p>ncase you are facing this issue with a react-native dependency 
                then once you have installed the recommended version be sure to 
                update your pod file.</p>
                <a href='/services'><button button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Labbg} className="slide__img"/>
    </div>
  )
}

export default Laboures
