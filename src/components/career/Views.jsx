import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { signupUser } from '../../redux/slices/users/authUserSlice';
import { useSelector, useDispatch } from 'react-redux'


const Views = ({ go, next, previous, formData, setForm }) => {

    const {
        position,
        username,
        phone,
        firstname,
        lastname,
        age,
        sex,
        region,
        district,
        street,
        education,
        english,
        computer,
        emploStatus,
        email,
        } = formData;


    const dispatch = useDispatch();

    const { status, error, signupStatus } = useSelector((state) => state.authUser)
    const message = useSelector((state) => state?.authUser?.user?.message) 
 

    console.log('error',error)
    console.log('message',message)

    const Submit = async (e) => {
        e.preventDefault();

        const user = {
            position: position,
            username: username,
            phone: phone,
            email: email,
            firstname: firstname,
            lastname: lastname,
            age: age,
            sex: sex,
            region: region,
            district: district,
            street: street,
            education: education,
            emploStatus: emploStatus,
            computer: computer,
            english: english,
        }
        console.log(user)
        try {
            dispatch(signupUser(user))

        } catch (err) {
            dispatch(signupUser())
        }
        if(signupStatus==='success' ){
             next();
        }
       

    }

    const [terms, setTerms] = useState(false)


    return (
        <div className='person_detail'>
            <div className="person_top">
                <h2>Preview Inputs</h2>
                {error? 
                    <div className="error">{error}</div> 
                : null}
            </div>
            <div className="cover_1">  
            <motion.div initial={{ x: '-100vw' }}
                animate={{ x: 0 }} className="person_wrapper">
                <div className="login__inner__wrapper">
                    <form>
                        <div className="preview__wrapper">
                            <div className="viewInputs">
                                <strong>Position:</strong>
                                <input
                                    type="text"
                                    name="position"
                                    value={position}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Mobile Number:</strong>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={phone}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Username:</strong>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Name:</strong>
                                <div className="name_input">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value={firstname}
                                        className="input__fld"
                                        onChange={setForm}
                                    />,
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={lastname}
                                        className="input__fld"
                                        onChange={setForm}
                                    />
                                </div>
                            </div>

                            <div className="viewInputs">
                                <strong>Sex:</strong>
                                <input
                                    type="text"
                                    name="sex"
                                    value={sex}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Email:</strong>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Age:</strong>
                                <input
                                    type="text"
                                    name="age"
                                    value={age}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Region:</strong>
                                <input
                                    type="text"
                                    name="region"
                                    value={region}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>District:</strong>
                                <input
                                    type="text"
                                    name="district"
                                    value={district}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Street Code Number:</strong>
                                <input
                                    type="text"
                                    name="street"
                                    value={street}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Education:</strong>
                                <input
                                    type="text"
                                    name="education"
                                    value={education}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>English:</strong>
                                <input
                                    type="text"
                                    name="english"
                                    value={english}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Computer:</strong>
                                <input
                                    type="text"
                                    name="computer"
                                    value={computer}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="viewInputs">
                                <strong>Employment Status:</strong>
                                <input
                                    type="text"
                                    name="emploStatus"
                                    value={emploStatus}
                                    className="input__fld"
                                    onChange={setForm}
                                />
                            </div>
                            <div className="submit__btn__wrapper">
                                <div className="btn-check">
                                    <input 
                                        type="checkbox" 
                                        onClick={() => setTerms(!terms)}
                                    />
                                    I accept Terms and Conditions
                                </div>
                            </div>
                        </div>
                        <div className="formSubmit">
                            <button onClick={() => { previous() }}>Previous</button>
                            {!terms ?
                                <button
                                disabled={true}
                                className="disabled"
                                >SEND APPLICATION</button>
                                :       
                                // <button onClick={() => {next()}}>Next</button>
         
                                <button
                                    type="submit"
                                    className="preview__btn"
                                    onClick={Submit}
                                >{status==='pending'? 'Sending...' : 'SEND APPLICATION '}
                                </button>}
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
        </div>
    )
}

export default Views
