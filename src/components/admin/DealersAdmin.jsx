import React from 'react'
import AddSupplierForm from './AddSupplierForm'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import {  MdMenuOpen} from "react-icons/md";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddDealerForm from './AddDealerForm';
import { updateDealer, deleteDealer } from '../../redux/slices/dealers/dealersSlice';


const DealersAdmin = ({active, setActive, users}) => {

  const dealers = useSelector((state) => state?.dealers?.dealers)

  const user = useSelector((state) => state?.verifyUser?.user?.user)
  const [addNew, setAddNew] = useState(true)
  // const [action, setAction] = useState(null)

  const dispatch = useDispatch();
  console.log('dealers', dealers)

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
              <th>Dealer</th>
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
              {user?.userType === 'User' &&
              dealers?.filter((d)=> d?.user === user._id).map((dealer) => (              
                <tr key={dealer?._id}>
                  <td data-label='Dealer'>{dealer?.dealerName}</td>
                  <td data-label='Region'>{dealer?.region}</td>
                  <td data-label='District'>{dealer?.district}</td>
                  <td data-label='Ward'>{dealer?.ward}</td>
                  <td data-label='Person'>{dealer?.contactName}</td>
                  <td data-label='Phones'>{dealer?.mobile.map((m,i)=>(<span key={i}>{m.phoneNumber}, </span>))}</td>
                  <td data-label='Status'>{dealer?.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===dealer?.user)?.username}</td>
                  <td data-label='Action' className='action_admin'>                  
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteDealer(dealer._id))}>Delete</span>
                          {/* <span onClick={() => dispatch(deleteDealer(dealer._id))}>Delete</span>
                          <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Pending'}))}>Pending</span>                 */}
                        </div>          
                      </button> 
               
                  </td>
                </tr>
              ))}
              {user?.userType === 'Admin' &&
              dealers?.map((dealer) => (              
                <tr key={dealer?._id}>
                  <td data-label='Dealer'>{dealer?.dealerName}</td>
                  <td data-label='Region'>{dealer?.region}</td>
                  <td data-label='District'>{dealer?.district}</td>
                  <td data-label='Ward'>{dealer?.ward}</td>
                  <td data-label='Person'>{dealer?.contactName}</td>
                  <td data-label='Phones'>{dealer?.mobile.map((m,i)=>(<span key={i}>{m.phoneNumber}, </span>))}</td>
                  <td data-label='Status'>{dealer?.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===dealer?.user)?.username}</td>
                  <td data-label='Action' className='action_admin'>                  
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>                          
                          <span>Edit</span>
                          {user.userType === 'Admin'?
                          <>
                            <span onClick={() => dispatch(deleteDealer(dealer._id))}>Delete</span>
                            <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Approved'}))}>Approve</span>
                            <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Rejected'}))}>Reject</span>
                            <span onClick={() => dispatch(updateDealer({dealer:dealer._id, status:'Pending'}))}>Pending</span> 
                          </> : null}               
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
        <AddDealerForm addNew={addNew} setAddNew={setAddNew} user={user}/>
      </div>
    </div>
  )
}

export default DealersAdmin

