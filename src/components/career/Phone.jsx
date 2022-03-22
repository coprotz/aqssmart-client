import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signinUser } from '../../redux/slices/users/authUserSlice'
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import { userSkills } from '../applicants'


const Phone = ({ go, next, previous, formData, setForm }) => {
  const { phone } = formData
  const [phoneError, setError] = useState()

  const dispatch = useDispatch();

  // const { type, message } = useSelector((state) => state?.authUser)


  // console.log(signinStatus)

  const type = useSelector((state) => state?.authUser?.user?.type) 
  const message = useSelector((state) => state?.authUser?.user?.message)
  // const { type, message } = (state) => state?.users?.signin?.data

  // console.log('type',type)
  // console.log('message', message)

  const Continue = async (e) => {
    e.preventDefault();

    if (phone.length !== 13 || phone === '') {
      return setError("Phone Number cannot be less than 13 digits..!")
    }

    // console.log(message)

    // console.log(status)


    const verifyPhone = {
      phone: phone
    }

    try {
      dispatch(signinUser(verifyPhone))
      if(type ==='success' || !phoneError){
       next();
      }
    
     
    } catch (err) {
      dispatch(signinUser())
    }
    

    
  }

  // console.log('status', status)

  return (
    <div className='login_phone'>
           
        <div className="login_sub_title">
          <label>Please enter a mobile number</label> 
          
          {/* { status === 'rejected' ? <div className='error'>Fail to log in, please try again</div>  */}
          {phoneError? <div className='error'>{phoneError}</div>
          : message? <div className='error'>{message}</div>

          : null}         
        </div>     
      <form onSubmit={Continue} className="login_form_wrapper">
        <motion.div initial={{ x: '-100vw' }}
          animate={{ x: 0 }} >

          <div className="login_group">
            {/* <label htmlFor="">Please enter Your Mobile Number</label> */}
            <input
              type="tel"
              name='phone'
              value={phone}
              onChange={setForm}
              required
              placeholder="Mobile Number start with +255?"
              className='login_input'
            />
            <div className="login__btn">          
            {phone === ''?            
              <button
                disabled={true}
                className="disabled"
              ><FaArrowRight/>
              </button>
              :
              <button
                type="submit"
                className="logerBtn"
              ><FaArrowRight/>
            </button>
            
            }          
          
          </div>
        </div>
        <div className="forget">
          <span>Forget your mobile Number?</span>
          <Link to='/change'>Go</Link>
        </div>
        
           
       

        </motion.div>
        
      </form>
    </div>

  )
}

export default Phone
