import React from 'react';
import doctor from '../../../images/doctor.png';
import DoctorsDetails from './DoctorsDetails';

const doctorsData=[
    {
        name: 'Dr.Caudi',
        phone: '+990015425',
        image: doctor
    },
    {
        name: 'Dr.Caudi',
        phone: '+990015425',
        image: doctor
    },
    {
        name: 'Dr.Caudi',
        phone: '+990015425',
        image: doctor
    }
]

const Doctors = () => {
    return (
        <div>
            <div>
                <h5 style={{color: ' #1cc7c1'}} className="text-center mt-5 pt-5">Our Doctors</h5>
            </div>
            <div className="row">
                {
                    doctorsData.map(doctor => <DoctorsDetails doctor={doctor}></DoctorsDetails>)
                }
            </div>
        </div>
    );
};

export default Doctors;