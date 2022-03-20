import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'
import { BsArrowRight } from "react-icons/bs";

const English = ({go, next, previous, formData, setForm}) => {
    const { english } = formData
    const move = (14/15)*100
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
                <h2 className='title_head'>English</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  <label>Your English Proffeciency?</label> 
                    {/* {error? 
                      <div className='error'>{error}</div>
                    : null}          */}
                </div> 
                <div className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                       <div className="career_group"
                            value={english}
                            onChange={setForm} 
                            required>                           
                           <div>
                                <div className="btn-radio"><input type="radio" name="english" value="Bignner" required />Bignner </div>
                                <div className="btn-radio"><input type="radio" name="english" value="Intermediate" required />Intermediate</div>
                                <div className="btn-radio"><input type="radio" name="english" value="Fluent" required />Fluent</div>
                            </div>
                                                                    
                        </div>
                        {english === 'Bignner'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {english === 'Intermediate'?
                        <div className="next_btn">
                            <BsArrowRight onClick={() => {next()}}/>
                        </div> : null}
                        {english === 'Fluent'?
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

export default English