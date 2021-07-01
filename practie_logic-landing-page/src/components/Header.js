import React from 'react';
import CourseInfo from './CourseInfo';
import CourseContent from './CourseContent.js';

const Header = ()=>{    

    return(
        <section className="header">
            <div className="header-info">
                <div className="prev-page">
                    <i className="fa fa-angle-left icon" /> 
                    <h4>Back to all courses</h4>
                </div>
                <div className="content">
                    <CourseInfo />
                    <CourseContent />
                </div>
            </div>
        </section>
    );
}

export default Header;