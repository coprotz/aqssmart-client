import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signinUser } from '../../redux/slices/users/authUserSlice'
import { FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";


const Phone = ({ go, next, previous, formData, setForm }) => {
  const { phone } = formData
  const [error, setError] = useState()

  const dispatch = useDispatch();

  const { status, signinStatus } = useSelector((state) => state?.authUser)

  const type = useSelector((state) => state?.authUser?.user?.type) 
  const message = useSelector((state) => state?.authUser?.user?.message)

  const Continue = async (e) => {
    e.preventDefault();

    if (phone.length !== 13 || phone === '') {
      return setError("Phone Number cannot be less than 13 digits..!")
    }


    const verifyPhone = {
      phone: phone
    }

    try {
      dispatch(signinUser(verifyPhone))
      if(status !== 'rejected'){
        next();
      }
      
    } catch (err) {
      dispatch(signinUser())
    }

    
  }

  return (
    <div className='login_phone'>
           
        <div className="login_sub_title">
          <label>Please enter a mobile number</label> 
          {error? 
              <div className='error'>{error}</div>
          : status === 'rejected' ? <div className='error'>Fail to log in, please try again</div> : null}         
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
