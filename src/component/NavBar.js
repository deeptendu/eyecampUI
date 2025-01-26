
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [patientNo, setPatientNo] = useState();
  let handleSearchChange = (e) => {
    setPatientNo(e.target.value);
  }
  let handleSearchClick = (e) => {
    //setPatientNo(e.target.value);
    props.findPatient(patientNo)
    //console.log(patientNo);
    setPatientNo("");

  }
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid" >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="container-fluid justify-content-start" >
            <div className="input-group mb-2">
              <Link to="/">
                <button className="btn  btn-outline-success  me-2" type="button">Home</button>

              </Link>
              <Link to="/patientform">
                <button className="btn btn-outline-success me-2" type="button">Patient Regitration</button>
              </Link>
              <input type="text" value={patientNo} onChange={handleSearchChange} className="form-control" placeholder="Search by Patient Number" aria-label="Search by Patient Number" aria-describedby="button-addon1" />
              <Link to="/patientupdateform">
                <button className="btn btn-primary" onClick={handleSearchClick} type="button" id="button-addon1">Search</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;