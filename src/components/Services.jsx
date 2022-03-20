import React from 'react'
import TopBar from './topbar/TopBar'
import { useStep } from 'react-hooks-helper'
import Menu from './Menu'
import { useState } from 'react'
import Pages from './Pages'
import { items, labors, equipments, materials } from './data'
import './pages.css'
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronDown, BsChevronLeft, BsChevronUp  } from "react-icons/bs";


const services = [
  { id: '1', name: 'Build Up Unit Rate' },
  { id: '2', name: 'Material Prices' },
  { id: '3', name: 'Equipment Hiring Costs' },
  { id: '4', name: 'Labour Charges' },
  { id: '5', name: 'Fees and Rates' },
  { id: '6', name: 'Materials Estimation' },

]


const Services = ({user}) => { 
    const [selected, setSelected] = useState(null)
    const [activeItem, setActiveItem] = useState(null)      
    const [activeType, setActiveType] = useState(null)
   
    const [overhead, setOverhead] = useState(15)
    const [profit, setProfit] = useState(10)

    console.log(activeType)
    console.log(activeItem)

    const laborCharge = activeType?.labour?.rate

    // const [mtprice, setMtPrice] = useState({ac?tiveType?.materials.price})
    

   
    const materialCost = activeType?.materials?.price 

    const [mtprice, setMtPrice] = useState(materialCost)

    console.log('mtprice', mtprice)

    // const totalCosts = data.reduce((total, currentValue) => total = total + currentValue.prix,0);

    const totalCosts = activeType?.costs?.map(datum => datum.cost).reduce((a, b) => a + b)

    console.log('totalCosts', totalCosts)

    console.log('materialCost', materialCost)

    console.log('labourCharge', laborCharge)

    const total1 = totalCosts + materialCost + laborCharge

    const total2 = total1 * overhead/100 + total1

    const result = total2 * profit/100 + total2
    console.log('result', result)

 

  return (
    <div className='service'>  
      <div className="serviceInner">   
        <TopBar user={user}/>
        <div className="service_1">           
            <a className="service_3" href='/'><div className='service_2'>Services: {selected?.name}</div></a>
                    
            {!activeItem ? 
            <div className="services__items">
              {services.map((s) => (
              <>
                <div className="serviceItem" key={s.id} onClick={() => setSelected(s)}>
                  {s.name}
                  {s.id  === selected?.id ? <BsChevronUp/> : <BsChevronDown/>}
                 
                </div>
                {selected?.id === s.id ?
                <>
                 <div className={`${selected?.id === '1' ? "build" : 'hiddenDiv'}`}>                   
                  {items?.map((item) => (                      
                    <h5 onClick={() => setActiveItem(item)} key={item.id}>{item.name}</h5> 
                  ))} 
                 </div> 

                 <div className={`${selected?.id === '2' ? "build" : 'hiddenDiv'}`}>                   
                    {materials?.map((mat) => (                      
                      <h5 onClick={() => setActiveItem(mat)} key={mat.id}>{mat.name}</h5> 
                    ))} 
                </div> 
                <div className={`${selected?.id === '3' ? "build" : 'hiddenDiv'}`}>                   
                    {equipments?.map((equip) => (                      
                      <h5 onClick={() => setActiveItem(equip)} key={equip.id}>{equip.name}</h5> 
                    ))} 
                </div> 
                <div className={`${selected?.id === '4' ? "build" : 'hiddenDiv'}`}>                   
                    {labors?.map((labor) => (                      
                      <h5 onClick={() => setActiveItem(labor)} key={labor.id}>{labor.name}</h5> 
                    ))} 
                </div> 
                <div className={`${selected?.id === '6' ? "build" : 'hiddenDiv'}`}>                   
                    {items?.map((item) => (                      
                      <h5 onClick={() => setActiveItem(item)} key={item.id}>{item.name}</h5> 
                    ))} 
                </div>
                
                 </>
                 :null}
             </>
              ))}
         
            </div>
            : null }
              {!activeType ? 
              <>
                {activeItem && 
                  <h2 className='activePage' onClick={() => setActiveItem(null)}>                    
                    <button ><AiOutlineLeft/></button>{activeItem?.name}
                  </h2>}
                <div className='type5'>{activeItem?.types.map((type) => (
                  <h3 key={type.id} onClick={() => setActiveType(type)}>{type?.name}</h3>
                  ))}              
                </div> 
              </>
              : 
              <div className="activeType">               
                  <h2 className='activePage'>{activeItem?.name}</h2>                  
                  <h3 className='activePage' onClick={() => setActiveType(null)}>                
                    <button ><AiOutlineLeft/></button>{activeType?.name}
                  </h3>              
                {selected?.id === '2' ?
               
                  (<div className="active__type__body" action="">
                    <div className="form__group">
                        <label htmlFor="">Materials Price (TZS)</label>
                        <div className="price__wrapper">
                          {(activeType?.price).toLocaleString()}<span>/{activeType?.unit}</span>
                        </div>
                    </div>
                    <div className="form__group">
                        <label htmlFor="">Suppliers</label>
                        <div className="suppliers__wrappers">
                          {activeType?.suppliers.map((s) => (
                            <small>{s}</small>
                          ))}
                        </div>
                    </div>
                    
                  </div>) 
                : null}

                {selected?.id === '3' ?
               
                  (<div className="active__type__body" action="">
                     <div className="form__group">
                        <label htmlFor="">Capacity</label>
                        <div className="price__wrapper">
                          {activeType?.capacity}<span>{activeType?.unit}</span>
                        </div>
                    </div>
                    <div className="form__group">
                        <label htmlFor="">Hiring Cost (TZS)</label>
                        <div className="price__wrapper">
                          {(activeType?.rate).toLocaleString()}<span>/{activeType?.duration}</span>
                        </div>
                    </div>
                   
                    <div className="form__group">
                        <label htmlFor="">Dealers</label>
                        <div className="suppliers__wrappers">
                          {activeType?.dealers?.map((s) => (
                            <small>{s}</small>
                          ))}
                        </div>
                    </div>
                    
                  </div>) 
                : null} 
                {selected?.id === '4' ?
               
                  (<div className="active__type__body" action="">
                  
                 <div className="form__group">
                     <label htmlFor="">Labour charge (TZS)</label>
                     <div className="price__wrapper">
                       {(activeType?.rate).toLocaleString()}<span>/{activeType?.unit}</span>
                     </div>
                 </div>
                
                 <div className="form__group">
                     <label htmlFor="">Labourers</label>
                     <div className="suppliers__wrappers">
                       {activeType?.labours?.map((s) => (
                         <small>{s}</small>
                       ))}
                     </div>
                 </div>
                 
               </div>) 
             : null}   

              {selected?.id === '6' ?
               
                (<div className="active__type__body" action="">                  
                  <div className="form__group">
                      <label htmlFor="">Labour charge (TZS)</label>
                      <div className="price__wrapper">
                        {(activeType?.rate).toLocaleString()}<span>/{activeType?.unit}</span>
                      </div>
                  </div>                 
               </div>) 
             : null}  

              {selected?.id === '1' ?
               
                (<div className="active__type__body" action="">                  
                  <div className="form__group">
                      <label htmlFor="">Labour charge (TZS)</label>
                      <input value={laborCharge} />                      
                  </div>  
                  <div className="form__group">
                      <label htmlFor="">Materials Costs (TZS)</label>
                      <input value={materialCost} />                      
                  </div> 
                  <div className="form__group">
                      <label htmlFor="">Other Related Costs (TZS)</label>
                      <input value={totalCosts} />                      
                  </div> 
                  <div className="form__group">
                      <label htmlFor="">Overhead (%)</label>
                      <input value={overhead} onChange={(e) => setOverhead(e.target.value)} />                      
                  </div> 
                  <div className="form__group">
                      <label htmlFor="">Profit (%)</label>
                      <input value={profit} onChange={(e) => setProfit(e.target.value)} />                      
                  </div> 
                  <div className="form__group">
                      <label htmlFor="">Unit Rate</label>                     
                      <div className="price__wrapper">
                        {(result).toLocaleString()}<span>/{activeType?.unit}</span>
                      </div>
                  </div>             
               </div>) 
             : null}   
                  
              </div>
               
              }
        </div>
        </div>
       
    </div>
  )
}

export default Services
