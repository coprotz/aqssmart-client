import React from 'react'
import Estbg from '../../../images/back1.jpg'

const Rates = () => {
  return (
    <div className='rates'>
         <div className="text__box">
            <h1>Build Up Rate</h1>
            <span className='separator'></span>
              <p>Build your own Unit Rate from the available resources in the application. You will get 
                materials prices, equipment hiring rate and labour charges in various skills.
              </p>
              <a href='/login'><button className='sli__btn'>Get Started</button></a>
        </div>
        <img src={Estbg} className="slide__img"/>
    </div>
  )
}

export default Rates
