import React from 'react'
import './modal.css'
import { regions } from '../Regions';
import { useState } from 'react';
import {  AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slices/users/usersSlice';
import axios from 'axios';

const defaultData = {    
    appliStatus:'',
    contract:'',
    userType:''
}


const Modal_UpdateUser = ({user, modal_User, setUpdateUser}) => {

    const [formData, setForm] = useForm(defaultData)

    const { userType, contract } = formData;
    const dispatch = useDispatch(); 

    const [choose, setChoose] = useState('')
    const [action, setAction] = useState('')

    
    const choices = [
        { id: '1', name:'Application Status'},
        { id: '2', name:'User Type'},
    ]

    const { error, status, editUserStatus } = useSelector((state) => state.verifyUser)

    // const id = user._id

    const [userStatus, setAppliStatus] = useState('')

    const [file, setFile] = useState(null)
    // const [userType, setUserType] = useState('')

    const handleChange = (e) => {
        const getChoice = e.target.value;
        setChoose(getChoice)
        console.log('choice',choose)
      }
    
      const handleChoice = (e) => {
        const getStatus = e.target.value;
        setAction(getStatus)
        // setUserType(getStatus)
        console.log('status',getStatus)
      }

      console.log('userType',userType)


    // console.log(modal_User)

   

    const updateUserStatus = async (e) => {
        e.preventDefault()

        if(choose === '2'){        

        const editUserType = {
            user: modal_User?._id,
            userType: userType,          
        }

        try {
            dispatch(updateUser(editUserType))
            
        } catch (error) {
            dispatch(updateUser())
        }
        setUpdateUser(null)

        console.log(editUserType)

    }

        if(choose === '1'){
           
            if(file){
                const data = new FormData();
                const fileName = file.name;
                data.append("name", fileName);
                data.append("file", file);

                // contract = fileName;

                console.log(fileName)

                try {
                    await axios.post("https://aqssmart.herokuapp.com/api/upload", data)
                } catch (error) {
                    console.log(error)
                }
            }

            const editAppliStatus = {
                user: modal_User._id,
                appliStatus: action,                
                contract: file.name,

            }
            try {
                dispatch(updateUser(editAppliStatus))
                
            } catch (error) {
                dispatch(updateUser())
            }
            setUpdateUser(null)
            console.log(editAppliStatus) 
        }
       


    }


  
    return (
    <div className="modal_wrapper">
    <div className="modal_user_edit">
        <button className='close_modal' onClick={() => setUpdateUser(null)}><AiOutlineClose className='svg_btn'/></button>
        <div className="modal__inner">
            <h2>Update User {modal_User?.username}?</h2>
            <form action="" onSubmit={updateUserStatus}>               
                <div className="formGroup">
                    <label htmlFor="">UPDATE TYPE</label>
                    <select 
                        name="updateType" 
                        // value={updateType}   
                        onChange={handleChange}
                        className='form_group_input'
                        >                            
                        <option>--Select Update--</option>
                        {choices.map((c) => (
                           <option value={c.id} key={c.id}>{c.name}</option>   
                        ))}                       
                      
                    </select>
                </div> 
                {choose === '1' ?             
                <div className="formGroup">
                    <label htmlFor="">APPLICATION STATUS</label>
                    <select 
                        name="appliStatus" 
                        // value={appliStatus}   
                        onChange={handleChoice} 
                        className='form_group_input'
                        >                            
                        <option>--Select Application Status--</option>   
                        <option value="Approved">Approved</option>  
                        <option value="Rejected">Rejected</option>  
                    </select>
                </div>
                : null}
                {choose === '1' && action ==='Approved'? 
                     <div className="formGroup">
                     <label htmlFor="">UPLOAD CONTRACT</label>
                     <input                        
                        name="contract" 
                        //  value={contract}   
                        //  onChange={setForm}
                        type="file" id='file'                         
                        accept=".png,.jpeg,.jpg,.pdf" 
                        onChange={(e) => setFile(e.target.files[0])}
                        className='form_group_input'
                    />                            
                       
                 </div>
                : null}
                 {choose ==='2'? 
                    <div className="formGroup">
                    <label htmlFor="">USER TYPE</label>
                    <select 
                        name="userType" 
                        value={userType}   
                        onChange={setForm} 
                        className='form_group_input'
                        >                            
                        <option>--Select User Type--</option>
                        <option value='Admin'>Admin</option>
                        <option value='Manager'>Manager</option>
                        <option value='User'>User</option>
                                             
                      
                    </select>
                </div> 
                : null}
            
   
                <button className='modal_close_btn'>{status === 'pending' ? 'Sending' : 'UPDATE'}</button> 
            </form>
            
        </div>
      
    </div>
</div> 
  )
}

export default Modal_UpdateUser
