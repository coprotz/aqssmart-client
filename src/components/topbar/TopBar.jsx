import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import Logo from '../../images/amzuu1.png'
import './topbar.css'
import { useState } from 'react';
import Menu from "../Menu";
import { Link, useNavigate } from "react-router-dom";
import Profile from '../../images/profile_img.png'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from "../../redux/slices/users/verifyUserSlice";
import { BiRefresh } from "react-icons/bi";



const TopBar = ({
  setShowModal_Info,
  setSecret,
  setModal_Loc,
  setModal_Edu
}) => {
  const [show, setShow] = useState(false)
  const [showDrop, setShowDrop] = useState(false)
  const [setting, setSetting] = useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.verifyUser?.user?.user)

  // console.log(user?.appliStatus)



  // const appId = applicant?.id

  const handleLogout = () => {
    dispatch(logout())
    navigate("/careers")
    window.location.reload(false)

  }

  return (

    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="menuList">
          <div className='logo'>
            <a href='/careers'><img src={Logo} alt="Logo" /></a>
            <h3>AQS</h3>
          </div>
          <div className="menu__lists">
            {/* <button className='menu__item'>Services</button>
              <div className="menu__page">

              </div> */}
            <div className="menu__page__1">
              <Link to='/careers' className='menu__item'>Careers</Link>
              <Link to='/contact' className='menu__item'>Contact Us</Link>
              <button className="top_btn" onClick={() => window.location.reload(false)}><BiRefresh/>Refresh</button>
              {/* <h4 className='menu__item' onClick={() => setShowDrop(!showDrop)}>Company</h4>
              {showDrop ?
                <div className="menu__page">
                  <div className="menu__page__2">
                    <h3>About</h3>
                    <h3>Terms of Use</h3>
                    <h3>Privacy</h3>
                    <h3>Contact Us</h3>
                  </div>
                  <div className="menu__page__3">
                    <Link to="/careers" className="menu__page__3__1">Apply Job Here</Link>
                  </div>
                </div>
                : null} */}
            </div>

          </div>
        </div>
        <div className="menuList">
          <div className="menu__lists">
            
            {user ? null :
              <>
                <Link to="/login" className='signup__item'>Login</Link>
                {/* <Link to="/" className='signup__item'>Sign Up</Link> */}
              </>}

            {user?.appliStatus === "Approved" || user?.userType === 'Admin'?
              <Link to={`/account/${user?.username}`} className='menu__item'>My Account</Link>
              : null}
            {user ?
              <>
                <Link to={`/applicant/${user?.username}`} className='menu__item'>Portal</Link>
                <div className='menu__item'>Message</div>
                <div className="toggle_wrapper">
                  
                  <button className="topbar_btn" onClick={() => setSetting(!setting)}><FaEllipsisV/></button>
                  {setting &&
                    <div className="setting_icons">
                      <span onClick={() => setShowModal_Info(user)} >Update Personal Information</span>
                      <span onClick={() => setSecret(user)}>Update Secret Question and Answer</span>
                      <span onClick={() => setModal_Loc(user)}>Update Location</span>
                      <span onClick={() => setModal_Edu(user)}>Update Professions</span>
                      <span>Delete Account</span>
                      <span>Left Blank</span>                   
                    </div>
                  }
                </div>
                
                <div className="user_profile_img">
                  
                  <img src={Profile} alt="" />
                  <div className="profile_img_5">
                    <img src={Profile} alt="" />
                    <h4>{user?.firstname} {user?.lastname}</h4>
                    <button onClick={handleLogout}>Logout</button>
                
                   
                  </div>
                </div>
              </>
              : null}

          </div>
          {/* <button className="top_btn btn_mob" onClick={() => window.location.reload(false)}><BiRefresh/></button> */}
          {user?
          <div className="toggle_wrapper toggle_hiden">
                  
                  
                  <button className="topbar_btn " onClick={() => setSetting(!setting)}><FaEllipsisV/></button>
                  {setting &&
                    <div className="setting_icons">
                      <span onClick={() => setShowModal_Info(user)} >Update Personal Information</span>
                      <span onClick={() => setSecret(user)}>Update Secret Question and Answer</span>
                      <span onClick={() => setModal_Loc(user)}>Update Location</span>
                      <span onClick={() => setModal_Edu(user)}>Update Professions</span>
                      <span>Delete Account</span>
                      <span>Left Blank</span>                   
                    </div>
                  }
            </div>: null}
            
          <div className='menu' onClick={() => setShow(!show)}>{show ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
        </div>
      </div>
      {show ?
        
         
        <Menu show={show} setShow={setShow} user={user} /> 
        
        : null}

    </div>


  )
}

export default TopBar
