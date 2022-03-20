
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Admin from './components/admin/Admin';
import MainCareer from './components/career/MainCareer';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Applicant from './components/career/Applicant';
import { applicants } from '.././src/components/applicants'
import Login from './components/login/Login';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDealers } from './redux/slices/dealers/dealersSlice'
import { fetchApplicants } from './redux/slices/applicants/applicantsSlice'
import { fetchCerts } from './redux/slices/certificates/certsSlice';
import { fetchExperiences } from './redux/slices/experiences/experiencesSlices'
import NotFoundPage from './components/notFound/NotFoundPage'
import { fetchEquips } from './redux/slices/equips/equipsSlice';
import { fetchSuppliers } from './redux/slices/suppliers/suppliersSlice';
import { fetchMaterails } from './redux/slices/materials/materialsSlice';
import { fetchLabors } from './redux/slices/labors/laborsSlice';
import { fetchUsers } from './redux/slices/users/usersSlice';
import Change from './components/change/Change';




function App() {

  const [show, setShow] = useState(false)

  const user = useSelector((state) => state.verifyUser?.user?.user)

  const dispatch = useDispatch();


  const dealers = useSelector((state) => state.dealers.dealers)
  const experiences = useSelector((state) => state?.experiences?.experiences)
  const equips = useSelector((state) => state.equips?.equips)
  const suppliers = useSelector((state) => state?.suppliers?.suppliers)
  const materials = useSelector((state) => state?.materials?.materials)
  const labors = useSelector((state) => state?.labors?.labors)
  const users = useSelector((state) => state?.users?.users)
  


  useEffect(() => {
    dispatch(fetchCerts(certs))
  }, [])

  useEffect(() => {
    dispatch(fetchExperiences(experiences))
  }, [])

  useEffect(() => {
      dispatch(fetchDealers(dealers))
  }, [])

  useEffect(() => {
    dispatch(fetchEquips(equips))
}, [])

useEffect(() => {
  dispatch(fetchSuppliers(suppliers))
}, [])

useEffect(() => {
  dispatch(fetchMaterails(materials))
}, [])

useEffect(() => {
  dispatch(fetchLabors(labors))
}, [])

useEffect(() => {
  dispatch(fetchUsers(users))
}, [])


  // const userExperiences = experiences?.filter((exp) => exp?.user === user._id)
  const certs = useSelector((state) => state.certs.certs)

  // console.log('users',users)

  






  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route exact path="/about" element={<About user={user}/>} />
          <Route exact path="/pricing" element={<Pricing user={user}/>} />
          <Route exact path="/services" element={<Services user={user}/>} />
          <Route exact path={`/applicant/${user?.username}`} element={<Applicant
            user={user}
            // applicant={applicant}
            certs={certs}
            // appSkills={appSkills}
            experiences={experiences}
          />} />
          <Route exact path={`/account/${user?.username}`} 
            element={<Admin 
            user={user} 
            dealers={dealers} 
            materails={materials}
            labors={labors}
            users={users}
            suppliers={suppliers}
            />} />
          <Route exact path="/careers" element={<MainCareer user={user}/>} />
          <Route exact path="/contact" element={<Contact user={user}/>} />
          <Route exact path="/privacy" element={<Privacy user={user}/>} />
          <Route exact path="/terms" element={<Terms user={user}/>} />    
          <Route exact path="/login" element={<Login user={user}/>} />
          <Route exact path="/change" element={<Change user={user}/>} />
          {/* <Route exact path='/applicant/:appId' element={<Applicant applicants={applicants}/>}/>  */}
          <Route exact path="*" element={<NotFoundPage user={user}/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
