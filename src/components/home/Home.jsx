import React from 'react'
import Equipments from './steps/Equipments'
import Estimates from './steps/Estimates'
import Laboures from './steps/Laboures'
import Materials from './steps/Materials'
import Rates from './steps/Rates'
import { useStep} from 'react-hooks-helper'
import { FaChevronLeft, FaChevronRight, FaStream} from 'react-icons/fa'
import { useState } from 'react'
import './home.css'
import Dots from './steps/Dots'
import Menu from '../Menu'
import TopBar from '../topbar/TopBar'



const steps = [
    {id: "1", Component: Materials},
    {id: "2", Component: Rates},
    {id: "3", Component: Laboures},
    {id: "4", Component: Estimates},
    {id: "5", Component: Equipments}
]

const Home = () => {
    const { step, navigation, index, isPaused, autoAdvanceDuration } = useStep( { steps, initialStep: 0, autoAdvanceDuration:5000} )
    const { Component } = step
    const { go, next, previous, pause, play} = navigation
    const props = {go}
    const [activeBtn, setActiveBtn] = useState(1)
   

  return (
    <div className='home'>        
        <TopBar/>
        <div className="leftSide" onClick={() => {previous();setActiveBtn(activeBtn-1)}}><FaChevronLeft/></div>
        <div className="rightSide" onClick={() => {next();setActiveBtn(activeBtn+1)}}><FaChevronRight/></div>
        <div className="bottomBtn">
            <Dots index={index} count={steps.length} go={go}/>        
        </div>
      <Component {...props} />
    </div>
  )
}

export default Home
