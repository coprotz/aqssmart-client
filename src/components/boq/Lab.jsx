import React from 'react'
import Calc from '../../images/aqs.png'
import { useState } from 'react';
import { FaAngleLeft, FaWindowClose} from "react-icons/fa";



const Lab = ({activePage, setActivePage}) => {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <div className='inner__wrapper'>
       <div className="buildTop">
          <div className="build__left">
            <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
            <h2>{activePage?.name}</h2>
          </div>
          <div className="build__right"></div>
        </div>
        <div className="page__below"> 
          <div className="items__list">
            {/* {labors.map((lab) => (
              <div className={`${activeItem?.id === lab.id ? 'active__card' : 'lab__card'}`} key={lab?.id} onClick={() => setActiveItem(lab)}>            
                  <div>{lab?.name}</div>                       
              </div>
            ))}  */}
          </div>
          <div className="selected__item">
              {activeItem ? (
              <div className='build__form'>
                <div className="close__build" onClick={() => setActiveItem(null)}><FaWindowClose/></div>
                <div className="build__title">
                  <h1>Labour Charge for </h1>
                  <h3 className='title__active'>{activeItem?.name}</h3>
                  
                </div>
                <div className="build__body">                   
                  
                    <div className="group__input">
                        <h3 className='rate'>Rate (TZS): {activeItem.rate}<small>/{activeItem.unit}</small></h3>               
     
                        <div className="dealers">
                          <h4>Labourers: </h4>
                          <div className='dealers__list'>
                            {activeItem.labours.map((d) => (<span>{d}</span>))}
                          </div>
                        </div>
                        
                        <div className="inputGroup">

                        </div>
                      </div> 
                  
                   
                   
                </div>
               
                
                
              </div>) :
              <img src={Calc} alt=''/>
              }
          </div>
                   
        </div>
    </div>
  )
}

export default Lab
