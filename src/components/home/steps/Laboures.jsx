import React from 'react'
import Labbg from '../../../images/lab.jpg'

const Laboures = () => {
  return (
    <div className='labors'>
       <div className="text__box">
            <h1>Labour Charges</h1>
            <span className='separator'></span>
            <p>Available skills of labour can be available at your location. 
                </p>
                <a href='/login'><button button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Labbg} className="slide__img"/>
    </div>
  )
}

export default Laboures
