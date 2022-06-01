import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

// import Auth from '../../utils/auth';

const Footer = () => {
    // const logout = event => {
    //     event.preventDefault();
    //     Auth.logout();
    // };
   
    return (
        
        <nav className="navbar nav-lg text-[#16AC97] sticky bottom-0">

            <Link to="/">
                <i className="fa-solid fa-house-chimney"></i>
            </Link>
            {Auth.loggedIn() ? (
            <>
                {/* <Link to="/asd">
                    <i className="fas fa-chart-bar"></i>
                </Link> */}

                <Link to="/create-post">
                    <i className="fa-solid fa-circle-plus"></i>
                </Link>
                <Link to="/" onClick={Auth.logout}>
                    <i className=" fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </>
            ) : (
            <>
                <Link to="/login">
                    <i className="fas fa-user"></i>
                </Link>
            </>
            )}
        </nav >
    );
};

export default Footer;