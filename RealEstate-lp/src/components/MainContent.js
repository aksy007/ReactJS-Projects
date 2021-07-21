import React from 'react';
import PropertyWrapper from './PropertyWrapper';

const MainContent = ()=> {
    return (
        <div className="main-content">
            <div className="content-wrapper">
                <PropertyWrapper 
                    titleName = {"Top Projects"}
                    seeMore = {"See All Projects"}
                />
                <PropertyWrapper 
                    titleName = {"Top Projects"}
                    seeMore = {"See All Projects"}
                />
                <PropertyWrapper 
                    titleName = {"Top Projects"}
                    seeMore = {"See All Projects"}
                />
            </div>
        </div>
    )
}

export default MainContent

