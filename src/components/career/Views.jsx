import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight} from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Footer from '../Footer';
import Logo from '../../images/amzuu1.png'
import { signupUser } from '../../redux/slices/users/authUserSlice';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const Views = ({go, next, previous, formData, setForm, steps}) => {

  const {
    position,
    username,
    phone,
    firstname,
    lastname,
    age,
    sex,
    region,
    district,
    street,
    education,
    english,
    computer,
    emploStatus,
    email,
    } = formData;

    const dispatch = useDispatch();

    const { status, error, signupStatus } = useSelector((state) => state?.authUser)
    const message = useSelector((state) => state?.authUser?.user?.message) 
    const type = useSelector((state) => state?.authUser?.user?.type) 

    console.log(type)
  
    const move = (15/15)*100

    const Submit = async (e) => {
      e.preventDefault();

      const user = {
          position: position,
          username: username,
          phone: phone,
          email: email,
          firstname: firstname,
          lastname: lastname,
          age: age,
          sex: sex,
          region: region,
          district: district,
          street: street,
          education: education,
          emploStatus: emploStatus,
          computer: computer,
          english: english,
      }
      // console.log(user)
      try {
          dispatch(signupUser(user))
       

      } catch (err) {
          dispatch(signupUser())
      }
      if(!error){
        {next()};
   }
      
    }

    // console.log(signupStatus)

    const [terms, setTerms] = useState(false)

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

          {signupStatus !== 'success'? <div className='error'>Fail to create account</div> :null }          
            <div className="login_logo">
                <span className="login_btn_action" onClick={() => {previous()}}>
                      <button className='login_close_btn'><AiOutlineArrowLeft /></button>
                </span>
                <h2 className='title_head'>Previews</h2>
            </div>
            <div className='component'> 
              <div className='login_phone'> 
                <div className="login_sub_title">
                  
                </div> 
                <div className="login_form_wrapper"> 
                  <motion.div initial={{ x: '-100vw'}}
                    animate={{x:0}} >                     
                        <div className="previews">
                          <div className="inner_preview">
                            <div className="preview_1">                            
                              <strong>Position</strong>                          
                              <input 
                                name='position' 
                                value={position}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Phone</strong>                          
                              <input 
                                name='phone' 
                                value={phone}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Email</strong>                          
                              <input 
                                name='email' 
                                value={email}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Username</strong>                          
                              <input 
                                name='username' 
                                value={username}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Firstname</strong>                          
                              <input 
                                name='firstname' 
                                value={firstname}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                         
                            <div className="preview_1">                            
                              <strong>Lastname</strong>                          
                              <input 
                                name='lastname' 
                                value={lastname}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Age</strong>                          
                              <input 
                                name='age' 
                                value={age}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Sex</strong>                          
                              <input 
                                name='sex' 
                                value={sex}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                          </div>
                          <div className="inner_preview">
                            <div className="preview_1">                            
                              <strong>Region</strong>                          
                              <input 
                                name='region' 
                                value={region}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>                         
                            <div className="preview_1">                            
                              <strong>District</strong>                          
                              <input 
                                name='district' 
                                value={district}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Street</strong>                          
                              <input 
                                name='street' 
                                value={street}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Employment</strong>                          
                              <input 
                                name='emploStatus' 
                                value={emploStatus}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Education</strong>                          
                              <input 
                                name='education' 
                                value={education}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                         
                            <div className="preview_1">                            
                              <strong>English</strong>                          
                              <input 
                                name='english' 
                                value={english}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div>
                            <div className="preview_1">                            
                              <strong>Computer</strong>                          
                              <input 
                                name='computer' 
                                value={computer}              
                                onChange={setForm}
                                className='login_input'/>                         
                            </div> 
                          </div>
                         </div>   
                            <div className="submit__btn__wrapper">
                                <div className="btn-check">
                                    <input 
                                        type="checkbox" 
                                        onClick={() => setTerms(!terms)}
                                    />
                                    I accept Terms and Conditions
                                </div>
                            </div>                   
                           
                          

                          <div className="formSubmit">                       
                            {!terms ?
                                null
                                :                        
                                <button
                                    type="submit"
                                    className="submit__btn"
                                    onClick={Submit}
                                >{status==='pending'? 'Sending...' : 'SEND APPLICATION '}
                                </button>}
                        

                            
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
        {/* <div className="login_2"></div> */}
      </div>
    </div>
    
  )
  
}

export default Views
