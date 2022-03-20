import React from 'react'
import TopBar from '../topbar/TopBar'
import './change.css'
import {motion} from 'framer-motion'


const Change = () => {
  return (
    <div>
      <TopBar/>
      <div className="change_wrapper">
          <h2 className='form_title'>Change Mobile Number</h2>
          <motion.div initial={{ x: '-100vw'}}
          animate={{x:0}} className='form_wrapper'>
              <form action="" className='app_form'>
              <div className="form_group">                   
                    <input 
                        type="text"
                        placeholder='Enter an existing mobile number start +255'
                        className='app_input' />
                </div>
                <div className="form_group">                   
                    <input 
                        type="text"
                        placeholder='Enter a username'
                        className='app_input' />
                </div>
                <div className="form_group">                   
                    <input 
                        type="text" 
                        placeholder='Enter an email address'
                        className='app_input' />
                </div>
                <div className="form_group">                    
                    <select 
                        name="" id=""
                        className='app_input' >
                        <option value="">--Select secret question--</option>                        
                        <option value="Where did you met your current love?">Where did you met your current spause?</option> 
                        <option value="Which cooking style do you prefer">Which cooking style do you prefer?</option> 
                        <option value="Which color do you like?">Which color do you like?</option> 
                        <option value="At your leasure, what do you do?">At your leasure, what do you do?</option> 
                        <option value="The last place you travel last year?">The last place you travel last year?</option> 
                        <option value="Which football team do you like mostl?">Which football team do you like mostl?</option> 
                        <option value="Which place do you like to travel?">Which place do you like to travel?</option> 
                        <option value="What kind of fish do you preder?">What kind of fish do you preder?</option> 
                        <option value="Who was you first neighbour?">Who was you first neighbour?</option> 
                        <option value="Who was your secret love?">Who was your secret love?</option> 
                    </select>
                </div>
                <div className="form_group">                    
                    <input 
                        type="text"
                        placeholder='Enter an answer'
                        className='app_input' />
                </div>
                <button className='btn_submit'>Submit</button>
              </form>
          </motion.div>
          <div className="no_secret">
              <h4>If you have not set a secret question, please login and set it to the setting tab in your profile account</h4>
          </div>
      </div>
    </div>
  )
}

export default Change
