import React, { useState } from 'react';
import '../../../App.css';
import BookFrom from '../BookFrom/BookFrom';
const BookingCard = ({booking}) => {
    var subtitle;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHoours}</h6>
                    <p>{booking.totalSpaces}</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <BookFrom modalIsOpen={modalIsOpen} closeModal={closeModal} sub={booking.subject}></BookFrom>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;