import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const DoctorsDetails = ({doctor}) => {
    return (
        <div className="text-center col-md-4">
            <figure>
                <img style={{ height:'100%', width:'100%'}} src={doctor.image} alt=""/>
            </figure>
            <h5>{doctor.name}</h5>
            <small><FontAwesomeIcon style={{ color: ' #1cc7c1'}}icon={faPhone} />{doctor.phone}</small>
        </div>
    );
};

export default DoctorsDetails;