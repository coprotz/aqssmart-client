import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'

const Employment = ({go, next, previous, formData, setForm}) => {
    const { emploStatus } = formData
    const move = (12/15)*100
  return (
    <div className='login'>
      <div className="logo_2" onClick={() => go('1')}>
      <Link to='/careers'><img src={Logo} alt="" /></Link>
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
                <h2 className='title_head'>Employment</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  <label>Your Employment Status?</label> 
                    {/* {error? 
                      <div className='error'>{error}</div>
                    : null}          */}
                </div> 
                <div className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                       <div  className="career_group"
                            value={emploStatus}
                            onChange={setForm} 
                            required>                           
                           <div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Employed" required />Employed</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Business" required />Business</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Student" required />Student</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Unemployed" required />Unemployed</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Fleerancer" required />Fleerancer</div>
                            </div>
                                                                    
                        </div>
                        {emploStatus === 'Employed'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {emploStatus === 'Business'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {emploStatus === 'Student'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {emploStatus === 'Unemployed'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {emploStatus === 'Fleerancer'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
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

export default Employment