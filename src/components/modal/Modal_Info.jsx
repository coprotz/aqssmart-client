import React from 'react'
import './modal.css'
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { editUser } from '../../redux/slices/users/verifyUserSlice';

const defaultData = {
    lastname: '',
    age: '',
    phone: '',
    secret: '',
    answer: '',
    email: '',
    sex: ''
}


const Modal_Info = ({ setShowModal_Info, user, setFeedback, editUserStatus }) => {

    const [formData, setForm] = useForm(defaultData)

    const { firstname, lastname, age, phone, email } = formData
    const dispatch = useDispatch();

    const { error, status } = useSelector((state) => state.verifyUser)

    const id = user._id

    const updateInfo = {
        user: id,
        firstname: firstname,
        lastname: lastname,
        age: age,
        phone: phone,
        email: email,
    }

    const updateUserInfo = (e) => {
        e.preventDefault()
        try {
            dispatch(editUser(updateInfo))
            // if(editUserStatus === 'success'){
            // if(editUserStatus === 'success'){
           

            // }

        } catch (error) {
            dispatch(editUser())
        }
        
        console.log(updateInfo)
   
        setFeedback(editUserStatus)
        const timer = setTimeout(() => {
            setFeedback('')
        }, 5000);
        setShowModal_Info(null)
        return () => clearTimeout(timer)
        

    }

    console.log('edit2', editUserStatus)


    return (
        <div className="modal_wrapper">
            <div className="modal_user_edit">
                <button className='close_modal' onClick={() => setShowModal_Info(null)}><AiOutlineClose className='svg_btn' /></button>
                <div className="modal__inner">
                    <h2>Edit Applicant Basic Infomation</h2>
                    {error ? <div>{error}</div> : null}
                    <form action="" onSubmit={updateUserInfo}>
                        <div className="formGroup" >
                            <label htmlFor="age">EMAIL</label>
                            <input
                                type="email"
                                name='email'
                                value={email || user?.email}
                                className='form_group_input'
                                onChange={setForm}
                            />
                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">PHONE</label>
                            <input
                                type="phone"
                                name='phone'
                                value={phone || user?.phone}
                                className='form_group_input'
                                onChange={setForm}
                            />
                        </div>
                        <div className="formGroup" >
                            <label htmlFor="age">AGE</label>
                            <input
                                type="text"
                                name='age'
                                value={age || user?.age}
                                className='form_group_input'
                                onChange={setForm}
                            />
                        </div>


                        <button className='modal_close_btn'>{status === 'pending' ? 'Sending' : 'EDIT'}</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Modal_Info
