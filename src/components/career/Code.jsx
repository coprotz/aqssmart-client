import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'
import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../../redux/slices/users/verifyUserSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";



const Code = ({go, next, previous, formData, setForm}) => {
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
  
  console.log('type', type)

  // const { status, error, signupStatus } = useSelector((state) => state.authUser)
    const message = useSelector((state) => state?.authUser?.user?.message)
    // const type = useSelector((state) => state?.authUser?.user?.message)

    console.log('message', message)

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
        if(type === 'success'){
          navigate(`/applicant/${username}`)
        }
        
      // }

    } catch (error) {
      dispatch(verifyUser())
    }

    // navigate('/applicant/1')
  }

  return (
    <div className='login'>
      <div className="logo_2" onClick={() => go('1')}>
        <img src={Logo} alt="" />
      </div>
      <div className="login_wrapper"> 
        <div className="login_1">            
          <div className="login_1_top"> 
                {error? 
                    <div className='error'>{error}</div>
                : null} 
                {message? 
                    <div className='success'>{message}</div>
                : null}           
            <div className="login_logo">
                <span className="login_btn_action" onClick={() => {previous()}}>
                      <button className='login_close_btn'><AiOutlineArrowLeft /></button>
                </span>
                <h2 className='title_head'>OTP</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  <label>Please enter OTP</label> 
                    {/* {error? 
                      <div className='error'>{error}</div>
                    : null}          */}
                </div> 
                <form onSubmit={onSubmit}  className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                        <div className="login_group">
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
                                    onClick={onSubmit}
                                  className="logerBtn"
                                  ><FaArrowRight/>
                                </button>
                              }
                            </div> 
                        </div> 
                      </motion.div>
                  </form>               
              </div> 
            </div> 
          </div>                               
          <div className="login_footer">
            <Footer/>
          </div>
        </div>
        <div className="login_2"></div>
      </div>
    </div>
    
  )
  
}

export default Code