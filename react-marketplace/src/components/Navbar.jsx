import React from "react";
import image from '../images/logo.gif'

const Navbar = ()=>{
    return (
        <nav className="nav-bar">
            <img src={image} alt="Logo-image" className="nav-logo" />
            <a href="../pages/Marketplace.jsx">Login</a>
            <a href="../pages/Marketplace.jsx">Sign Up</a>
            <a href="../pages/Marketplace.jsx">About</a>
        </nav>
    );
};

export default Navbar;