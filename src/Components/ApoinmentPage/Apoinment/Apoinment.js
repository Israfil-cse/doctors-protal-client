import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import ApoinmentHeader from '../ApoinmentHeader/ApoinmentHeader';
import BookApoinment from '../BookApoinment/BookApoinment';

const Apoinment = () => {
    const [seletedDate, setSeletedDate] = useState(new Date());
    const handleChange = date => {
        setSeletedDate(date)   
     }
    return (
        <div>
            <NavBar></NavBar>
            <ApoinmentHeader handleChange={handleChange}></ApoinmentHeader>
            <BookApoinment date={seletedDate}></BookApoinment>
            <Footer></Footer>
        </div>
    );
};

export default Apoinment;