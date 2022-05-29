import React from 'react';
import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

const Footer = () => {
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };

    return (
        <nav className="navbar nav-lg text-[#16AC97]">

            <Link to="/">
                <i className="fa-solid fa-house-chimney"></i>
            </Link>

            <Link to="/asd">
                <i className="fas fa-chart-bar"></i>
            </Link>

            <Link to="/create-post">
                <i className="fa-solid fa-circle-plus"></i>
            </Link>

            <Link to="/login">
                <i className="fas fa-user"></i>
            </Link>

        </nav >
    );
};

export default Footer;