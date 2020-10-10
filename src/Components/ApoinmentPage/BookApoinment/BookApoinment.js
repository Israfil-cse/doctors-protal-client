import React from 'react';
import BookingCard from './BookingCard';

const BookData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHoours: '8:00 AM - 9:00 AM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHoours: '10:05 AM - 11:30 AM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHoours: '5:00 PM - 6:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHoours: '7:00 AM - 8:30 AM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHoours: '8:00 AM - 9:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHoours: '8:00 AM - 9:00 PM',
        totalSpaces: '10 SPACES AVAILABLE'
    }
];
const BookApoinment = ({date}) => {
    return (
        <section>
            <div>
            <h2 style={{color: ' #1cc7c1'}} className="text-center mb-5">Available Appointment On {date.toDateString()}</h2>
        </div>
        <div className="row">
            {
                BookData.map(booking => <BookingCard booking={booking} date={date}></BookingCard>)
            }
        </div>
        </section>
    );
};

export default BookApoinment;