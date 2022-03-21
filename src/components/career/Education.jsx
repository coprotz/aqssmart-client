import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Education = ({go, next, previous, formData, setForm}) => {
    const { education } = formData
    const move = (13/15)*100
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
                <h2 className='title_head'>Education</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  <label>Your Education Level?</label> 
                    {/* {error? 
                      <div className='error'>{error}</div>
                    : null}          */}
                </div> 
                <div className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                       <div className="career_group"
                            value={education}
                            onChange={setForm} 
                            required>                           
                           <div className='radio_grid'>
                              <div className="btn-radio"><input type="radio" name="education" value="Olevel" required />Olevel </div>
                              <div className="btn-radio"><input type="radio" name="education" value="Alevel" required />Alevel</div>
                              <div className="btn-radio"><input type="radio" name="education" value="Certificate" required />Certificate</div>
                              <div className="btn-radio"><input type="radio" name="education" value="Diploma" required />Diploma</div>
                              <div className="btn-radio"><input type="radio" name="education" value="Bachelor" required />Bachelor</div>
                            </div>

                                                                    
                        </div>
                          {education === 'Olevel'?
                          <div className="next_btn">
                              <BsArrowRight onClick={() => {next()}}/>
                          </div> : null}
                          {education === 'Alevel'?
                          <div className="next_btn">
                              <BsArrowRight onClick={() => {next()}}/>
                          </div> : null}
                          {education === 'Certificate'?
                          <div className="next_btn">
                              <BsArrowRight onClick={() => {next()}}/>
                          </div> : null}
                          {education === 'Diploma'?
                          <div className="next_btn">
                              <BsArrowRight onClick={() => {next()}}/>
                          </div> : null}
                          {education === 'Bachelor'?
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

export default Education
