import React from 'react';
import BusnessInfo from '../BusnessInfo/BusnessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header_container">
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <BusnessInfo></BusnessInfo>
        </div>
    );
};

export default Header;