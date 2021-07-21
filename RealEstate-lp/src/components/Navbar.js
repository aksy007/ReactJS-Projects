import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = ()=> {

    const [dropdown,setDropdown] = useState(false);
    const dropdownHandler = () =>{
        setDropdown(!dropdown);
    }
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="logo">
                    <h2>RealEstate</h2>
                </div>
                <div className="nav-content">
                    <div className="city-drop-menu" onClick={dropdownHandler} >
                        <Link to="/" className="dropdown-link">
                            Mumbai <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown/>}
                    </div>
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
