import React from 'react'

const PropertyShowCase = ({name,price,imgSrc,address,city,size,type})=> {
    return (
        <div className="property-showcase">
            <div className="img-box" style={{width:"100%"}}>
                <img src={imgSrc} alt={name} height="150px" width="100%" style={{objectFit:"cover"}}/>
            </div>
            <div className="info" style={{color:"rgb(39,39,39 ,0.7)"}}>
                <h4 style={{color:"rgb(39,39,39)"}} >{name}</h4>
                <span style={{fontSize:"15px"}}>{address}</span>
                <span style={{fontSize:"15px", fontWeight:"bold", color:"rgb(39,39,39)"}}>{price} | {size}</span>
                <span style={{fontSize:"15px"}}>{type}</span>

            </div>
        </div>
    )
}

export default PropertyShowCase
