import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        width:'500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const BookFrom = ({ modalIsOpen, closeModal, sub }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal();
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-brand">{sub}</h2>
                <button style={{float: 'right'}} className="btn"onClick={closeModal}>close</button>
                    <br/>
                <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" name="name" placeholder="Your Name" ref={register({ required: true })} />
                    {errors.name && <span>name is required</span>}
                    <br />
                    <input className="form-control" name="number" placeholder="Your number" ref={register({ required: true })} />
                    {errors.number && <span>Phone number is required</span>}
                    <br />

                    <input className="form-control" name="email" placeholder="Your Email" ref={register({ required: true })} />
                    {errors.email && <span>email is required</span>}
                    <br />
                    <input className="form-control" name="date" placeholder="dd/mm/yy" ref={register({ required: true })} />
                    {errors.date && <span>date is required</span>}
                    <br/>
                    <input className="btn" style={{float: 'right'}} type="submit" value="SEND" />
                </form>
            </Modal>
        </div>
    );
};

export default BookFrom;