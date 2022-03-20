import React from 'react'
import { motion } from 'framer-motion'

const Education = ({ go, next, previous, formData, setForm }) => {
  const { education, emploStatus, computer, english } = formData


  return (
    <div className='person_detail'>
      <div className="person_top">
        <h2>Education and Employment</h2>
      </div>
      <div className="cover_1">  
      <motion.div initial={{ x: '-100vw' }}
        animate={{ x: 0 }} className="person_wrapper">
        <div className="formGroup"
          value={education}
          onChange={setForm}
          required>
          <label htmlFor="">Your Education?</label>
          <div>
            <div className="btn-radio"><input type="radio" name="education" value="Olevel" required />Olevel </div>
            <div className="btn-radio"><input type="radio" name="education" value="Alevel" required />Alevel</div>
            <div className="btn-radio"><input type="radio" name="education" value="Certificate" required />Certificate</div>
            <div className="btn-radio"><input type="radio" name="education" value="Diploma" required />Diploma</div>
            <div className="btn-radio"><input type="radio" name="education" value="Bachelor" required />Bachelor</div>
          </div>
        </div>
        <div className="formGroup"
          value={computer}
          onChange={setForm}
          required>
          <label htmlFor="">Your Computer Knowledge?</label>
          <div>
            <div className="btn-radio"><input type="radio" name="computer" value="Basic" required />Basic </div>
            <div className="btn-radio"><input type="radio" name="computer" value="Intermediate" required />Intermediate</div>
            <div className="btn-radio"><input type="radio" name="computer" value="Advance" required />Advance</div>
          </div>
        </div>
        <div className="formGroup"
          value={english}
          onChange={setForm}
          required>
          <label htmlFor="">Your English Proffeciency?</label>
          <div>
            <div className="btn-radio"><input type="radio" name="english" value="Bignner" required />Bignner </div>
            <div className="btn-radio"><input type="radio" name="english" value="Intermediate" required />Intermediate</div>
            <div className="btn-radio"><input type="radio" name="english" value="Fluent" required />Fluent</div>
          </div>
        </div>
        <div className="formGroup"
          value={emploStatus}
          onChange={setForm}
          required>
          <label htmlFor="">Your Employment Status?</label>
          <div>
            <div className="btn-radio"><input type="radio" name="emploStatus" value="Employed" required />Employed</div>
            <div className="btn-radio"><input type="radio" name="emploStatus" value="Business" required />Business</div>
            <div className="btn-radio"><input type="radio" name="emploStatus" value="Student" required />Student</div>
            <div className="btn-radio"><input type="radio" name="emploStatus" value="Unemployed" required />Unemployed</div>
            <div className="btn-radio"><input type="radio" name="emploStatus" value="Fleerancer" required />Fleerancer</div>
          </div>
        </div>

      </motion.div>
      <div className="form__btn__action">
        <button onClick={() => { previous() }}>Previous</button>
        {education === '' || computer === '' || english === '' || emploStatus === '' ?
            <button
            disabled={true}
            className="disabled"
             >Next</button>
            :       
            <button onClick={() => {next()}}>Next</button>
          }
      </div>
      </div>
    </div>
  )
}

export default Education
