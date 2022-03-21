import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'
import { Link } from "react-router-dom";

const Firstname = ({go, next, previous, formData, setForm, steps}) => {
    const { firstname } = formData
    const move = (5/15)*100

  return (
    <div className='login'>
      <div className="logo_2" onClick={() => go('1')}>
        <img src={Logo} alt="" />
      </div>
      <div className="login_wrapper">         
        <div className="login_1"> 
            <div className="progressbar">
                <span className="progres_status" style={{width:`${move}%`}}></span>
          </div>
          <div className="login_1_top">           
            <div className="login_logo">
                <span className="login_btn_action" onClick={() => {previous()}}>
                      <button className='login_close_btn'><AiOutlineArrowLeft /></button>
                </span>
                <h2 className='title_head'>Firstname</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  <label>Your Firstname?</label> 
                    {/* {error? 
                      <div className='error'>{error}</div>
                    : null}          */}
                </div> 
                <div className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                        <div className="login_group">
                            <input 
                              name='firstname' 
                              value={firstname} 
                              id="" 
                              onChange={setForm}
                              className='login_input'
                             
                          
                            />
                            <div className="login__btn"> 
                              {firstname === ''?
                                <button
                                  disabled={true}
                                  className="disabled"
                                  ><FaArrowRight/>
                                  </button>
                                :
                                <button 
                                  onClick={() => {next()}}
                                  className="logerBtn"
                                  ><FaArrowRight/>
                                </button>
                              }
                            </div> 
                        </div> 
                      </motion.div>
                  </div>               
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

export default Firstname
