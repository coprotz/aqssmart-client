import React from 'react'
import ReactPlayer from 'react-player'
import {motion} from 'framer-motion'
import { careers } from '../careers'
import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Job from '../../images/job1.jpg'




const CareerInvite = ({next}) => {
  const [activeCareer, setActiveCareer] = useState(null)

  // console.log(activeCareer)
  return (
    <div className='careers_invite'>
        <div className="career_1">
          <h1 className='career_title'>Let's Work Together</h1>
        </div>
        <div className="career_2">   
        <motion.div initial={{ x: '-100vw'}}
          animate={{x:0}} className="career_wrapper">         
            <div className="career_3"> 
              <div>
                <button className='career_top_btn btn_1'></button>
                <button className='career_top_btn btn_2'></button>
                <button className='career_top_btn btn_3'></button>
              </div>             
              <h2 className='sub_title_1'>
                {activeCareer ? 
                <button onClick={() => setActiveCareer(null)} className='back_btn hideTop'><AiOutlineArrowLeft/></button> : null}
                Available Position
              </h2>
              <div className="career_3_1">
                {careers.map((career) => (
                  <h3 key={career.id} onClick={() => setActiveCareer(career)}>{career.name}</h3>
                ))}
                
              </div>
              {activeCareer ? 
              (<>
                <motion.div initial={{ y: '-100vw'}}
                  animate={{y:0}}
                  className="career_features">
                  <h3>Features</h3>                  
                    {activeCareer?.features.map((f, index) => (
                      <ul key={index}>
                        <li>{f}</li>
                      </ul> 
                    ))}          
                </motion.div>

                <motion.div initial={{ x: '-100vw'}}
                  animate={{x:0}}
                  className="slogan">
                  <h1 ng-bind-html-unsafe="activeCareer.slogan">{activeCareer?.slogan}</h1>
                </motion.div>
                <motion.div initial={{ x: '-100vw'}}
                  animate={{x:0}} 
                  className="career_video">
                  <ReactPlayer
                    url={activeCareer?.url}
                    width='100%'
                    height='100%'
                    controls={true} 
                  />
                
                </motion.div>
              </>) : null }
              
            </div>
            {activeCareer ? (
            <motion.div initial={{ x: '-100vw'}}
            animate={{x:0}}  className="career_4">
                <div className="job_title_wrapper">
                 
                    <button onClick={() => setActiveCareer(null)} className='back_btn hideDown'><AiOutlineArrowLeft/></button> 
              
                  <h2 className='job_title'>{activeCareer?.name}</h2>
                </div>
                
                <h3>Breafly about the Position</h3>
                <p>{activeCareer?.about}</p>        
                <button 
                    className='career_btn'
                    onClick={() => {next()}}
                    >Apply Now</button>
            </motion.div>) 
            
            : 

            <motion.div initial={{ x: '-100vw'}}
              animate={{x:0}} className='job_img'>
              <img src={Job} alt="" />
            </motion.div>
            }         
          </motion.div>
           </div>
    </div>
  )
}

export default CareerInvite
