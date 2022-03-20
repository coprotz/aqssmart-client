import React from 'react'
import './modal.css'
import { regions } from '../Regions';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/slices/users/verifyUserSlice';

const defaultData = {
    education: '',
    english: '',
    computer: '',
    emploStatus: '',

}


const Modal_Location = ({ user, modal_Edu, setModal_Edu, setFeedback, editUserStatus }) => {

    const [formData, setForm] = useForm(defaultData)

    const dispatch = useDispatch();

    const id = user._id

    const {
        education,
        english,
        computer,
        emploStatus
    } = formData;

    const updateEducation = {
        user: id,
        education: education,
        english: english,
        computer: computer,
        emploStatus: emploStatus
    }

    const saveEdu = (e) => {
        e.preventDefault()

        try {
            dispatch(editUser(updateEducation))
        } catch (error) {
            dispatch(editUser())
        }
        console.log(updateEducation)
        setModal_Edu(null)
        setFeedback(editUserStatus)
        const timer = setTimeout(() => {
            setFeedback('')
        }, 5000);
        return () => clearTimeout(timer)

    }


    return (
        <div className="modal_wrapper">
            <div className="modal_user_edit">
                <button className='close_modal' onClick={() => setModal_Edu(null)}><AiOutlineClose className='svg_btn' /></button>
                <div className="modal__inner">
                    <h2>Edit Applicant Basic Infomation</h2>
                    <form action="" onSubmit={saveEdu}>

                        <div className="formGroup"
                            value={education || user?.education}
                            onChange={setForm}
                            required>
                            <label htmlFor="">EDUCATION</label>
                            <div>
                                <div className="btn-radio"><input type="radio" name="education" value="Olevel" required />Olevel </div>
                                <div className="btn-radio"><input type="radio" name="education" value="Alevel" required />Alevel</div>
                                <div className="btn-radio"><input type="radio" name="education" value="Certificate" required />Certificate</div>
                                <div className="btn-radio"><input type="radio" name="education" value="Diploma" required />Diploma</div>
                                <div className="btn-radio"><input type="radio" name="education" value="Bachelor" required />Bachelor</div>
                            </div>
                        </div>
                        <div className="formGroup"
                            value={computer || user?.computer}
                            onChange={setForm}
                            required>
                            <label htmlFor="">COMPUTER KNOWLEDGE</label>
                            <div>
                                <div className="btn-radio"><input type="radio" name="computer" value="Basic" required />Basic </div>
                                <div className="btn-radio"><input type="radio" name="computer" value="Intermediate" required />Intermediate</div>
                                <div className="btn-radio"><input type="radio" name="computer" value="Advance" required />Advance</div>
                            </div>
                        </div>
                        <div className="formGroup"
                            value={english || user?.english}
                            onChange={setForm}
                            required>
                            <label htmlFor="">ENGLISH PROFECIENCY</label>
                            <div>
                                <div className="btn-radio"><input type="radio" name="english" value="Bignner" />Bignner </div>
                                <div className="btn-radio"><input type="radio" name="english" value="Intermediate" />Intermediate</div>
                                <div className="btn-radio"><input type="radio" name="english" value="Fluent" />Fluent</div>
                            </div>
                        </div>
                        <div className="formGroup"
                            value={emploStatus || user?.emploStatus}
                            onChange={setForm}
                            required>
                            <label htmlFor="">EMPLYMENT STATUS</label>
                            <div className='modal_status'>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Employed" />Employed</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Business" />Business</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Student" />Student</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Unemployed" />Unemployed</div>
                                <div className="btn-radio"><input type="radio" name="emploStatus" value="Fleerancer" />Fleerancer</div>
                            </div>
                        </div>
                        <button type='submit' className='modal_close_btn'>EDIT</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Modal_Location
