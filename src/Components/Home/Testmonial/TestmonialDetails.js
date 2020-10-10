import React from 'react';
import './Testmonial.css';

const TestmonialDetails = ({ testdata }) => {
    return (

        <div className="col-md-4">
           <div className="testmonial_parent">
           <p>{testdata.title}</p>
            <div className="mt-5">
                <figure>
                    <img style={{ float: 'left' }} src={testdata.image} alt="" />
                </figure>
                <h5 style={{marginLeft:'105px'}} className="pt-3">{testdata.imgTitle}</h5>
            </div>
            <small className="ml-3">{testdata.subtitle}</small>
           </div>
        </div>
    );
};

export default TestmonialDetails;