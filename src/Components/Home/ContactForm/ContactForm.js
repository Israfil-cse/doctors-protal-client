import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div className="form-parent">
            <div className="contact_form">
                <div className="text-center text-container">
                    <h5 style={{color: ' #1cc7c1'}}>CONTACT US</h5>
                    <h3>Always Connect With Us</h3>
                </div>

                <form >
                    <input className="form-control" type="text" placeholder="Email Address" name="email" required /> <br />
                    <input className="form-control" type="text" placeholder="Subject" name="subject" required /> <br />
                    <textarea className="form-control" name="discription" id="" cols="30" rows="10" required></textarea>
                    <br/>
                    <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;