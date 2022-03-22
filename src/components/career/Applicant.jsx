import React, { useEffect } from 'react'
import TopBar from '../topbar/TopBar'
import Profile from '../../images/profile_img.png'
import { AiOutlineEdit, AiOutlineDownload, AiOutlineUpload, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { experiences } from '.././applicants'
import Modal_Info from '../modal/Modal_Info';
import Modal_Exp from '../modal/Modal_Exp';
import Modal_Skl from '../modal/Modal_Skl';
import Modal_Cert from '../modal/Modal_Cert';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCert } from '../../redux/slices/certificates/certsSlice';
import Modal_Secret from '../modal/Modal_Secret';

import { useForm } from 'react-hooks-helper'
import { updateApplicant } from '../../redux/slices/applicants/applicantsSlice';
import { editUser } from '../../redux/slices/users/verifyUserSlice';
import Modal_Location from '../modal/Modal_Location';
import Modal_Edu from '../modal/Modal_Edu'
// import { set } from 'react-hook-form';
import { deleteExperience } from '../../redux/slices/experiences/experiencesSlices'
import axios from 'axios';


const defaultData = { bio: '' }



const Applicant = ({ user, certs }) => {

    const experiences = useSelector((state) => state.experiences.experiences)
    const [formData, setForm] = useForm(defaultData)
    const { bio } = formData

    // const id = user?._id
    

    const { error, status, editUserStatus } = useSelector((state) => state.verifyUser)
    const [feedback, setFeedback] = useState('')

    // useEffect(() => {
    //     setFeedback(editUserStatus)
    // }, [])

    const updateAppBio = (e) => {
        e.preventDefault()

        const updateBio = {
            user: user?._id,
            bio: bio
        }

        try {
            dispatch(editUser(updateBio))
        } catch (error) {
            dispatch(editUser())
        }
        setFeedback('success')
        const timer = setTimeout(() => {
            setFeedback('')
        }, 5000);
        return () => clearTimeout(timer)
    }


    const { appId } = useParams();
    const [file, setFile] = useState(null)

    const dispatch = useDispatch()


    // const handleImageUpload = async (e) => {
    //     if (file) {
    //         const data = new FormData();
    //         const filename = file.name;

    //         data.append('name', filename)
    //         data.append('file', file)

    //         user.file = filename;
    //     }
    // }

    const uploadDoc = async (e) => {
        e.preventDefault()

        if(file){
            const data = new FormData();
            const fileName = file.name;
            data.append("name", fileName);
            data.append("file", file);

            // contract = fileName;

            console.log(fileName)

            try {
                await axios.post("https://aqssmart.herokuapp.com/api/upload", data)
            } catch (error) {
                console.log(error)
            }
        }

        const uploadedContract = {
            user: user._id,
            contract: file.name
        }

        try {
            dispatch(editUser(uploadedContract))
        } catch (error) {
            dispatch(editUser())
        }
    }

   

    // console.log('appcerts',appCerts)


    const [showModal_Info, setShowModal_Info] = useState(null)
    const [modal_Exp, setModal_Exp] = useState(null)
    const [showModal_Skl, setShowModal_Skl] = useState(null)
    const [modal_Crt, setModal_Crt] = useState(null)
    const [modalBio, setModalBio] = useState('')
    const [sec, setSecret] = useState(null)
    const [modal_Loc, setModal_Loc] = useState(null)
    const [modal_Edu, setModal_Edu] = useState(null)

    // console.log('certs',certs.length)

    // const uploadContract = async (e) => {
    //     e.preventDefault()
    // }

    return (
        <div className="pricingWrapper applicant">
            <TopBar
                user={user}
                showModal_Info={showModal_Info}
                setShowModal_Info={setShowModal_Info}
                sec={sec}
                setSecret={setSecret}
                modal_Loc={modal_Loc}
                setModal_Loc={setModal_Loc}
                setFeedback={setFeedback}
                setModal_Edu={setModal_Edu}

            />
            <div className="applicant_inner">
                <div className="applicant_1">
                    <div className="applicant_image">
                        <img src={Profile} alt="" />
                    </div>
                    <button>Change Image</button>
                    <div className="applicant_name">{user?.firstname} {user?.lastname}</div>
                    <div className="applicant_bio">
                        {modalBio ?
                            <form action="" onSubmit={updateAppBio}>
                                <textarea 
                                    // id="" rows="10" 
                                    placeholder={`${user.bio}`}
                                    name='bio' 
                                    value={bio} 
                                    onChange={setForm} 
                                    className='note_textarea'
                                ></textarea>
                                <div className="bio_btn">
                                    <button type='submit'>Add Notes</button>
                                    <button onClick={() => setModalBio(null)} className='bio_clear_btn'>Clear</button>
                                </div>

                            </form>
                            : 
                            <div>
                                <p>{user ? user.bio : 'Add WElcome Note'}</p>
                                <button onClick={() => setModalBio(user)}>{user?.bio === '' ? 'Add Note' : <AiOutlineEdit />}</button>
                            </div>
                            }
                    </div>
                    <div className="welcom_note">
                       
                    </div>
                </div>
                <div className="applicant_2">
                    <div className="applicant_detail">
                        <div className="detail_4">
                            <h3>Basic Information</h3>
                        </div>

                        <div className="details_wrapper">

                            <div className="detail_1">
                                <div className="detail_1_1">
                                    <span>AGE</span>
                                    <h4>{user?.age}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>LOCATION</span>
                                    <h4>{user?.street} - {user?.district} - {user?.region}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>GENDER</span>
                                    <h4>{user?.sex}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>EMAIL</span>
                                    <h4>{user?.email}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>EDUCATION</span>
                                    <h4>{user?.education}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>MOBILE NUMBER</span>
                                    <h4>{user?.phone}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>COMPUTER KNOWLEDGE</span>
                                    <h4>{user?.computer}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>ENGLISH KNOWLEDGE</span>
                                    <h4>{user?.english}</h4>
                                </div>
                            </div>
                            {showModal_Info ?
                                <Modal_Info
                                    user={user}
                                    showModal_Info={showModal_Info}
                                    setShowModal_Info={setShowModal_Info}
                                    editUserStatus={editUserStatus}
                                />

                                : null}
                            {sec ?
                                <Modal_Secret sec={sec} setSecret={setSecret} user={user} setFeedback={setFeedback} />
                                : null}
                            {modal_Loc ?
                                <Modal_Location modal_Loc={modal_Loc} setModal_Loc={setModal_Loc} user={user} setFeedback={setFeedback} />
                            : null}
                            {modal_Edu ?
                                <Modal_Edu modal_Edu={modal_Edu} setModal_Edu={setModal_Edu} user={user} setFeedback={setFeedback} />
                            : null}
                            {modal_Exp ?
                                <Modal_Exp setModal_Exp={setModal_Exp} modal_Exp={modal_Exp} user={user} setFeedback={setFeedback} />
                            : null}
                            <div className="detail_2">
                                <div className="detail_1_1">
                                    <span>JOB APPLIED</span>
                                    <h4>{user?.position}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>APPLICATION STATUS</span>
                                    <h4>{user?.appliStatus}</h4>
                                </div>
                                <div className="detail_1_1">
                                    <span>CONTRACT DOC</span>
                                    {user?.contract === 'NA' ? 'Not Available' :
                                        (<a
                                            href={`https://objective-hamilton-9df92b.netlify.app/${user?.contract}`}
                                            className='download_contract'
                                            target='_blank' 
                                            // className='download_c'
                                        ><AiOutlineDownload />Download Contract
                                        </a>)}
                                </div>
                                <form onSubmit={uploadDoc}>
                                    <div className="detail_1_1">
                                        {user?.appliStatus === 'Approved' ?
                                            <>
                                                <label htmlFor="file">
                                                    <span className='doc_upload'><AiOutlineUpload />Upload signed Contract</span>
                                                    <input
                                                        type="file"
                                                        name='file'
                                                        id='file'
                                                        accept='.png, .jpg, .jpeg, .pdf'
                                                        style={{ display: 'none' }}
                                                        onChange={(e) => setFile(e.target.files[0])}
                                                    />
                                                </label>
                                                {file ?
                                                    <div className='upload_doc'>
                                                        <span>{file?.name}</span>
                                                        <button
                                                            type='submit'
                                                        // onClick={uploadDoc}
                                                            className='submit_upload'
                                                            >{status === 'pending' ? 'Uploading...' : 'UPLOAD'}
                                                        </button> 

                                                    </div>
                                                
                                                : null}
                                            </>
                                            :
                                            <button className='disabled'>
                                                Upload signed Contract
                                            </button>}
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="applicant_detail">
                        <div className="detail_4">
                            <h3>Experience</h3>
                            <button className='add_cert_btn' onClick={() => setModal_Exp(true)}><MdAdd /></button>
                            {/* <button className='add_cert_btn' onClick={() => alert('true')}><MdAdd/></button> */}
                        </div>
                        <div className="applicant_exp">
                            {experiences?.filter((exp) => exp?.user === user._id).map((u) => (
                                <div className="experience_1" key={u._id}>
                                    <div className="exp_1">
                                        <h1>{u.company[0]}</h1>
                                    </div>
                                    <div className="exp_2">
                                        <h3>
                                            {u.company}
                                            <div className="company_action">
                                                <AiOutlineEdit onClick={() => setModal_Exp(u)} className='svg_btn' />
                                                <AiOutlineDelete className='svg_btn' onClick={() => dispatch(deleteExperience(u._id))} />
                                            </div>
                                        </h3>
                                        <h4>{u.position}</h4>
                                        <span>{u.yearStart} - {u.yearEnd}</span>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                    <div className="applicant_detail">
                        <div className="detail_4">
                            <h3>Skills</h3>

                            <button className='add_cert_btn' onClick={() => setShowModal_Skl(true)}><MdAdd /></button>
                        </div>
                        <div className="applicant_skills">
                            <div className="app_skills_1">
                                {user?.skills?.map((s, index) => (
                                    <span key={index} >{s}</span>
                                ))}
                                <AiOutlineEdit className='svg_btn' onClick={() => setShowModal_Skl(true)} />
                            </div>
                            {showModal_Skl ?
                                <Modal_Skl
                                    setShowModal_Skl={setShowModal_Skl}
                                    showModal_Skl={showModal_Skl}
                                    user={user}
                                    setFeedback={setFeedback}
                                /> : null}
                            <div className="app_skills_2"></div>
                        </div>
                    </div>
                    <div className="applicant_detail">
                        <div className="detail_4">
                            <h3>Certification</h3>
                            <button className='add_cert_btn' onClick={() => setModal_Crt(true)}><MdAdd /></button>
                        </div>
                        <div className="applicant_skills">
                            <div className="app_skills_1">
                                <table className="table">
                                    <thead>
                                        <th>Year Attended</th>
                                        <th>College Attended</th>
                                        <th>Certificates Obtained</th>
                                        <th>Action</th>
                                    </thead>

                                    <tbody>
                                        {certs.filter((cert) => cert?.user === user._id).map((c) => (
                                            <tr key={c._id}>
                                                <td data-label='Year Attended'>{c.yearStart} - {c.yearEnd}</td>
                                                <td data-label='College Attended'>{c.college}</td>
                                                <td data-label='Certificates Obtained'>{c.certName}</td>
                                                <td data-label='Action'>
                                                    <AiOutlineEdit className='svg_btn' onClick={() => setModal_Crt(c)} />
                                                    <AiOutlineDelete className='svg_btn' onClick={() => dispatch(deleteCert(c._id))} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {modal_Crt ?
                                    <Modal_Cert modal_Crt={modal_Crt} setModal_Crt={setModal_Crt} user={user} />

                                    : null}
                            </div>
                            <div className="app_skills_2"></div>
                        </div>
                    </div>
                    {/* <div className="applicant_detail">
                   
                    <div className="detail_4">
                        <h3>Hobbies</h3>
                        <AiOutlineEdit/>
                    </div>
                </div> */}


                </div>
            </div>
            {feedback ?
                <div className='feedback'>
                    <h4>Success</h4>
                    {/* {editUserStatus} */}
                    <AiOutlineClose onClick={() => setFeedback('')} />
                </div>
                : null}
        </div>
    )
}

export default Applicant
