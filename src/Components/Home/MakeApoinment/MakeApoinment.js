import React from 'react';
import './MakeApoinment.css';
import doctor from '../../../images/doctor.png';

const MakeApoinment = () => {
    return (
        <div className="parent">
            <div className="make_apoinment mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid doctor_img" src={doctor} alt="" />
                    </div>
                    <div className="col-md-8 mt-5 px-5">
                        <h5 style={{ color: ' #1cc7c1' }}>APOINMENT</h5>
                        <h2 className="text-white">Make an appointment <br /> Today </h2>
                        <small className="text-secondary my-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quia et ut perspiciatis quidem suscipit sapiente quibusdam ducimus. Quod nam ipsam hic possimus sed veritatis maxime delectus quia voluptatibus. Laudantium, vero porro minima quod, ab natus ad eaque doloribus magni voluptate fuga! Repellat vitae quod reprehenderit id necessitatibus a sapiente!
                    </small>
                        <br />
                        <button className="btn mt-5">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeApoinment;