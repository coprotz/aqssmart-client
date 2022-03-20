import React from 'react'
import TopBar from '../topbar/TopBar'
import './career.css'
import { AiFillPlayCircle } from "react-icons/ai";
import CareerInvite from './CareerInvite';
import { useForm, useStep } from 'react-hooks-helper'
import PersonDetail from './PersonDetail';
import Education from './Education';
import Status from './Status';
import Views from './Views';
import Thanks from './Thanks';
import Location from './Location'
import Code from './Code';
import Position from './Position';

const steps = [
  { id: "1", Component: CareerInvite },
  { id: "2", Component: Position },
  { id: "3", Component: PersonDetail },
  { id: "4", Component: Location },
  { id: "5", Component: Education },
  { id: "6", Component: Views },
  { id: "7", Component: Code },
  // {id: "6", Component: Thanks}
]

const defaultData = {
  position: '',
  username:'',
  phone: '',
  email: '',
  firstname: '',
  lastname: '',
  age: '',
  sex: '',
  region: '',
  district: '',
  street: '',
  education: '',
  emploStatus: '',
  computer: '',
  english: '',
  otp: '',

}

const MainCareer = () => {
  const { step, navigation, index } = useStep({ steps, initialStep: 0 })
  const { Component } = step
  const { go, next, previous } = navigation
  const [formData, setForm, watch] = useForm(defaultData);
  const props = { go, next, previous, formData, setForm, }


  return (
    <div className='career'>
      <TopBar />
      <Component {...props} />
      {/* <CareerInvite/> */}
      <div className="footer_career">
        <div>&copy; 2022 AQS Smart. All rights reserved</div>
      </div>


    </div>
  )
}

export default MainCareer
