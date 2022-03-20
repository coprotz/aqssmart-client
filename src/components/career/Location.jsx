
import {motion} from 'framer-motion'
import { regions } from '../Regions'
import { useState } from 'react'


const Location = ({go, next, previous, formData, setForm, steps}) => {

    const { region, district, street} = formData

    const [regName, setRegName] = useState('')
    const [distName, setDistName] = useState('')

    const handleRegion = (event) => {
        const region = event.target.value
        setRegName(region)
    }
    
    // const handleDistrict = (event) => {
    //     const district = event.target.value;
    //     setDistName(district)
    // }
  


    const selectedReg = regions.find((r) => r.name === region)

  return (
    <div className='person_detail'>
      <div className="progressbar">
        <span className="progres_status" style={{width:'12%'}}></span>
      </div>
      <div className="person_top">       
        <h2 className='title_head'>Region</h2>
      </div> 
      <div className="cover_1">         
      <motion.div initial={{ x: '-100vw'}}
        animate={{x:0}}  className="person_wrapper">
            <div className="formGroup">
              <label htmlFor="">Your Region?</label>
              <select 
                name='region' 
                value={region} 
                id="" 
                onChange={setForm}
                className='form_group_input'
                >                            
                <option value="">--Select Region--</option>
                {regions.map((reg) => (
                    <option 
                        value={reg.name} 
                        key={reg.id} 
                        name='region'     
                        >{reg.name}
                    </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">
              <label htmlFor="">Your District?</label>
              <select 
                name="district" 
                value={district} 
                id="" 
                onChange={setForm}
                className='form_group_input'
                >
                <option value="">--Select District--</option>
                {selectedReg?.districts.map((d, index) => (
                    <option value={d} key={index} name="district">{d}</option>
                ))}
                </select>
            </div>

            <div className="formGroup">
              <label htmlFor="">Your Street Code Number?</label>
              <input 
                type="text"
                name='street'
                value={street}
                onChange={setForm}
                required
                placeholder='Your Street'
                className='form_group_input'
              />
            </div>          

        </motion.div>
        <div className="form__btn__action">
          <button onClick={() => {previous()}}>Previous</button>
          {region === '' || district === '' || street === '' ?
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

export default Location
