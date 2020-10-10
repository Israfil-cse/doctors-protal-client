import React from 'react';
import treetCare from '../../../images/treeth-care.png'
import './FutureServices.css';
const FutureServices = () => {
    return (
        <div className="container mt-5 row">
            <div className="col-md-5 offset-md-1 img-container">
                <img className="img-fluid care_img" src={treetCare} alt=""/>
            </div>
            <div className="col-md-6 mt-5">
             <h1>Exceptional Dental Care ,<br/> On Your Trams</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos exercitationem eum eius ipsum vitae non quaerat pariatur quisquam? Distinctio in doloremque officia pariatur animi provident, voluptatum voluptatem quisquam ducimus repellendus minima odit. Magni accusamus blanditiis odio ut eos mollitia ullam, natus aspernatur odit. Dolor at ipsum necessitatibus optio voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, iusto!
             </p>
             <button className="btn">Learn More</button>
             </div>
        </div>
    );
};

export default FutureServices;