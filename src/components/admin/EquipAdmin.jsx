import React from 'react'
import AddSupplierForm from './AddSupplierForm'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import {  MdMenuOpen} from "react-icons/md";
import { useState } from 'react';
import AddEquipForm from './AddEquipForm';
import { updateEquip, deleteEquip } from '../../redux/slices/equips/equipsSlice';
import { useSelector, useDispatch } from 'react-redux';



const EquipAdmin = ({active, setActive, userEquips, users, dealers}) => {

  const user = useSelector((state) => state?.verifyUser?.user?.user)

  const equips = useSelector((state) => state?.equips?.equips)
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
            <th>Equipment Name</th>
            <th>Sub-Category</th>
            <th>Category</th>
            <th>Capacity</th>
            <th>Unit</th>
            <th>Hiring Cost</th>
            <th>Duration</th>
            <th>Dealers</th>
            <th>Status</th>
            <th>Posted By</th>
            <th>Action</th>
          </thead>
          <tbody>
            {user?.userType === 'Admin' && 
            equips?.map((e) => (           
              <tr key={e._id}>
                <td data-label='Equipment Name'>{e?.equipName}</td>
                <td data-label='Sub-Category'>{e?.sub}</td>
                <td data-label='Category'>{e?.category}</td>
                <td data-label='Capacity'>{e.capacity}</td>
                <td data-label='Unit'>{e.unit}</td>
                <td data-label='Hiring Cost(TZS)'>{(e.hiringRate).toLocaleString()}</td>
                <td data-label='Duration'>{e.duration}</td>
                <td data-label='Dealers'>{dealers?.find((d) => d._id===e.dealer).dealerName}</td>
                <td data-label='Status'>{e.status}</td>
                <td data-label='Posted'>{users?.find((u)=> u?._id===e?.user).username}</td>
                <td data-label='Action'>                
                <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteEquip(e._id))}>Delete</span>
                          <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Pending'}))}>Pending</span>                 
                        </div>          
                      </button>             
                </td>
              </tr> 
            ))}
             {user?.userType === 'User' && 
            equips?.filter((eq) => eq.user === user._id).map((e) => (           
              <tr key={e._id}>
                <td data-label='Equipment Name'>{e?.equipName}</td>
                <td data-label='Sub-Category'>{e?.sub}</td>
                <td data-label='Category'>{e?.category}</td>
                <td data-label='Capacity'>{e.capacity}</td>
                <td data-label='Unit'>{e.unit}</td>
                <td data-label='Hiring Cost(TZS)'>{(e.hiringRate).toLocaleString()}</td>
                <td data-label='Duration'>{e.duration}</td>
                <td data-label='Dealers'>{dealers?.find((d) => d._id===e.dealer).dealerName}</td>
                <td data-label='Status'>{e.status}</td>
                <td data-label='Posted'>{users?.find((u)=> u?._id===e?.user).username}</td>
                <td data-label='Action'>                
                <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteEquip(e._id))}>Delete</span>
                          {/* <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateEquip({equip:e._id, status:'Pending'}))}>Pending</span>                  */}
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
      <AddEquipForm addNew={addNew} setAddNew={setAddNew} user={user}/>
    </div>
  </div>
  )
}

export default EquipAdmin
