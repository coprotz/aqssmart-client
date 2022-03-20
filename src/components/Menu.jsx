import React from 'react'
import { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { items, labors } from './data'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../redux/slices/users/verifyUserSlice";


const Menu = () => {
  const [services, setServices] = useState(null)
  const [company, setCompany] = useState(null)
  const [rate, setRate] = useState(null)
  const [labour, setLabour] = useState(null)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.verifyUser?.user?.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/careers")
    window.location.reload(false)

  }
  // const [activeItem, setActiveItem] = useState(null)

  // const appId = applicant?.id



  return (
    <div className='menuWrapper'>            
        <div className="menuItems"> 
          <div className="itemsWrapper">            
            <Link to='/careers' className={`${ company ? 'activeWrapper' :"itemsWrapper" }`}>Careers</Link>  
            {/* <Link to='/services' className={`${ company ? 'activeWrapper' :"itemsWrapper" }`}>Services</Link>    */}
          </div>  
          {/* <div className={`${services ? 'activeWrapper' :"itemsWrapper" }`}>
              <div className="wrapper1" onClick={() => setCompany(!company)}>
                <div className={`${company ? 'show__item' : 'hide__item'}`}><AiOutlineLeft/></div>
                <div className='item__inner'>Company</div>
                <div className={`${company ? 'hide__item' : 'show__item'}`}><AiOutlineRight/></div>  
              </div>                     
              <div className={`${ !company ? 'activeWrapper' :"itemsWrapper leftside" }`}>
                  <Link to='/about' className="list__item">About</Link>
                  <Link to='/pricing' className="list__item">Pricing</Link>
                  <Link to='/careers' className="list__item">Careers</Link>
                  <Link to='/terms' className="list__item">Terms of Use</Link>
                  <Link to='/privacy' className="list__item">Privacy</Link>
                  <Link to='/contact' className="list__item">Contact</Link>
              </div>
          </div> */}
          <div className="itemsWrapper home__bottom">
            {user?.userType === 'Admin' || user?.appliStatus === 'Approved'? 
          
              <Link to={`/account/${user?.username}`} className={`${ company ? 'activeWrapper ' :"itemsWrapper menu__list" }`}>My Account</Link>
              : null}
              {user? 
              <Link to={`/applicant/${user?.username}`} className={`${ company ? 'activeWrapper ' :"itemsWrapper menu__list" }`}>Portal</Link>
          
            : null}
            {user? null : <>
            <Link to='/login' className={`${ company ? 'activeWrapper ' :"itemsWrapper menu__list" }`}>Login</Link>
            {/* <div className={`${ company ? 'activeWrapper' :"itemsWrapper signup__item menu__list" }`}>Sign Up</div>  */}
            </>}
            <Link to='/contact' className={`${ company ? 'activeWrapper ' :"itemsWrapper menu__list" }`}>Contact Us</Link>
            {user? 
              <button className='acc_logout_btn' onClick={handleLogout}>Logout</button>
            : null}
            {/* <Link to='/admin' className={`${ company ? 'activeWrapper' :"itemsWrapper admin__login menu__list" }`}>Admin</Link> */}
          </div>
        </div>
        
        <div className="footer">
            Powered by AlBarru
        </div>
    </div>
  )
}

export default Menu
