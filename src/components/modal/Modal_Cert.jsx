import React from 'react'
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import './modal.css'
import { addCert, updateCert } from '../../redux/slices/certificates/certsSlice';
import { useForm } from 'react-hooks-helper'

const defaultData = {
    yearStart: '',
    yearEnd: '',
    college: '',
    certName: ''
}

const Modal_Cert = ({ setModal_Crt, modal_Crt, user, setFeedback }) => {

    const [formData, setForm] = useForm(defaultData);

    const { yearStart, yearEnd, college, certName } = formData

    const { error, status, addStatus, editStatus } = useSelector((state) => state.certs)

    console.log(addStatus)



    const dispatch = useDispatch();


    const saveCert = (e) => {
        e.preventDefault()

        const newCert = {
            user: user._id,
            yearStart: yearStart,
            yearEnd: yearEnd,
            college: college,
            certName: certName
        }

        const editCert = {
            certificate: modal_Crt._id,
            yearStart: yearStart,
            yearEnd: yearEnd,
            college: college,
            certName: certName
        }
    

        console.log(newCert)

        try {

            if (modal_Crt._id) {
                dispatch(updateCert(editCert))
                if(editStatus === 'success'){
                    setFeedback(true)
                    const timer = setTimeout(() => {
                    setFeedback('')
                    }, 5000);
                    return () => clearTimeout(timer)
                }
            } else {
                dispatch(addCert(newCert))
                if(addStatus === 'success'){
                    setFeedback(true)
                    const timer = setTimeout(() => {
                    setFeedback('')
                    }, 5000);
                    return () => clearTimeout(timer)
                }
            }

        } catch (error) {
            dispatch(addCert())
            console.log(newCert)
        }
        setModal_Crt(null)
    }



    // console.log(showModal_Exp)

    return (
        <div className="modal_wrapper">
            <div className="modal_user_edit">
                <button className='close_modal' onClick={() => setModal_Crt(null)}><AiOutlineClose /></button>
                <div className="modal__inner">
                    <h2>{modal_Crt !== true ? 'Edit Applicant Certification' : 'Add Applicant Certification'}</h2>
                    <form action="" onSubmit={saveCert}>
                        <div className="formGroup" >
                            <label htmlFor="age">DURATION</label>
                            <div className="inputGrout">
                                <input
                                    type="date"
                                    name='yearStart'
                                    value={yearStart || modal_Crt?.yearStart}
                                    className='form_group_input'
                                    onChange={setForm}
                                    required
                                // onChange={(e) => setYearStart(e.target.value)}
                                />
                                <input
                                    type="date"
                                    name='yearEnd'
                                    value={yearEnd || modal_Crt?.yearEnd}
                                    className='form_group_input'
                                    onChange={setForm}
                                    required
                                // onChange={(e) => setYearEnd(e.target.value)}
                                />

                            </div>

                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">COLLEGE</label>
                            <input
                                type="text"
                                name='college'
                                value={college || modal_Crt?.college}
                                className='form_group_input'
                                onChange={setForm}
                                required
                            // onChange={(e) => setCollege(e.target.value)}
                            />
                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">CERTIFICATE OBTAINED</label>
                            <input
                                type="text"
                                name='certName'
                                value={certName || modal_Crt?.certName}
                                className='form_group_input'
                                onChange={setForm}
                                required
                            // onChange={(e) => setCertName(e.target.value)}
                            />
                        </div>

                        <button
                            className='modal_close_btn'
                            onClick={saveCert}
                            type='submit'
                        >{modal_Crt !== true ? 'EDIT' : 'ADD'}</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Modal_Cert