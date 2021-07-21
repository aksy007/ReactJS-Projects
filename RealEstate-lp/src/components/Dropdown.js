import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {CityName} from '../Data/CityName';

const Dropdown = ()=> {

    const [click,setClick] = useState(false);
    return (
        <div className="dropdown">
            <ul onClick={()=> setClick(!click)}
                className={ click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {
                    CityName.map((item,index) =>{
                        return(
                            <li key="index">
                                <Link to="/" onClick={()=> setClick(false)} className="dropdown-list-item">
                                    {item}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Dropdown
