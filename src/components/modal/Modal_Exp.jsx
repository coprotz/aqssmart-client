import React from 'react'
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hooks-helper'
import './modal.css'
import { addExperience, updateExperience } from '../../redux/slices/experiences/experiencesSlices'


const defaultData = {
    yearStart: '',
    yearEnd: '',
    company: '',
    position: ''
}

const Modal_Exp = ({ setModal_Exp, user, modal_Exp, setFeedback }) => {

    const [formData, setForm] = useForm(defaultData)

    const dispatch = useDispatch();

    const { yearStart, yearEnd, company, position } = formData;

    const {status, error} = useSelector((state) => state?.verifyUser)


    const saveAppExperience = (e) => {
        e.preventDefault()

        const newExperience = {
            user: user._id,
            yearStart: yearStart,
            yearEnd: yearEnd,
            company: company,
            position: position
        }
    
    
    
        const updateExper = {
            experience: modal_Exp._id,
            yearStart: yearStart,
            yearEnd: yearEnd,
            company: company,
            position: position
    
        }


        try {
            if (modal_Exp._id) {
                dispatch(updateExperience(updateExper))
            } else {
                dispatch(addExperience(newExperience))
            }

        } catch (error) {
            dispatch(addExperience())
        }

        // console.log(newExperience)
        setModal_Exp(null)
    }



    return (
        <div className="modal_wrapper">
            <div className="modal_user_edit">
                <button className='close_modal' onClick={() => setModal_Exp(null)}><AiOutlineClose /></button>
                <div className="modal__inner">
                    <h2>{modal_Exp === true ? 'Add Applicant Experience' : 'Edit Applicant Experience'}</h2>
                    <form action="" onSubmit={saveAppExperience}>
                        <div className="formGroup" >
                            <label htmlFor="age">COMPANY NAME</label>
                            <input
                                type="text"
                                name='company'
                                value={company || modal_Exp?.company}
                                className='form_group_input'
                                onChange={setForm}
                            />
                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">POSITION</label>
                            <input
                                type="text"
                                name='position'
                                value={position || modal_Exp?.position}
                                className='form_group_input'
                                onChange={setForm}
                            />
                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">DURATION</label>
                            <div className="inputGrout">
                                <input
                                    type="date"
                                    name='yearStart'
                                    value={yearStart || modal_Exp?.yearStart}
                                    className='form_group_input'
                                    onChange={setForm}
                                />
                                <input
                                    type="date"
                                    name='yearEnd'
                                    value={yearEnd || modal_Exp?.yearEnd}
                                    className='form_group_input'
                                    onChange={setForm}
                                />

                            </div>

                        </div>
                        {status === 'pending'? 
                         <button
                            className='modal_close_btn'              
                           >Saving...
                        </button>
                        :
                        <button
                            className='modal_close_btn'
                            onClick={saveAppExperience}
                            type='submit'
                        >{modal_Exp === true ? 'ADD' : 'EDIT'}
                        </button>
                        }
                        

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Modal_Exp
