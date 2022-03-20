import React from 'react'
import { useState } from 'react'
import { regions } from '../Regions'
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { addSupplier } from '../../redux/slices/suppliers/suppliersSlice';


const defaultData = {
    supplierName: '',
    region: '',
    district:'',
    ward:'',
    contactName: '',
    // mobile: '',
}

const AddSupplierForm = ({addNew, setAddNew, user}) => {

    const [formData, setForm] = useForm(defaultData)

    const dispatch = useDispatch(); 
   
    const { supplierName, region,  district, ward, contactName } = formData;

    const selectedReg = regions.find((r) => r.name === region)
   
    const { error, status, addStatus } = useSelector((state) => state.suppliers)

    const [inputPhones, setInputPhones] = useState([
        { phoneNumber: ''},
    ])

    const handleChangeInput = (index, event) => {
        const values = [...inputPhones];
        values[index][event.target.name] = event.target.value;
        setInputPhones(values)
    } 

    const handleSaveSupplier = (e) => {
        e.preventDefault();
 
        
        const newSupplier = {
            user: user?._id,
            supplierName: supplierName,
            region: region,
            district: district,
            ward: ward,
            contactName: contactName,
            mobile: inputPhones 
        }

        try {
            dispatch(addSupplier(newSupplier))
        } catch (error) {
            dispatch(addSupplier())
        };
        console.log(newSupplier)
  

    }

    const handleAddInput = (e) => {
        e.preventDefault()
        setInputPhones([...inputPhones, { phoneNumber: ''}])
    }

    const handleRemoveInput = (e,index) => {
        e.preventDefault()
        const values = [...inputPhones]
        values.splice(index, 1);
        setInputPhones(values)
    }
   
  return (
    <div className='supplierFormAdd'>
        <form action=""  className="addForm" >
                    <h2>Add Suuplier</h2>
                    {error !==''? <div className='error'>{error}</div> : null} 
                    <button className='closeForm_1' onClick={() => setAddNew(!addNew)}><AiOutlineClose/></button>
                    <div className="formGroup">
                        <label htmlFor="">Supplier Name</label>
                        <input 
                            type="text" 
                            name='supplierName' 
                            value={supplierName}
                            onChange={setForm}
                            className='form_group_input'
                            />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Supplier's Region</label>
                        <select 
                            name="region" 
                            value={region}
                            onChange={setForm}
                            className='form_group_input'
                            >                            
                            <option value="">--Select Region--</option>
                            {regions.map((reg) => (
                                <option 
                                    value={reg.name} 
                                    key={reg.id}                                       
                                    >{reg.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label>Supplier's District</label>
                        <select 
                             name="district"                              
                             value={district}
                             onChange={setForm} 
                             className='form_group_input'
                             > 
                            
                            <option 
                                value="">--Select District--
                            </option>
                            {selectedReg?.districts.map((d, index) => (
                                <option 
                                    value={d} 
                                    key={index}                                    
                                 >{d}</option>
                            ))}
                        </select>
                    </div>
                 
                    <div className="formGroup">
                        <label htmlFor="">Dealer's Ward/Street/Road</label>
                        <input 
                            type="text" 
                            name='ward' 
                            className='form_group_input'
                            value={ward} 
                            onChange={setForm}
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Contact Person Name</label>
                        <input 
                            type="text" 
                            name='contactName' 
                            value={contactName} 
                            onChange={setForm}
                            className='form_group_input'
                            />
                    </div>
                    <div 
                        className="formGroup"
                            name='mobile' 
                                                    >
                        <label htmlFor="">Contact Person Mobile</label>
                        {inputPhones?.map((phone, index) => (
                            <div className="phoneInput" key={index}>
                                <input 
                                    type='text' 
                                    placeholder="07xx xxx xxx" 
                                    className='form_group_input' 
                                    value={phone.phoneNumber}
                                    onChange={(event) =>handleChangeInput(index, event)}
                                    name='phoneNumber'
                                    />
                                <div className="actionInput">
                                    <button  onClick={handleAddInput}>+</button>
                                    <button  onClick={handleRemoveInput}>-</button>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                    <button className='addBtn' type="submit" onClick={handleSaveSupplier}>Save Supplier</button>
  
        </form>
      
    </div>
  )
}

export default AddSupplierForm
