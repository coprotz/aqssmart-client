import React, {useEffect} from 'react'
import { useState } from 'react'
import { regions } from '../Regions'
import { AiOutlineClose } from "react-icons/ai";
import { appSkills } from '../career/appSkills';
import { laborSkills } from '../laborSkills';
import { useForm } from 'react-hooks-helper'
import { useSelector, useDispatch } from 'react-redux'
import { addLabor } from '../../redux/slices/labors/laborsSlice';

const defaultData = {
    firstname: '',
    lastname: '',   
    region:'',
    district:'',
    ward: ''
}


const AddLaborForm = ({addNew, setAddNew, user}) => {

    const dispatch = useDispatch();  

    const [skills, setSkills] = useState([])


    useEffect(() => {
        setSkills(laborSkills)
    }, [])

    const [formData, setForm] = useForm(defaultData)

    const { firstname, lastname, region,  district, ward, avatar } = formData;

    const { error, status, addStatus } = useSelector((state) => state.labors)
  
    const selectedReg = regions.find((r) => r.name === region)

 

    const [inputPhones, setInputPhones] = useState([
        { phoneNumber: ''},
    ]) 
  

    const handleChangeInput = (index, event) => {
        const values = [...inputPhones];
        values[index][event.target.name] = event.target.value;
        setInputPhones(values)

    } 

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'allSelect') {
            let tempSkill = skills.map((skill) => {
                return { ...skill, isChecked: checked }
            })
            setSkills(tempSkill)
        } else {
            let tempSkill = skills.map(skill =>
                skill.name === name ? { ...skill, isChecked: checked } : skill
            );
            setSkills(tempSkill)
        }

    }

    
    const selected = skills.filter((skill) => skill?.isChecked === true)

    const selectedSkills = selected.map((s) => s.name)

    console.log('seleSkills', selectedSkills)

  // console.log(laborSkills.response)


    const handleSaveLabour = (e) => {
        e.preventDefault();  
        
        const newLabor = {
            user: user._id,
            firstname: firstname,
            lastname: lastname,
            skills:selectedSkills,
            mobile: inputPhones,
            region: region,
            district: district,
            ward: ward,
            avatar: avatar
        }

        try {
            dispatch(addLabor(newLabor))
        } catch (error) {
            dispatch(addLabor())
        }

        console.log(newLabor)
        


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
        
         <form className="addForm" action=""  onSubmit={handleSaveLabour}>
                    <h2>Add Labourer</h2> 
                    {error? <div className='error'>{error}</div> : null} 
                    <button className='closeForm_1' onClick={() => setAddNew(!addNew)}><AiOutlineClose/></button>
                   
                    <div className="formGroup">
                        <label htmlFor="">Firstname</label>
                        <input 
                            type="text" 
                            name='firstname' 
                            value={firstname} 
                            onChange={setForm}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Lastname</label>
                        <input 
                            type="text" 
                            name='lastname' 
                            value={lastname} 
                            onChange={setForm}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Labour's Region</label>
                        <select 
                            name="region"
                            value={region}
                            onChange={setForm}>                            
                            <option value="">--Select Region--</option>
                            {regions.map((reg) => (
                                <option 
                                    value={reg.name} 
                                    key={reg.id}                                      
                                    >{reg.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Labour's District</label>
                        <select 
                            name="district"
                            value={district}
                            onChange={setForm}>
                            <option value="">--Select District--</option>
                            {selectedReg?.districts.map((d, index) => (
                                <option 
                                    value={d} 
                                    key={index} 
                                >{d}</option>
                            ))}
                        </select>
                    </div>
                 
                    <div className="formGroup">
                        <label htmlFor="">Labour's Ward/Street/Road</label>
                        <input 
                            type="text" 
                            name='ward' 
                            value={ward} 
                            onChange={setForm}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="">Skills</label>
                        <div className="skills_1 app_skills" >
                                <div className='skills_2 app_input_skill'>
                                    <input
                                        type="checkbox"
                                        name="allSelect"
                                        onChange={handleChange}
                                        checked={skills.filter(skill => skill?.isChecked !== true).length < 1}
                                    />
                                    <label htmlFor="select All" className='app_label'>Select All</label>
                                </div>
                                {skills.map((skill, i) => (
                                    <div className='skills_2 app_input_skill' key={i} >
                                        <input
                                            // id={`custom-checkbox-${index}`}
                                            type="checkbox"
                                            name={skill.name}
                                            onChange={handleChange}
                                            checked={skill?.isChecked || false}

                                        />
                                        <label htmlFor={`custom-checkbox-${i}`} className='app_label'>{skill.name}</label>
                                    </div>

                                ))}

                            </div>                      
                    </div>
                  
                    <div className="formGroup">
                        <label htmlFor="">Mobile Numbers</label>
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
                                    <button onClick={handleAddInput}>+</button>
                                    <button onClick={handleRemoveInput}>-</button>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                    <button 
                        className='addBtn' 
                        onClick={handleSaveLabour}
                        >Save Labour</button>


        </form>
      
    </div>
  )
}

export default AddLaborForm
