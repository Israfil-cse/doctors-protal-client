import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import FutureServices from '../FutureServices/FutureServices';
import Header from '../Header/Header';
import MakeApoinment from '../MakeApoinment/MakeApoinment';
import Services from '../Services/Services';
import Testmonial from '../Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FutureServices></FutureServices>
            <MakeApoinment></MakeApoinment>
            <Testmonial></Testmonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;