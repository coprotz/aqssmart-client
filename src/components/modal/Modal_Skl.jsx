import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { appSkills } from '../career/appSkills';
import './modal.css'
import { useForm } from "react-hook-form";
// import { useForm } from 'react-hooks-helper'
import { useDispatch } from 'react-redux'
import { addSkill } from '../../redux/slices/skills/skillsSlice';
import { editUser } from '../../redux/slices/users/verifyUserSlice';

const defaultData = {
    skills: ''

}

const Modal_Skl = ({ setShowModal_Skl, showModal_Skl, user, setFeedback }) => {


    const [skills, setSkills] = useState([])

    useEffect(() => {
        setSkills(appSkills)
    }, [])



    const dispatch = useDispatch();



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




    const saveSkill = (e) => {
        e.preventDefault()

        const newSkill = {
            user: user._id,
            skills: selectedSkills
        }


        try {
            dispatch(editUser(newSkill))

        } catch (error) {
            dispatch(editUser())

        };
        console.log(newSkill)
        setShowModal_Skl(!showModal_Skl)
        setFeedback('success')
        const timer = setTimeout(() => {
            setFeedback('')
        }, 5000);
        return () => clearTimeout(timer)
    }



    return (
        <div className="modal_wrapper">
            <div className="modal_user_edit">
                <button className='close_modal' onClick={() => setShowModal_Skl(null)}><AiOutlineClose /></button>
                <div className="modal__inner">
                    <h2>{showModal_Skl !== true ? 'Edit Applicant Skills' : 'Add Applicant Skills'}</h2>
                    <form onSubmit={saveSkill}>

                        <div className="formGroup">
                            <label htmlFor="">SKILLS</label>
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
                        <button
                            className='modal_close_btn'
                            type='submit'
                            onClick={saveSkill}
                        >{showModal_Skl !== true ? 'EDIT' : 'ADD'}</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Modal_Skl
