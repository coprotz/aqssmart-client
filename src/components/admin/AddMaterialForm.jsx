import React from 'react'
import { useState } from 'react'
import { materials } from '../materials'
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hooks-helper'
import { addMaterial } from '../../redux/slices/materials/materialsSlice';

const defaultData = {
    category: "",
    sub:"",
    size:"",
    unit:"",    
    price: "",
    materialName: "",
    supplier: ""
}

const AddMaterialForm = ({addNew, setAddNew, user}) => {

    const dispatch = useDispatch();

    const [formData, setForm] = useForm(defaultData)
    const { materialName, category, sub, unit, size, price, supplier } = formData;
    const suppliers = useSelector((state) => state.suppliers.suppliers)
    


    const selectedSubcat = materials.find((r) => r.name === category)

    const { error, status, addStatus } = useSelector((state) => state.materials)
 
   
    const handleSaveMaterial = (e) => {
        e.preventDefault();
 
        
        const newMaterial = {
            user: user._id,
            supplier: supplier,
            materialName: materialName,
            size: size,
            unit: unit,
            price: price,
            category: category,
            sub: sub
        }

        try {
            dispatch(addMaterial(newMaterial))
        } catch (error) {
            dispatch(addMaterial())
        }

        // console.log('material', newMaterial)
  

    }


  return (
    <div className='supplierFormAdd'>
    <form action="" className="addForm" onSubmit={handleSaveMaterial}>
               <h2>Add Material</h2>
               {error ? <div className='error'>{error}</div> : null} 
               <button className='closeForm_1' onClick={() => setAddNew(!addNew)}><AiOutlineClose/></button>
               <div className="formGroup">
                    <label htmlFor="">Supplier</label>
                    <select 
                        name="supplier"
                        value={supplier}
                        onChange={setForm}>
                        <option value="">--Select Supplier--</option>
                        {suppliers?.map((s) => (
                            <option value={s._id} key={s._id}>{s.supplierName}</option>
                        ))}
                    </select>
                 
                </div>
               <div className="formGroup">
                   <label htmlFor="">Category</label>
                   <select 
                        name="category"
                        value={category}
                        onChange={setForm}>                            
                       <option value="">--Select Category--</option>
                       {materials.map((reg) => (
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
                       <option value="">--Select SubCategory--</option>
                       {selectedSubcat?.subs.map((d, index) => (
                           <option value={d} key={index}>{d}</option>
                       ))}
                   </select>
               </div>
            
               <div className="formGroup">
                   <label htmlFor="">Material Name</label>
                   <input 
                       type="text" 
                       name='materialName' 
                       value={materialName} 
                       onChange={setForm}/>
               </div>
               <div className="formGroup">
                   <label htmlFor="">Size</label>
                   <input 
                       type="text" 
                       name='size' 
                       value={size} 
                       onChange={setForm}/>
               </div>
               <div className="formGroup">
                    <label htmlFor="">Unit</label>
                    <select 
                        name="unit"
                        value={unit}
                        onChange={setForm}>
                        <option value="">--Select Unit--</option>
                        <option value='kg'>kg</option>
                        <option value='ton'>ton</option>
                        <option value='sqm'>sqm</option>
                        <option value='cum'>cum</option>
                        <option value='m'>m</option>
                        <option value='m'>mm</option>
                        <option value='m'>cm</option>
                        <option value='pc'>pc</option>
                        <option value='bucket'>bucket</option>
                        <option value='tin'>tin</option>

                    </select>
                </div>
                <div className="formGroup">
                   <label htmlFor="">Price</label>
                   <input 
                       type="text" 
                       name='price' 
                       value={price} 
                       onChange={setForm}/>
               </div>              
             
               <button 
                   className='addBtn' 
                   onClick={handleSaveMaterial}
                   >{status==='pending'? 'Saving...' : 'Save Material'}</button>


   </form>
 
</div>
  )
}

export default AddMaterialForm
