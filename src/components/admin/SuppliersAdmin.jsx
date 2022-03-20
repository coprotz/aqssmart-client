import React from 'react'
import AddSupplierForm from './AddSupplierForm'
import {  AiOutlineSearch } from "react-icons/ai";
import {  MdMenuOpen} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteSupplier, updateSupplier } from '../../redux/slices/suppliers/suppliersSlice';

const SuppliersAdmin = ({active, setActive, userSuppliers, user, users}) => {

  const [searchTerm, setSearchTerm] = useState('')

  const suppliers = useSelector((state) => state?.suppliers?.suppliers)
  const [addNew, setAddNew] = useState(true)


  const dispatch = useDispatch();


  return (
    <div className='suppllier__wrapper'>
      <div className={`${addNew? 'supplier__list': 'suppliers__inner_1'}`}>
        <div className="search__supplier"> 
          <div className="suppliers2">
            <div className="close__menu" onClick={() => setActive(!active)}><MdMenuOpen/></div> 
            <div className="search_1">
              <button><AiOutlineSearch/></button>
              <input type='text' className="search__input" placeholder='Type to search...'/>             
            </div> 
          </div>         
         

          <div className="add__new__supplier" onClick={() => setAddNew(!addNew)}><button>{addNew? 'Add +': 'Close Add New'}</button></div>     
        </div>
        <div className="suppliers__inner">
          <table className="table">
            <thead>
              <th>Name</th>
              <th>Region</th>
              <th>District</th>
              <th>Ward/Stree/Road</th>
              <th>Contact Person</th>
              <th>Mobile Numbers</th>
              <th>Status</th>
              <th>Posted By</th>
              <th>Action</th>
            </thead>
            <tbody>
              {user?.userType === 'Admin' && 
              suppliers?.map((s) => (              
                <tr key={s._id}>
                  <td data-label='Name'>{s.supplierName}</td>
                  <td data-label='Region'>{s.region}</td>
                  <td data-label='District'>{s.district}</td>
                  <td data-label='Ward'>{s.ward}</td>
                  <td data-label='Person'>{s.contactName}</td>
                  <td data-label='Phones'>{s?.mobile.map((m,i)=>(<span key={i}>{m.phoneNumber}, </span>))}</td>
                  <td data-label='Status'>{s.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===s?.user)?.username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteSupplier(s._id))}>Delete</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Pending'}))}>Pending</span>                 
                        </div>          
                      </button>              
                  </td>
                </tr>
              ))}
              { user?.userType === 'User' && 
              
              suppliers?.filter((sup) => sup?.user === user._id).map((s) => (              
                <tr key={s._id}>
                  <td data-label='Name'>{s.supplierName}</td>
                  <td data-label='Region'>{s.region}</td>
                  <td data-label='District'>{s.district}</td>
                  <td data-label='Ward'>{s.ward}</td>
                  <td data-label='Person'>{s.contactName}</td>
                  <td data-label='Phones'>{s?.mobile.map((m,i)=>(<span key={i}>{m.phoneNumber}, </span>))}</td>
                  <td data-label='Status'>{s.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===s?.user)?.username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>View</span>
                          <span onClick={() => dispatch(deleteSupplier(s._id))}>Delete</span>
                          {/* <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Pending'}))}>Pending</span>                  */}
                        </div>          
                      </button>              
                  </td>
                </tr>
              
              )) || user?.userType === 'Manager' && 
              suppliers?.map((s) => (              
                <tr key={s._id}>
                  <td data-label='Name'>{s.supplierName}</td>
                  <td data-label='Region'>{s.region}</td>
                  <td data-label='District'>{s.district}</td>
                  <td data-label='Ward'>{s.ward}</td>
                  <td data-label='Person'>{s.contactName}</td>
                  <td data-label='Phones'>{s?.mobile.map((m,i)=>(<span key={i}>{m.phoneNumber}, </span>))}</td>
                  <td data-label='Status'>{s.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===s?.user)?.username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>View</span>
                          {/* <span onClick={() => dispatch(deleteSupplier(s._id))}>Delete</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateSupplier({supplier:s._id, status:'Pending'}))}>Pending</span>                  */}
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
        <AddSupplierForm addNew={addNew} setAddNew={setAddNew} user={user}/>
      </div>
    </div>
  )
}

export default SuppliersAdmin
