import React from 'react';

const CourseContent = ()=>{
    return(
        <section className="course-content">
            <div className="course-logo">
                <img className="courseLogo" src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" alt="logo" />
            </div>
            <div className="content-info">
                <div className="course-quizes">
                    <h3>37</h3>
                    <span>Interactive Quizes</span>
                </div>
                <div className="course-exercises">
                    <h3>265+</h3>
                    <span>Concept and exercises</span>
                </div>
            </div>
            <div className="course-enroll">
                <button className="enroll"> Start Course </button>
            </div>
        </section>
    );
}

export default CourseContent;


