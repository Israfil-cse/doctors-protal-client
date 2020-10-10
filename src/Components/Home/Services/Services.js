import React from 'react';
import flucride from '../../../images/flucride.png';
import cavity from '../../../images/cavity.png';
import treeth from '../../../images/treeth.png';
import ServicesDetails from './ServicesDetails';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: flucride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: treeth
    }
]


const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h5 className="mt-5" style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-5 row">
                    {
                        serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;