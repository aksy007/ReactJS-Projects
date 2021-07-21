import React from 'react';
import PropertyWrapper from './PropertyWrapper';
import {PropertyInfo, PopularPropertyInfo , NewProjectGallery } from '../Data/PropertyInfo';

const MainContent = ()=> {
    return (
        <div className="main-content">
            <div className="content-wrapper">
                <PropertyWrapper 
                    titleName = {"Top Projects"}
                    seeMore = {"See All Projects"}
                    PropertyInfo = {PropertyInfo}
                />
                <PropertyWrapper 
                    titleName = {"Popular Properties"}
                    seeMore = {"See All Properties"}
                    PropertyInfo = {PopularPropertyInfo}
                />
                <PropertyWrapper 
                    titleName = {"New Project Gallery"}
                    seeMore = {"See All Projects"}
                    PropertyInfo = {NewProjectGallery}
                />
            </div>
        </div>
    )
}

export default MainContent

