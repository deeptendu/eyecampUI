import Login from './component/Login';
import NavBar from './component/NavBar';
import PatientForm from './component/PatientForm';
import PatientList from './component/PatientList';
import PatientUpdateForm from './component/PatientUpdateForm';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [patientNoSearched, setPatientNoSearched] = useState();
  const [userLoggedIn,setUserLoggedIn] = useState();

  useEffect(()=>{
    console.log('logged in user'+JSON.stringify(userLoggedIn))
  },[userLoggedIn]);
  return (
    <Router>
      <Routes >
        <Route path="/patientform" element={
          <div >
            <NavBar findPatient={setPatientNoSearched} />
            <div className='container-fluid'>
              <div className='row my-3'>
                <div className='col-md-8'>
                  <PatientForm />
                </div>
                <div className='col-md-4'>
                  <PatientList findPatient={setPatientNoSearched} />
                </div>

              </div>
            </div>
          </div>} />
        <Route path="/patientupdateform" element={
          < >
            <NavBar findPatient={setPatientNoSearched} />
            <div className='container-fluid'>
              <div className='row my-3'>
                <div className='col-md-8'>
                  <PatientUpdateForm patientNoSearched={patientNoSearched} />
                </div>
                <div className='col-md-4'>
                  <PatientList findPatient={setPatientNoSearched} />
                </div>

              </div>
            </div>
          </>
        } />
        <Route path="/login"  element={<Login setUser={setUserLoggedIn}/>} />
      </Routes >


    </Router>
  );
}

export default App;
