import React from 'react'
import TopBar from './topbar/TopBar'
import Menu from './Menu'

const Pricing = ({user}) => {
  return (
    <div className="pricingWrapper">      
        <TopBar user={user}/>
        <h1 className='title'>Pricing</h1>
    </div>
  )
}

export default Pricing
