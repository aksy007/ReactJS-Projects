import React from 'react';
import './AuthenticationPage.css';
import { GoogleLogin } from 'react-google-login';
import { useDispatch,useSelector } from 'react-redux';
import {selectSignedIn, setSignedIn, setUserData} from '../StateManager/userSlice';

function AuthenticationPage() {
    
    const dispatch = useDispatch()
    const login = (response)=>{
        //console.log(response);
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }
    const isSignedIn = useSelector(selectSignedIn);
    
    return (
        <div className='authPage' style={{display: (isSignedIn)? 'none': '' }}>
            {!isSignedIn ? (
                <div className="login">
                    <h1>Blogger</h1>
                    <GoogleLogin 
                        clientId="CLIENT_ID"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className='login-btn'
                            >
                                Login
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            ) :
            ('')
            }
        </div>
    )
}

export default AuthenticationPage


