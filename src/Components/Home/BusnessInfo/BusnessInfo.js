import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons';
const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visite Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'secondary'
    },
    {
        title: 'Call Us Now',
        description: '+19220015',
        icon: faPhone,
        background: 'primary'
    }
]
const BusnessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            
            <div className="w-75 row">
            {
                infosData.map((info) => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusnessInfo;