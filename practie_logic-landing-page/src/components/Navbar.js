import React from 'react';
import logo from './Images/logo.png'
const Navbar = ()=>{
    return(
        <div className="navbar">
            <div className="nav">
                <div className="site-logo">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="navlinks">
                    <ul className="links">
                        <a href="https://brilliant.org/daily-problems/" target="_blank" className="link" >TODAY</a> 
                        <a href="https://brilliant.org/courses/" target="_blank" className="active link">COURSES</a>     
                    </ul>
                </div>
                <div className="aunthication-btns">
                    <button className="log-in">Log In</button>
                    <button className="sign-up">Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
