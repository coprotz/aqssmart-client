import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../../redux/slices/users/verifyUserSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";


const Otp = ({ go, next, previous, formData, setForm }) => {
  const navigate = useNavigate();
  const { phone, otp } = formData

  const dispatch = useDispatch()


  const otp1 = useSelector((state) => state?.authUser?.user?.data.otp)
  const userId = useSelector((state) => state?.authUser?.user?.data?.userId)
  const username = useSelector((state) => state?.authUser?.user?.data?.username)
  // const isComplete = useSelector((state) => state.authUser?.user?.data?.isComplete)
  const type = useSelector((state) => state?.verifyUser?.user?.type) 
  // const { error } = useSelector((state) => state?.authUser)
  const {signinStatus, error, status} = useSelector((state) => state.verifyUser)

  // console.log(signinStatus)
  
  // console.log('type', type)

  // const { status, error, signupStatus } = useSelector((state) => state.authUser)
    const message = useSelector((state) => state?.authUser?.user?.message)

  //   console.log('message', message)

  console.log(error)

  // console.log('userId', userId)
  // console.log('username', username)
  // console.log('otp', otp1)

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      otp: otp,
      userId: userId,
    }

    try {
      dispatch(verifyUser(user))     
      
        
      // }

    } catch (error) {
      dispatch(verifyUser())
    }
    if(!error){
      navigate(`/applicant/${username}`)
    }

    // navigate('/applicant/1')
  }


  return (
    <div className='login_phone'>
      <div className="login_sub_title">
        <div className="code_login">
          <span className="login_btn_action" onClick={() => { previous() }}>
            <button className='back_to_btn'><AiOutlineArrowLeft /></button>
          </span>
          <label>{phone}</label> 
        </div>
        { message? <div className='success'>{message}</div> : null} 
              
     
        <div className="code_login">          
          <label>Please enter OTP</label> 
        </div>
          
                 
        </div> 
     
      <form onSubmit={onSubmit} className="login_form_wrapper">
        <motion.div initial={{ x: '-100vw' }}
          animate={{ x: 0 }}  >

          <div className="login_group">
            {/* <label htmlFor="">Please enter the OTP sent to {phone}</label> */}
            <input
              type="text"
              name='otp'
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={setForm}
              required
              placeholder="OTP?"
              className='login_input'
            
            />
            <div className="login__btn">          
            {otp === ''?            
              <button
                disabled={true}
                className="disabled"
              ><FaArrowRight/>
              </button>
              :
              <button
                type="submit"
                className="logerBtn"
                onClick={onSubmit}
              ><FaArrowRight/>
            </button>
            
            }          
          
          </div>
          </div>
        </motion.div>        
      </form>
      </div>
  
  )
}

export default Otp
