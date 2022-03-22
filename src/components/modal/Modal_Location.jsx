import React from 'react'
import './modal.css'
import { regions } from '../Regions';
import { useState } from 'react';
import {  AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/slices/users/verifyUserSlice';

const defaultData = {    
    region:'',
    district:'',
    street:''
}


const Modal_Location = ({user, setModal_Loc}) => {

    const [formData, setForm] = useForm(defaultData)

    const { region,  district, street } = formData;
    const dispatch = useDispatch(); 

    const { error, status, editUserStatus } = useSelector((state) => state.verifyUser)

    const id = user._id

    const updateLocation = {
        user: id,
        region: region,
        district: district,
        street: street,
    }

    const updateUserLocation = (e) => {
        e.preventDefault()
        try {
            dispatch(editUser(updateLocation))
            setModal_Loc(null)
        } catch (error) {
            dispatch(editUser())
        }
    }

   
    const selectedReg = regions.find((r) => r.name === region)

  return (
    <div className="modal_wrapper">
    <div className="modal_user_edit">
        <button className='close_modal' onClick={() => setModal_Loc(null)}><AiOutlineClose className='svg_btn'/></button>
        <div className="modal__inner">
            <h2>Edit Applicant Location</h2>
            <form action="" onSubmit={updateUserLocation}>                
              
                <div className="formGroup">
                    <label htmlFor="">REGION</label>
                    <select 
                        name="region" 
                        value={region}   
                        onChange={setForm} 
                        className='form_group_input'
                    >                            
                        <option 
                            value={user.region}                            
                            >{user.region || '--Select Region-' }</option>
                        {regions.map((reg) => (
                            <option 
                                value={reg.name} 
                                key={reg.id}
                                >{reg.name}</option>
                        ))}
                    </select>
                </div>
                <div className="formGroup">
                    <label htmlFor="">DISTRICT</label>
                    <select 
                        name="district"                        
                        value={district}
                        onChange={setForm} 
                        className='form_group_input'>                      
                        <option 
                            value={user.district}                            
                            >{user.district || '--Select District--' }
                        </option>
                        {selectedReg?.districts.map((d, index) => (
                            <option 
                                value={d} 
                                key={index} 
                                name="district" 
                                >{d}</option>
                        ))}
                    </select>
                </div>
            
                <div className="formGroup">
                    <label htmlFor="">WARD/ STREET/ ROAD</label>
                    <input 
                        type="text" 
                        name='street' 
                        className='form_group_input'
                        value={street} 
                        onChange={setForm}
                        />
                </div>
   
                <button className='modal_close_btn'>{status === 'pending' ? 'Sending please wait..' : 'UPDATE'}</button> 
            </form>
            
        </div>
      
    </div>
</div> 
  )
}

export default Modal_Location
