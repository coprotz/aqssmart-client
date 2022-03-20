import React,{useState} from 'react'
import './login.css'
import LoginImg from '../../images/login.png'
import { useForm, useStep } from 'react-hooks-helper'
import { useDispatch, useSelector } from 'react-redux'
import Code from '../career/Code'
import Phone from '../career/Phone'
import Logo from '../../images/amzuu1.png'
// import { signinUser } from '../../redux/slices/users/usersSlice'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from '../Footer'
import { useEffect } from 'react'


const steps = [
    { id: '1', Component: Phone },
    { id: '2', Component: Code }
]

const defaultData = {
    phone: '',
    otp: ''
}

const Login = () => {
    const { step, navigation } = useStep({ steps, initialStep: 0 })
    const { Component } = step
    const { go, next, previous } = navigation
    const [formData, setForm] = useForm(defaultData)
    const props = { go, next, previous, formData, setForm }

    const dispatch = useDispatch()


    const message = useSelector((state) => state?.authUser?.user?.message)
    const userId = useSelector((state) => state?.authUser?.user?.data?.userId)
    const username = useSelector((state) => state?.authUser?.user?.data?.username)
    const isComplete = useSelector((state) => state.authUser?.user?.data?.isComplete)
    const { error } = useSelector((state) => state?.authUser)

   

    return (
        <div className='login'>
            <Link to='/careers' className="login_btn_action">
                <button className='login_close_btn'><AiOutlineArrowLeft /></button>Career Page
        </Link>

            <div className="login_wrapper">
                <div className="login_3">
                   
                    <div className="login_logo">
                        {/* <img className="login_img" src={Logo} alt="" /> */}
                        {/* <h1 className='login_title'>WELCOME BACK</h1> */}
                    </div>
           
                    <div className='component'>
                        <Component {...props} />
                    </div>
                    {/* <Link to='/change' className='change_mobi'>Change My Mobile Number</Link>                    */}
                    <div className="login_footer">
                        <Footer/>
                    </div>
                </div>
                <div className="login_2">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
