
import React, { useEffect } from 'react';
import Patient from './Patient';
import data from './PatientListData.json'


const PatientList = (props) => {
    useEffect(() => {
       // console.log(data);

        // fetch('./PatientListData.json').then((res) => {
        //     if (!res.ok) {
        //         throw new Error
        //             (`HTTP error! Status: ${res.status}`);
        //     }
        //     return res.json();
        // })
        // .then((data) =>
        //     console.log(data))
        // .catch((error) =>
        //     console.error("Unable to fetch data:", error));
    });

    return (
        <div className="list-group" style={{ 'overflowY': 'scroll', height: '500px' }}>
            {data.map((p) => {
                return(<Patient key={p.PatientNumber} patientNo={p.PatientNumber}
                    patientName={p.PatientName}
                    age={p.Age}
                    husbandName={p.HusbandName}
                    fatherName={p.FatherName}
                    findPatient={props.findPatient} />)
            })}


        </div>
    );
}

export default PatientList;