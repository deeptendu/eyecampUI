
import React, { useState } from "react";

const PatientUpdateForm = (props) => {
    const [showDate, setShowDate] = useState(false);
    const [operationDate, setOperationDate] = useState("");

    let handleDateClick = (event) => {
        setShowDate(!showDate);
    }
    let handleDateInput = (event) => {
        setOperationDate(event.target.value);
    }
    let handleOnSubmit = (e) =>{
        console.log(operationDate);
        setShowDate(false);

    }
    return (
        <React.Fragment>
            <div className='container my-3' >
                {/* <h2>Patient Form</h2> */}

                <div className='row my-3'>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">Patient Number</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">{props.patientNoSearched}</label>
                    </div>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">Name</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">Asha Rani</label>
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">Age</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">55 years </label>
                    </div>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">Husband Name</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">Nathu Lal</label>
                    </div>
                </div>

                <div className='row my-3'>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">Aadhar Number</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">1234567812345678</label>
                    </div>
                    <div className='col-md-2'>
                        <label htmlFor="inputName" className="col-form-label">State</label>
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="inputName" className="col-form-label">Delhi</label>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <div className='container my-3'>
                <div className='row my-3'>
                    <div className='col-md-4'>
                    </div>
                    <div className='col-md-8'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" value={showDate} onChange={handleDateClick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set Operation Date</label>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {
                !showDate ? <></> :
                    <div className='container my-3'>
                        <div className='row my-3'>
                            <div className='col-md-2'>

                            </div>
                            <div className='col-md-8'>
                                <div className="input-group has-validation">
                                    <div className="form-floating is-invalid">
                                        <input type="text" value={operationDate} onChange={handleDateInput} className="form-control is-invalid" id="floatingInputGroup2" placeholder="DD/MM/YYYY eg. 20/09/2025" required />
                                        <label htmlFor="floatingInputGroup2">DD/MM/YYYY eg. 20/09/2025</label>
                                    </div>
                                    <div className="invalid-feedback">
                                        Please choose a valid date.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row my-3'>
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-8">
                                <div className="col-md-12 d-grid gap-6">
                                    <button type="button" onClick={handleOnSubmit} className="btn btn-outline-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </React.Fragment>


    );
}

export default PatientUpdateForm;