import React from 'react'
import Matbg from '../../../images/mat.jpg'

const Materials = () => {
  return (
    <div className='materials'>
        <div className="text__box">
            <h1>Materials Prices</h1>
            <span className='separator'></span>
            <p>ncase you are facing this issue with a react-native dependency 
                then once you have installed the recommended version be sure to 
                update your pod file.</p>
                <a href='/services'><button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Matbg} className="slide__img"/>
    </div>
  )
}

export default Materials
