import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signinUser } from '../../redux/slices/users/authUserSlice'


const Phone = ({ go, next, previous, formData, setForm }) => {
  const { phone } = formData
  const [error, setError] = useState()

  const dispatch = useDispatch();

  // const { status, signinStatus } = useSelector((state) => state?.users)

  const type = useSelector((state) => state?.authUser?.user?.type) 

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

    } catch (err) {
      dispatch(signinUser())
    }

    next();
  }

  return (
    <div className='person_detail'>
      <div className="person_top">
        <h2>Login</h2>
        <div className="log_number">
          <label htmlFor="">Please enter a mobile number</label>
          
        </div>
     
      <form onSubmit={Continue} className="person_wrapper">
        <motion.div initial={{ x: '-100vw' }}
          animate={{ x: 0 }} >

          <div className="formGroup">
            {/* <label htmlFor="">Please enter Your Mobile Number</label> */}
            <input
              type="tel"
              name='phone'
              value={phone}
              onChange={setForm}
              required
              placeholder="Mobile Number start with +255?"
              className='form_group_input'
            />
            {error? 
              <div className='error'>{error}</div>
            : null}
          </div>

        </motion.div>
        <div className="form__btn__action">          
            {phone === '' || error?            
              <button
                disabled={true}
                className="disabled"
              >Continue
              </button>
              :
              <button
                type="submit"
                className="logerBtn"
              >Continue
              </button>
            
            }
            {error? 
            <button onClick={() => window.location.reload(false)}>Reset</button>
            :null}
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Phone
