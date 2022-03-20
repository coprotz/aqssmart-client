import React from 'react'
import { useState } from 'react'
import Calc from '../../images/aqs.png'
import { AiOutlineClose } from "react-icons/ai"
import AddMaterialForm from './AddMaterialForm'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import {  MdMenuOpen} from "react-icons/md";
import { deleteMaterial, updateMaterial } from '../../redux/slices/materials/materialsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../search/Search'




const MaterialsAdmin = ({active, setActive, user, userMaterials, users, suppliers}) => { 

  const [searchTerm, setSearchTerm] = useState('')

  const materials = useSelector((state) => state?.materials.materials)

  const dispatch = useDispatch();
  const [addNew, setAddNew] = useState(true)

  return (
    <div className='suppllier__wrapper'>
      <div className={`${addNew? 'supplier__list': 'suppliers__inner_1'}`}>
        <div className="search__supplier"> 
          <div className="suppliers2">
            <div className="close__menu" onClick={() => setActive(!active)}><MdMenuOpen/></div> 
            <Search setSearchTerm={setSearchTerm}/>
          </div>         
         

          <div className="add__new__supplier" onClick={() => setAddNew(!addNew)}><button>{addNew? 'Add New +': 'Close Add New'}</button></div>     
        </div>
        <div className="suppliers__inner">
          <table className="table">
            <thead>
              <th>Material Name</th>
              <th>Sub-Category</th>
              <th>Category</th>
              <th>Size</th>
              <th>Unit</th>
              <th>Price(TZS)</th>
              <th>Suppliers</th>
              <th>Status</th>
              <th>Posted By</th>
              <th>Action</th>
            </thead>
            <tbody>
              {user?.userType === 'Admin' && 
              materials && materials?.filter((val) => {
                if(searchTerm === ''){
                  return val
                }else if(val?.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return val
                }
              }).map((m) => (              
                <tr key={m._id}>
                  <td data-label='Material Name'>{m.materialName}</td>
                  <td data-label='Sub-Category'>{m.sub}</td>
                  <td data-label='Category'>{m.category}</td>
                  <td data-label='Size'>{m.size}</td>
                  <td data-label='Unit'>{m.unit}</td>
                  <td data-label='Price(TZS)'>{(m.price).toLocaleString()}</td>
                  <td data-label='Suppliers'>{suppliers?.find((s)=> s._id===m.supplier)?.supplierName}</td>
                  <td data-label='Status'>{m.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===m?.user).username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteMaterial(m._id))}>Delete</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Pending'}))}>Pending</span>                 
                        </div>          
                      </button>             
                  </td>
                </tr>
              ))}
              {user?.userType === 'Manager' && 
              materials.map((m) => (              
                <tr key={m._id}>
                  <td data-label='Material Name'>{m.materialName}</td>
                  <td data-label='Sub-Category'>{m.sub}</td>
                  <td data-label='Category'>{m.category}</td>
                  <td data-label='Size'>{m.size}</td>
                  <td data-label='Unit'>{m.unit}</td>
                  <td data-label='Price(TZS)'>{(m.price).toLocaleString()}</td>
                  <td data-label='Suppliers'>{suppliers?.find((s)=> s._id===m.supplier).supplierName}</td>
                  <td data-label='Status'>{m.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===m?.user).username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>Edit</span>
                          <span onClick={() => dispatch(deleteMaterial(m._id))}>Delete</span>
                          {/* <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Pending'}))}>Pending</span>                  */}
                        </div>          
                      </button>             
                  </td>
                </tr>
              ))}
              {user?.userType === 'User' && 
              materials && materials?.filter((val) => {
                if(searchTerm === ''){
                  return val
                }else if(val?.category.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                  return val
                }
              })?.filter((mt) => mt.user===user._id).map((m) => (              
                <tr key={m._id}>
                  <td data-label='Material Name'>{m.materialName}</td>
                  <td data-label='Sub-Category'>{m.sub}</td>
                  <td data-label='Category'>{m.category}</td>
                  <td data-label='Size'>{m.size}</td>
                  <td data-label='Unit'>{m.unit}</td>
                  <td data-label='Price(TZS)'>{(m.price).toLocaleString()}</td>
                  <td data-label='Suppliers'>{suppliers?.find((s)=> s._id===m.supplier).supplierName}</td>
                  <td data-label='Status'>{m.status}</td>
                  <td data-label='Posted'>{users?.find((u)=> u?._id===m?.user).username}</td>
                  <td data-label='Action'>                
                      <button className='admin_action_btn'>                   
                        Action                  
                        <div className='action_btn_span'>
                          <span>View</span>
                          <span onClick={() => dispatch(deleteMaterial(m._id))}>Delete</span>
                          {/* <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Approved'}))}>Approve</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Rejected'}))}>Reject</span>
                          <span onClick={() => dispatch(updateMaterial({material:m._id, status:'Pending'}))}>Pending</span>                  */}
                        </div>          
                      </button>             
                  </td>
                </tr>
              ))}


              {/* <tr>
                <td data-label='Material Name'>Mortice Lock</td>
                <td data-label='Sub-Category'>Locks</td>
                <td data-label='Category'>Security & Ironmongeries</td>
                <td data-label='Size'>3 level</td>
                <td data-label='Unit'>pc</td>
                <td data-label='Price(TZS)'>85,000</td>
                <td data-label='Suppliers'>Monica, Shwaibu, Tanga</td>
                <td data-label='Status'>Pending</td>
                <td data-label='Posted'>Amba Mzuri</td>
                <td data-label='Action'>                
                    <AiOutlineEdit/>              
                   <AiOutlineDelete/>             
                </td>
              </tr>
              <tr>
                <td data-label='Material Name'>Mortice Lock</td>
                <td data-label='Sub-Category'>Locks</td>
                <td data-label='Category'>Security & Ironmongeries</td>
                <td data-label='Size'>3 level</td>
                <td data-label='Unit'>pc</td>
                <td data-label='Price(TZS)'>85,000</td>
                <td data-label='Suppliers'>Monica, Shwaibu, Tanga</td>
                <td data-label='Status'>Pending</td>
                <td data-label='Posted'>Amba Mzuri</td>
                <td data-label='Action'>                
                    <AiOutlineEdit/>              
                   <AiOutlineDelete/>             
                </td>
              </tr>
              <tr>
                <td data-label='Material Name'>Mortice Lock</td>
                <td data-label='Sub-Category'>Locks</td>
                <td data-label='Category'>Security & Ironmongeries</td>
                <td data-label='Size'>3 level</td>
                <td data-label='Unit'>pc</td>
                <td data-label='Price(TZS)'>85,000</td>
                <td data-label='Suppliers'>Monica, Shwaibu, Tanga</td>
                <td data-label='Status'>Pending</td>
                <td data-label='Posted'>Amba Mzuri</td>
                <td data-label='Action'>                
                    <AiOutlineEdit/>              
                   <AiOutlineDelete/>             
                </td>
              </tr>
              <tr>
                <td data-label='Material Name'>Mortice Lock</td>
                <td data-label='Sub-Category'>Locks</td>
                <td data-label='Category'>Security & Ironmongeries</td>
                <td data-label='Size'>3 level</td>
                <td data-label='Unit'>pc</td>
                <td data-label='Price(TZS)'>85,000</td>
                <td data-label='Suppliers'>Monica, Shwaibu, Tanga</td>
                <td data-label='Status'>Pending</td>
                <td data-label='Posted'>Amba Mzuri</td>
                <td data-label='Action'>                
                    <AiOutlineEdit/>              
                   <AiOutlineDelete/>             
                </td>
              </tr>
              <tr>
                <td data-label='Material Name'>Mortice Lock</td>
                <td data-label='Sub-Category'>Locks</td>
                <td data-label='Category'>Security & Ironmongeries</td>
                <td data-label='Size'>3 level</td>
                <td data-label='Unit'>pc</td>
                <td data-label='Price(TZS)'>85,000</td>
                <td data-label='Suppliers'>Monica, Shwaibu, Tanga</td>
                <td data-label='Status'>Pending</td>
                <td data-label='Posted'>Amba Mzuri</td>
                <td data-label='Action'>                
                    <AiOutlineEdit/>              
                   <AiOutlineDelete/>             
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${addNew ? 'supplier__hide': 'supplier__add'}`}>
        <AddMaterialForm addNew={addNew} setAddNew={setAddNew} user={user}/>
      </div>
    </div>
  )
}

export default MaterialsAdmin
