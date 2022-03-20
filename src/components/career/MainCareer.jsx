import React from 'react'
import TopBar from '../topbar/TopBar'
import './career.css'
import { AiFillPlayCircle } from "react-icons/ai";
import CareerInvite from './CareerInvite';
import { useForm, useStep } from 'react-hooks-helper'
import Education from './Education';
import Views from './Views';
import Thanks from './Thanks';
import Code from './Code';
import Position from './Position';
import Username from './Username'
import Firstname from './Firstname';
import Lastname from './Lastname'
import Age from './Age'
import Sex from './Sex';
import Region from './Region';
import District from './District'
import Street from './Street';
import Mobile from './Mobile'
import Email from './Email'
import Employment from './Employment'
import English from './English'
import Computer from './Computer'

const steps = [
  { id: "1", Component: CareerInvite },
  { id: "2", Component: Position },
  { id: "3", Component: Mobile },
  { id: "4", Component: Email },
  { id: "5", Component: Username },
  { id: "6", Component: Firstname },
  { id: "7", Component: Lastname },
  { id: "8", Component: Age },
  { id: "9", Component: Sex },  
  { id: "10", Component: Region },
  { id: "11", Component: District }, 
  { id: "12", Component: Street },
  { id: "13", Component: Employment },
  { id: "14", Component: Education },
  { id: "15", Component: English },
  { id: "16", Component: Computer },
  { id: "17", Component: Views },
  { id: "18", Component: Code },
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
  const props = { go, next, previous, formData, setForm, steps }


  return (
    <div className='career'>      
      <Component {...props} />
      {/* <CareerInvite/> */}
      {/* <div className="footer_career">
        <div>&copy; 2022 AQS Smart. All rights reserved</div>
      </div> */}


    </div>
  )
}

export default MainCareer
