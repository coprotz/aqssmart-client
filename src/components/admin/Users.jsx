import React from 'react'
import { useState } from 'react'
import Calc from '../../images/aqs.png'
import { AiOutlineClose } from "react-icons/ai"
import AddMaterialForm from './AddMaterialForm'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import {  MdMenuOpen} from "react-icons/md";
import AddLaborForm from './AddLaborForm'
import { deleteLabor, updateLabor } from '../../redux/slices/labors/laborsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slices/users/usersSlice'
import Modal_UpdateUser from '../modal/Modal_UpdateUser'

const Users = ({active, setActive, userLabors, user }) => {
  const [addNew, setAddNew] = useState(true)

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users)

  console.log('users', users)



  const [modal_User, setUpdateUser] = useState(null)

  const PF = 'http://localhost:3000/img'


  return (
    <div className='suppllier__wrapper'>
      <div className={`${addNew? 'supplier__list': 'suppliers__inner_1'}`}>
        <div className="search__supplier"> 
          <div className= 'suppliers2'>
            <div className="close__menu" onClick={() => setActive(!active)}><MdMenuOpen/></div> 
            <div className="search_1">
              <button><AiOutlineSearch/></button>
              <input type='text' className="search__input" placeholder='Type to search...'/>             
            </div> 
          </div>         
         

          <div className='add__new__supplier' onClick={() => setAddNew(!addNew)}><button>{addNew? 'Add +': 'Close Add New'}</button></div>     
        </div>
        <div className='suppliers__inner'>
          <table className="table">
            <thead>
              <th>Photo</th>
              <th>Username</th>
              <th>Full Name</th>            
              <th>Age</th>
              <th>Sex</th>
              <th>Region</th>
              <th>District</th>
              <th>Street</th> 
              <th>Mobile</th>                     
              <th>Email</th>  
              <th>User Type</th>    
              <th>Position applied</th>         
              <th>Application Status</th>
              <th>Contract</th>
              <th>Action</th>
            </thead>
            <tbody>
              {users?.filter((us) => us._id !== user._id).map((u) => (              
                <tr key={u._id}>
                  <td data-label='Photo'>
                    <img src={ `${PF}/img.png`} alt="" className="avatarImg" />                   
                  </td>
                  <td data-label='Username'>{u.username}</td>
                  <td data-label='Name'>{u.firstname} {u.lastname}</td>
                  <td data-label='Age'>{u.age}</td>
                  <td data-label='Sex'>{u.sex}</td>                  
                  <td data-label='Region'>{u.region}</td>
                  <td data-label='District'>{u.district}</td>
                  <td data-label='Street'>{u.street}</td>
                  <td data-label='Mobile'>{u.phone}</td>
                  <td data-label='Email'>{u.email}</td>
                  <td data-label='User Type'>{u.userType}</td>
                  <td data-label='Position Applied'>{u.position}</td>  
                  <td data-label='Application Status'>{u.appliStatus}</td>  
                  <td data-label='Contrcat'><a href={`http://localhost:8800/contracts/${u.contract}`} target="_blank">{u.contract}</a></td>                 
                  <td data-label='Action'>                
                  <button className='admin_action_btn' onClick={() => setUpdateUser(u)}>                   
                      Update User               
                  </button>              
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      {modal_User ?
          <Modal_UpdateUser user={user} setUpdateUser={setUpdateUser} modal_User={modal_User}/>
      : null}
      <div className={`${addNew ? 'supplier__hide': 'supplier__add'}`}>
        <AddLaborForm addNew={addNew} setAddNew={setAddNew} user={user}/>
      </div>
    </div>
  )
}

export default Users
