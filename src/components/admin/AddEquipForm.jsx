import React from 'react'
import { useState } from 'react'
import { materials } from '../materials'
import { equips } from '../equipment';
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hooks-helper'
import { addEquip } from '../../redux/slices/equips/equipsSlice';

const defaultData = {
    category: "",
    sub:"",
    capacity:"",
    unit:"",
    duration:"",
    hiringRate: "",
    equipName: "",
    dealer: ""
}

const AddEquipForm = ({addNew, setAddNew, user}) => {
  
    const dispatch = useDispatch();

    const [formData, setForm] = useForm(defaultData)
    const { equipName, category, sub, capacity, unit, duration, hiringRate, dealer } = formData;
    const dealers = useSelector((state) => state.dealers.dealers)


    const selectedSubcat = equips.find((r) => r.name === category)

    const { error, status } = useSelector((state) => state.equips)
 
  


    const handleSaveEquipment = (e) => {
        e.preventDefault();    

        const newEquip = {
            user: user._id,
            dealer: dealer,
            equipName: equipName,
            category: category,
            capacity: capacity,
            hiringRate: hiringRate,
            unit: unit,
            duration: duration,
            sub: sub
        }

        try {
            dispatch(addEquip(newEquip))
        } catch (error) {
            dispatch(addEquip())
        }
    // console.log(newEquip)
} 

  return (
    <div className='supplierFormAdd'>
    <form className="addForm" onSubmit={handleSaveEquipment}>
               <h2>Add Equipment</h2>
               {error? <div className='error'>{error}</div> : null} 
               <button className='closeForm_1' onClick={() => setAddNew(!addNew)}><AiOutlineClose/></button>
               <div className="formGroup">
                    <label htmlFor="">Supplier</label>
                    <select 
                        name="dealer" 
                        value={dealer}                     
                        onChange={setForm}
                        >
                        <option>--Select Supplier--</option>
                        {dealers.map((d) => (
                            <option value={d._id} key={d._id}>{d.dealerName}</option>
                        ))}
                        

                    </select>
                 
                </div>
               <div className="formGroup">
                   <label htmlFor="">Category</label>
                   <select 
                    name="category"
                    value={category}
                    onChange={setForm}>                            
                       <option>--Select Category--</option>
                       {equips.map((reg) => (
                           <option 
                               value={reg.name} 
                               key={reg.id}                                 
                               >{reg.name}</option>
                       ))}
                   </select>
               </div>
               <div className="formGroup">
                   <label htmlFor="">Sub Category</label>
                   <select 
                    name="sub"
                    value={sub}
                    onChange={setForm}>
                       <option >--Select SubCategory--</option>
                       {selectedSubcat?.subs.map((d, index) => (
                           <option value={d} key={index} name="district" >{d}</option>
                       ))}
                   </select>
               </div>
            
               <div className="formGroup">
                   <label htmlFor="">Equipment Name</label>
                   <input 
                       type="text" 
                       name='equipName' 
                       value={equipName} 
                       onChange={setForm}/>
               </div>
               <div className="formGroup">
                   <label htmlFor="">Capacity</label>
                   <input 
                       type="text" 
                       name='capacity' 
                       value={capacity} 
                       onChange={setForm}/>
               </div>
               <div className="formGroup">
                    <label htmlFor="">Unit</label>
                    <select 
                        name="unit"
                        value={unit} 
                        onChange={setForm}
                        >
                        <option value="">--Select Unit--</option>
                        <option value='kg'>kg</option>
                        <option value='ton'>ton</option>
                        <option value='sqm'>sqm</option>
                        <option value='cum'>cum</option>
                        <option value='m'>m</option>
                        <option value='pc'>pc</option>
                        <option value='bucket'>bucket</option>
                        <option value='tin'>tin</option>
                        <option value='kva'>kva</option>
                        <option value='mhz'>mhz</option>

                    </select>
                </div>
                <div className="formGroup">
                   <label htmlFor="">Hiring Cost</label>
                   <input 
                       type="text" 
                       name='hiringRate' 
                       value={hiringRate} 
                       onChange={setForm}/>
               </div>
               <div className="formGroup">
                    <label htmlFor="">Duration</label>
                    <select 
                        name="duration"
                        value={duration}
                        onChange={setForm}>
                        <option value="">--Select Duration--</option>
                        <option value="hour">hour</option>
                        <option value="day">day</option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                    </select>
                 
                </div>
                           
               <button 
                   className='addBtn' 
                   type='submit'
                   >{status === 'pending'? 'Saving...' : 'Save Equipment'}</button>


   </form>
 
</div>
  )
}

export default AddEquipForm
