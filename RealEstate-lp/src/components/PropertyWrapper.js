import React from 'react'
import { PropertyInfo } from '../Data/PropertyInfo';
import PropertyShowCase from './PropertyShowCase';

const PropertyWrapper = ({titleName,seeMore})=> {
    return (
        <div className="wrapper">
            <div className="title">
                <span>{titleName}</span>
                <button>
                    {seeMore}
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
            <div className="property-content">
                {
                    PropertyInfo.map((property,index) => (
                        <PropertyShowCase 
                            key = {index} 
                            name = {property.propertyName}
                            price = {property.price}
                            imgSrc = {property.img}
                            address = {property.address}
                            city = {property.city}
                            size = {property.size}
                            type = {property.type}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PropertyWrapper
