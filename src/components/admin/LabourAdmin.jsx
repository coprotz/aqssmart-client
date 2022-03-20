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

const LabourAdmin = ({active, setActive, userLabors, user}) => {
  const [addNew, setAddNew] = useState(true)
  const dispatch = useDispatch();

  const users = useSelector((state) => state?.users?.users)
  const labors = useSelector((state) => state?.labors.labors)

  console.log('user', users)

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
              <th>Name</th>
              <th>Skills</th>
              <th>Region</th>
              <th>District</th>
              <th>Street</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Posted By</th>
              <th>Action</th>
            </thead>
            <tbody>
              {user?.userType === 'Admin' && 
              labors.map((l) => (              
                <tr key={l._id}>
                  <td data-label='Photo'>
                    <img src={ `${PF}/img.png`} alt="" className="avatarImg" />                   
                  </td>
                  <td data-label='Name'>{l.firstname} {l.lastname}</td>
                  <td data-label='Skills'>{l.skills.map((s,i)=> (
                    <span key={i}>{s}, </span> 
                    ))}
                  </td>
                  <td data-label='Region'>{l.region}</td>
                  <td data-label='District'>{l.district}</td>
                  <td data-label='Street'>{l.ward}</td>
                  <td data-label='Mobile'>{l.mobile.map((m,i) => (
                    <span key={i}>{m.phoneNumber}, </span>
                    ))}
                  </td>
                  <td data-label='Status'>{l.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===l?.user).username}</td>
                  <td data-label='Action'>                
                  <button className='admin_action_btn'>                   
                          Action                  
                          <div className='action_btn_span'>
                            <span onClick={() => setAddNew(l)}>Edit</span>
                            <span onClick={() => dispatch(deleteLabor(l._id))}>Delete</span>                          
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Approved'}))}>Approve</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Rejected'}))}>Reject</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Pending'}))}>Pending</span>                 
                          </div>          
                        </button>              
                  </td>
                </tr>
              ))}
              {user?.userType === 'Manager' && 
              labors.map((l) => (              
                <tr key={l._id}>
                  <td data-label='Photo'>
                    <img src={ `${PF}/img.png`} alt="" className="avatarImg" />                   
                  </td>
                  <td data-label='Name'>{l.firstname} {l.lastname}</td>
                  <td data-label='Skills'>{l.skills.map((s,i)=> (
                    <span key={i}>{s}, </span> 
                    ))}
                  </td>
                  <td data-label='Region'>{l.region}</td>
                  <td data-label='District'>{l.district}</td>
                  <td data-label='Street'>{l.ward}</td>
                  <td data-label='Mobile'>{l.mobile.map((m,i) => (
                    <span key={i}>{m.phoneNumber}, </span>
                    ))}
                  </td>
                  <td data-label='Status'>{l.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===l?.user)?.username}</td>
                  <td data-label='Action'>                
                  <button className='admin_action_btn'>                   
                          Action                  
                          <div className='action_btn_span'>
                            <span onClick={() => setAddNew(l)}>Edit</span>
                            <span onClick={() => dispatch(deleteLabor(l._id))}>Delete</span>                          
                            {/* <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Approved'}))}>Approve</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Rejected'}))}>Reject</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Pending'}))}>Pending</span>                  */}
                          </div>          
                        </button>              
                  </td>
                </tr>
              ))}
              {user?.userType === 'User' && 
              labors?.filter((lb) => lb.user === user._id).map((l) => (              
                <tr key={l._id}>
                  <td data-label='Photo'>
                    <img src={ `${PF}/img.png`} alt="" className="avatarImg" />                   
                  </td>
                  <td data-label='Name'>{l.firstname} {l.lastname}</td>
                  <td data-label='Skills'>{l.skills.map((s,i)=> (
                    <span key={i}>{s}, </span> 
                    ))}
                  </td>
                  <td data-label='Region'>{l.region}</td>
                  <td data-label='District'>{l.district}</td>
                  <td data-label='Street'>{l.ward}</td>
                  <td data-label='Mobile'>{l.mobile.map((m,i) => (
                    <span key={i}>{m.phoneNumber}, </span>
                    ))}
                  </td>
                  <td data-label='Status'>{l.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===l?.user).username}</td>
                  <td data-label='Action'>                
                  <button className='admin_action_btn'>                   
                          Action                  
                          <div className='action_btn_span'>
                            <span onClick={() => setAddNew(l)}>Edit</span>
                            <span onClick={() => dispatch(deleteLabor(l._id))}>Delete</span>                          
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Approved'}))}>Approve</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Rejected'}))}>Reject</span>
                            <span onClick={() => dispatch(updateLabor({labor:l._id, status:'Pending'}))}>Pending</span>                 
                          </div>          
                        </button>              
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
      <div className={`${addNew ? 'supplier__hide': 'supplier__add'}`}>
        <AddLaborForm addNew={addNew} setAddNew={setAddNew} user={user}/>
      </div>
    </div>
  )
}

export default LabourAdmin
