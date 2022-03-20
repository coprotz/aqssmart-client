
import Menu from '../Menu'
import TopBar from '../topbar/TopBar'
import './admin.css'
import { useStep } from 'react-hooks-helper'
import Dashboard from './Dashboard'
import MaterialsAdmin from './MaterialsAdmin'
import EquipAdmin from './EquipAdmin'
import LabourAdmin from './LabourAdmin'
import Users from './Users'
import DealersAdmin from './DealersAdmin'
import Subscribers from './Subscribers'
import SuppliersAdmin from './SuppliersAdmin'
import { BiDetail } from "react-icons/bi";
import { FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaPeopleCarry } from "react-icons/fa";
import { MdImagesearchRoller, MdMenuOpen,MdSupervisorAccount,MdConstruction, MdLogout, MdEngineering, MdAddShoppingCart } from "react-icons/md";
import { useState } from 'react'
import { regions } from '../Regions'
import { useNavigate } from 'react-router-dom';
import { logout } from "../../redux/slices/users/verifyUserSlice";
import { useSelector, useDispatch } from 'react-redux'


const steps = [
    { id: '1', Component: Dashboard },
    { id: '2', Component: MaterialsAdmin },
    { id: '3', Component: EquipAdmin },
    { id: '4', Component: LabourAdmin },
    { id: '5', Component: Users },
    { id: '6', Component: DealersAdmin }, 
    { id: '7', Component: SuppliersAdmin }, 
    { id: '8', Component: Subscribers },
]


const Admin = ({show, setShow, dealers, labors, users, suppliers}) => {
    // const { appId } = useParams();
    const { step, navigation } = useStep( { steps, initialStep: 0 })
    const { Component } = step
    const { go } = navigation;

    const user = useSelector((state) => state.verifyUser?.user?.user)

    const userDealers = dealers?.filter((d) => d.user === user._id)
    const userEquips = useSelector((state) => state?.equips?.equips.filter((e) => e.user === user._id))
    const userSuppliers = useSelector((state) => state?.suppliers.suppliers.filter((s) => s.user === user._id))
    const userMaterials = useSelector((state) => state?.materials.materials.filter((m) => m.user === user._id))
    const userLabors = useSelector((state) => state?.labors.labors.filter((l) => l.user === user._id))

    // console.log('equips',userEquips)

    const [active, setActive] = useState(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const props = { 
        steps, 
        navigation, 
        step, 
        regions, 
        active, 
        setActive, 
        user, 
        dealers, 
        userDealers, 
        userEquips,
        userSuppliers,
        userMaterials,
        userLabors,
        users, 
        suppliers,
     }

     const handleLogout = () => {
        dispatch(logout())
        navigate("/careers")
    
      }




  return (
    <div className='admin_wrapper'>
       
         <div className='page__top'>
            <TopBar user={user}/> 
         </div>
         <div className="admin__inner">
            <div className={`${active ? "admin__sidebar__active" : "admin__sidebar"}`}>               
                <div className="sideBar__inner">                 
                    <div className={`${step.id === '1'? "active__go" : 'inner__menu'}`} onClick={() => go('1')}>
                    {/* <div className='inner__menu' onClick={() => go('1')}> */}
                        <div className="menu__svg">
                            <FiTrendingUp/>
                            <small className='svg__notes'>Dashboard</small>
                        </div>
                        <button className='btn'>Dashboard</button>
                    </div>
                    <div className={`${step.id === '2'? "active__go" : 'inner__menu'}`} onClick={() => go('2')}>
                        <div className="menu__svg">
                            <MdImagesearchRoller/>
                            <small className='svg__notes'>Materials</small>
                        </div>
                        <button className='btn'>Materials</button>
                    </div>
                    <div className={`${step.id === '3'? "active__go" : 'inner__menu'}`} onClick={() => go('3')}>
                        <div className="menu__svg">
                            <MdConstruction/>
                            <small className='svg__notes'>Equipments</small>
                        </div>
                        <button className='btn'>Equipments</button>
                    </div>
                    <div className={`${step.id === '4'? "active__go" : 'inner__menu'}`} onClick={() => go('4')}> 
                        <div className="menu__svg"> 
                            <FaPeopleCarry/>
                            <small className='svg__notes'>Labourers</small>
                        </div>
                        <button className='btn'>Labourers</button>
                    </div>
                    {user?.userType === 'Admin'?
                        <div className={`${step.id === '5'? "active__go" : 'inner__menu'}`} onClick={() => go('5')}>
                            <div className="menu__svg">
                                <FiUsers/>
                                <small className='svg__notes'>Users</small>
                            </div>
                            <button className='btn'>Users</button>
                        </div>
                    : null}
                    <div className={`${step.id === '6'? "active__go" : 'inner__menu'}`} onClick={() => go('6')}>
                        <div className="menu__svg">
                            <MdEngineering/>
                            <small className='svg__notes'>Equipment Dealers</small>
                        </div>
                        <button className='btn'>Dealers</button>                   
                    </div>
                    <div className={`${step.id === '7'? "active__go" : 'inner__menu'}`} onClick={() => go('7')}>
                        <div className="menu__svg">                           
                            <MdAddShoppingCart/> 
                            <small className='svg__notes'>Suppliers</small>                           
                        </div>                        
                        <button className='btn'>Suppliers</button>
                    </div>
                    {user?.userType === 'Admin'?
                        <div className={`${step.id === '8'? "active__go" : 'inner__menu'}`} onClick={() => go('8')}>
                            <div className="menu__svg">
                                <MdSupervisorAccount/>
                                <small className='svg__notes'>Subscribers</small>
                            </div>
                            <button className='btn'>Subscribers</button>
                        </div>
                    : null}
                    <div className="inner__menu">
                        <div className="menu__svg" onClick={handleLogout}>
                            <MdLogout/>
                            <small className='svg__notes'>Logout</small>
                        </div>    
                        <button className='btn signup__item'>Logout</button>
                    </div>
                </div>
                
                
            </div>
            <div className="admin__body">  
                <Component {...props }/>   
            </div>  
         </div>
        
        
        
    </div>
  )
}

export default Admin
