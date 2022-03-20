import React from 'react'
import { useState } from 'react';
import { FaAngleLeft, FaWindowClose} from "react-icons/fa";
import Calc from '../../images/aqs.png'


const Equip = ({activePage,setActivePage}) => {
  const [activeItem, setActiveItem] = useState(null)
  return (
    <div className='inner__wrapper'>
      <div className="page__top">
          <div className="build__left">
            <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
            <h2>{activePage.name}</h2>
          </div>
         
      </div>
      <div className="page__below"> 
          <div className="items__list">
            {/* {equipments.map((equip) => (
            <div className='items__wrapper'>
              <div className="below__page" key={equip.id}>
                <div className='item__title'>{equip.category}</div>
                <div className="item__types">                
                  {equip.types.map((type) => (
                    <span onClick={() => setActiveItem(type)} key={type.id}>{type.name}</span>
                  ))}
                </div>
              </div>
              
            </div>
            ))}  */}
          </div>
          <div className="selected__item">
              {activeItem ? (
              <div className='build__form'>
                <div className="close__build" onClick={() => setActiveItem(null)}><FaWindowClose/></div>
                <div className="build__title">
                  <h1>Hiring Cost for </h1>
                  <h3>{activeItem.name}</h3>
                  
                </div>
                <div className="build__body">                   
                  
                    <div className="group__input">
                        <h3>Capacity: {activeItem.capacity} - {activeItem.capacity} <small>{activeItem.unit}</small></h3>
                        <h3>Cost per day: {activeItem.min_rate} - {activeItem.max_rate}</h3>
                      
                        <div className="dealers">
                          <h4>Dealers: </h4>
                          <div className='dealers__list'>
                            {activeItem.dealers.map((d) => (<span>{d}</span>))}
                          </div>
                        </div>
                        
                        <div className="inputGroup">

                        </div>
                      </div> 
                  
                   
                   
                </div>
                {/* <div className="res">
                  Your Rate per {activeItem.unit} (TZS): <h3 className="result">{result}</h3>
                </div> */}
                {/* <div className="assupt__wrapper">
                  <h4>Consideration</h4>
                  <div className="haulage">Hualage</div>
                  <div className="haulage">Murram</div>
                </div> */}
                
                
              </div>) :
              <img src={Calc} alt=''/>
              }
          </div>
                   
        </div>
    
    
    </div>
  )
}

export default Equip
