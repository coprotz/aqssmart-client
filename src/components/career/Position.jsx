import React from 'react'
import {motion} from 'framer-motion'

const Position = ({go, next, previous, formData, setForm}) => {
    const { position} = formData
  return (
    <div className='person_detail'>
      <div className="person_top">       
        <h2>Your application Position?</h2>
      </div> 
      <div className="cover_1">      
      <motion.div initial={{ x: '-100vw'}}
        animate={{x:0}}  className="person_wrapper ">
            <div className="formGroup">
              <label htmlFor="">Your application Position?</label>
              <select 
                name='position' 
                value={position} id="" onChange={setForm}
                className='form_group_input'
                >                            
                <option value="">--Select Position--</option>
                <option value="Data Collection Freelancer">Data Collection Freelancer</option>
             
            </select>
            </div>       

        </motion.div>
        <div className="form__btn__action">
          <button onClick={() => {previous()}}>Previous</button>
          {position === '--Select Position--'?
            <button
            disabled={true}
            className="disabled"
             >Next</button>
            :
          <button onClick={() => {next()}}>Next</button>}
        </div>
        </div> 
    </div>
  )
  
}

export default Position
