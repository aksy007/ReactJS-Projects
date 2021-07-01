import React from 'react';


const IsLock = ({isLock})=>{

    if(isLock==="true"){
        return(
            <div className="lock-wrapper">
                <span className="locked">
                    <span className="icon" >
                        <em className="fa fa-lock"></em>
                    </span> 
                    <span className="expl">
                        Included with <br />
                        Brilliant Premium
                    </span>
                </span>
            </div>
        );
    }
    else
    {
        return("");
    }
}

export default IsLock;