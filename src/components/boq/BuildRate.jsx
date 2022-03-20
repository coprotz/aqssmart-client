import React from 'react'
import { useState } from 'react';
import { FaAngleLeft, FaWindowClose} from "react-icons/fa";
import Calc from '../../images/aqs.png'
import TopBar from '../topbar/TopBar';



const BuildRate = ({activePage, setActivePage}) => {
  const [activeItem, setActiveItem] = useState(null)
  console.log(activeItem?.tools)

  const totalTools = activeItem?.tools
  const totalLabour = activeItem?.labour
  const sqm = activeItem?.sqm
  const consider = activeItem?.consider

  // const [tools, setTools] = useState(totalTools)
  const [wage, setWage] = useState(36000)
  // const [labour, setLabour] = useState(activeItem?.labour)
  const [profit, setProfit] = useState(10)
  const [murram, setMurram] = useState(10000)
  const [hauling, setHualing] = useState(10000)
  const [overhead, setOverhead] = useState(15)
  const [toolRate, setToolRate] = useState(200)
  // const [sqm, setSqm] = useState(activeItem?.sqm)

  const total1 = (totalLabour*wage) + (totalTools*toolRate);
  const total2 = total1 + activeItem?.murram;
  const total3 = total2 + activeItem?.hauling;
  const compaction = total3 * activeItem?.compaction;
  const total4 = total3 + compaction;
  const total5 = total4 + activeItem?.watering

  const getOverhead = total5*overhead/100;
  const total6 = getOverhead + total5;
  
  const getProfit = total6*profit/100;

  const total7 = total6 + getProfit;


  const result = Math.round(total7*sqm/consider).toLocaleString() 

  const [message, setMessage] = useState('')

  console.log(result)




  return (
    <div className='inner__wrapper'>
      <TopBar/>
        <div className="buildTop">
          <div className="build__left">
            <button onClick={() => setActivePage(null)}><FaAngleLeft/></button>
            <h2>{activePage.name}</h2>
          </div>
          <div className="build__right"></div>
        </div>
        <div className="page__below"> 
          <div className="items__list">         
          </div>
          <div className="selected__item">
              {activeItem ? (
              <div className='build__form'>
                <div className="close__build" onClick={() => setActiveItem(null)}><FaWindowClose/></div>
                <div className="build__title">
                  <h1>Rate for </h1>
                  <h3>{activeItem.name}</h3>
                  
                </div>
                <div className="build__body">
                    <div className="group__input">
                      <label htmlFor="">All-in-Wages(TZS)</label>
                      <input value={wage} onChange={e => setWage(e.target.value)}/>
                    </div>
                    <div className="group__input">
                      <label htmlFor="">Overhead(%)</label>
                      <div className="inputGroup">
                        <input value={overhead} onChange={e => setOverhead(e.target.value)}/>
                      </div>
                      
                    </div>
                    <div className="group__input">
                        <label htmlFor="">Profit(%)</label>
                        <div className="inputGroup">
                          <input value={profit} onChange={e => setProfit(e.target.value)}/>
                        </div>
                      </div> 
                  
                   
                   
                </div>
                <div className="res">
                  Your Rate per {activeItem.unit} (TZS): <h3 className="result">{result}</h3>
                </div>
                <div className="assupt__wrapper">
                  <h4>Consideration</h4>
                  <div className="haulage">Hualage</div>
                  <div className="haulage">Murram</div>
                </div>
                
                
              </div>) :
              <img src={Calc} alt=''/>
              }
          </div>
                   
        </div>
    </div>
  )
}

export default BuildRate
