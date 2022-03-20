import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../../redux/slices/users/verifyUserSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


const Code = ({ go, next, previous, formData, setForm }) => {
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

  console.log(signinStatus)
  // console.log('message', message)
  console.log('type', type)

  // const { status, error, signupStatus } = useSelector((state) => state.authUser)
    // const message = useSelector((state) => state?.authUser?.user?.message)

  console.log('userId', userId)
  console.log('username', username)
  console.log('otp', otp1)

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      otp: otp,
      userId: userId,
    }

    try {
      dispatch(verifyUser(user))
      // if (isComplete === true) {
      //   navigate(`/admin/${username}`)
      // } else {
        if(!error){
          navigate(`/applicant/${username}`)
        }
        
      // }

    } catch (error) {
      dispatch(verifyUser())
    }

    // navigate('/applicant/1')
  }


  return (
    <div className='person_detail'>
      <div className="message_error">
          {error && <div className="error">{error}</div>  }
      
       
      </div>
      <div className="person_top">
        <h2>Log in</h2>       
        <div className="log_number">
          <label htmlFor="">Mobile number</label>
          <div className="mobile_change">
            <span>{phone}</span>
            <Link to='/change'>Change number?</Link>
          </div>
        </div>
     
      <form onSubmit={onSubmit} className="person_wrapper">
        <motion.div initial={{ x: '-100vw' }}
          animate={{ x: 0 }}  >

          <div className="formGroup">
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
              className='form_group_input'
            // className='code_input'
            />
          </div>
          {/* {message && <p className="success__message">{message}</p> || error && <p className="error__message">{error}</p>} */}

        </motion.div>
        <div className="form__btn__action">
          <button onClick={() => { previous() }}>Previous</button>
          <button type='submit' onClick={onSubmit}>SEND</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Code
