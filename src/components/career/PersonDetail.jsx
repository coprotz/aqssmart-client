import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'

const PersonDetail = ({go, next, previous, formData, setForm}) => {
   const { username, firstname, lastname, phone, email, sex, age } = formData
   const [error, setError] = useState()

 

    const [data, setServerError] = useState({
        username: '',
        email:'',
        phone:''
    })


   const continu = async (e) => {
    e.preventDefault();
    
    if(phone.length !== 13) {
      return setError("Mobille phone is invalid")} 
    
    // const response = await axios.post("http://localhost:8800/api/users",username, phone, email)
    // .then((response) => {
    //  
    // }).catch((e) => {
    //   const errors = e.response.data;
    //   console.log(errors)
    // });
    
    // const responseJson = await response.json();

    // if (response.status !== 200) {
    //   // setServerError({error: reponseJson.error});
    // } else {
    //   
    // }
    next();
    
      
  }



  return (
    <div className='person_detail'>
      <div className="person_top">       
        <h2>Person Details</h2>
      </div>  
      <div className="cover_1">        
      <motion.div initial={{ x: '-100vw'}}
        animate={{x:0}}  className="person_wrapper">
            <div className="formGroup">
              <label htmlFor="">Mobile Number? *</label>
              <input 
                type="text"
                name='phone'
                value={phone}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Mobile Number start +255'
              />
              {error ?
              <div className='error'>{error}</div> : null}
            </div>
            <div className="formGroup">
              <label htmlFor="">Username?</label>
              <input 
                type="text"
                name='username'
                value={username}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Username'
              />
            </div> 
            <div className="formGroup">
              <label htmlFor="">Full Name?</label>
              <div className="name_input">
              <input 
                type="text"
                name='firstname'
                value={firstname}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Firstname'
              />
               <input 
                type="text"
                name='lastname'
                value={lastname}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Lastname'
              />
              </div>
             
            </div>
            <div className="formGroup"
                value={sex}
                onChange={setForm} 
                required> 
                <label htmlFor="">Sex?</label>
                <div>
                  <div className="btn-radio"><input type="radio" name="sex" value="Male" required/>Male </div> 
                  <div className="btn-radio"><input type="radio" name="sex" value="Female" required/>Female</div>    
                </div>
                                     
            </div>
            <div className="formGroup">
              <label htmlFor="">Email?</label>
              <input 
                type="email"
                name='email'
                value={email}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Email'
              />
            </div> 
            <div className="formGroup">
              <label htmlFor="">Age?</label>
              <input 
                type="text"
                name='age'
                value={age}
                onChange={setForm}
                required
                className='form_group_input'
                placeholder='Your Age'
              />
            </div>          

        </motion.div>
        <div className="form__btn__action">
        <button onClick={() => {previous()}}>Previous</button>
          {username === '' || phone === '' || firstname === '' || lastname === '' || sex === '' || email === '' || age=== ''?
            <button
            disabled={true}
            className="disabled"
             >Next</button>
            :       
            <button onClick={continu}>Next</button>
          }
          
        </div>
        <div className="person_details">
          *Make sure the Mobile Number is valid, it will be used for login and receive money.
        </div>
        </div>
    </div>
  )
}

export default PersonDetail
