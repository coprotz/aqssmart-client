import React from 'react'
import './modal.css'
import { regions } from '../Regions';
import { useState } from 'react';
import {  AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/slices/users/verifyUserSlice';

const defaultData = {   
    secret:'',
    answer:''
   
}



const Modal_Secret = ({sec, setSecret, user}) => {

    const [formData, setForm] = useForm(defaultData)
    const dispatch = useDispatch(); 

    const { error, status, editUserStatus } = useSelector((state) => state.verifyUser)

    const { secret, answer } = formData; 

    const id = user._id
    
    const handleSecret = (e) => {
        e.preventDefault()

        const updateSecret = {
            user: id,
            secret: secret,
            answer: answer
        }

        try {
            dispatch(editUser(updateSecret))
            if(editUserStatus === 'success'){
                setSecret(null)
            }
        } catch (error) {
            dispatch(editUser())
        }
    }
        
 
  return (
    <div className="modal_wrapper">
    <div className="modal_user_edit">
        <button className='close_modal' onClick={() => setSecret(null)}><AiOutlineClose className='svg_btn'/></button>
        <div className="modal__inner">
            <h2>Update Secret Question and Answer</h2>
            <form action="" onSubmit={handleSecret}>     
              
                <div className="formGroup">
                    <label htmlFor="">QUESTION</label>
                    <select 
                     
                        id="" 
                        name='secret'
                        value={secret}
                        onChange={setForm}  
                        className='form_group_input'>
                        <option value={secret || user.secret}>{secret || user.secret}</option> 
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

                <div className="formGroup">
                    <label htmlFor="">ANSWER</label>
                    <input                   
                        name='answer'
                        value={answer || user.answer}
                        onChange={setForm} 
                        className='form_group_input'
                    />                    
                </div>
            
                <button className='modal_close_btn'>{status === 'pending' ? 'Sending' : 'UPDATE'}</button> 
            </form>
            
        </div>
      
    </div>
</div> 
  )
}

export default Modal_Secret
