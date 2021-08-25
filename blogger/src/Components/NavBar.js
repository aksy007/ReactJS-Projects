import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setSearchInput,
  setUserData
} from "../StateManager/userSlice";
import './Navbar.css';

const Navbar = () => {
    
    const [userInput,setUserInput] = useState('tech');
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch()

    const handleSearch = (e)=>{
        dispatch(setSearchInput(userInput));
    }

    const logout = (response)=>{
        dispatch(setUserData(null))
        dispatch(setSignedIn(false))   
    }

    return (
      <div className="navbar">
        <h1 className='navbar_header'>Blogger</h1>
        {isSignedIn &&
            <div className="blog_search">
                <input
                    className='search'
                    placeholder='Search Blogs'
                    value={userInput}
                    onChange={(e)=> setUserInput(e.target.value)}
                />
                <button
                    className='submit_search_btn'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        }
        {isSignedIn ?
            <div className="navbar_user_data">
                <Avatar 
                    src={userData?.imageUrl}
                    alt={userData?.name}
                />
                <h1 className='signedIn'>
                    {userData?.givenName}
                </h1>
                <GoogleLogout 
                    clientId="720873617895-739in30cea39louhidsp9j46ojeql0hh.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout-btn"
                        >
                            Logout
                        </button>
                    )}
                    onLogoutSuccess={logout}
                />
            </div> : 
            ''
        }
      </div>
    );
  };
  
  export default Navbar;