import React from 'react';

const Footer = ()=>{
    return(
        <section className="footer">
            <div className="course-map">
                <div className="map-item">
                    <h5>Next Step</h5>
                    <div>
                        <a href="https://brilliant.org/courses/math-fundamentals/" target="_blank" className="course">
                            <span className="img">
                                <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92" alt="img" />
                            </span>
                            <div>
                                <h4>Mathematical Fundamentals</h4>
                                <p>The essential tools for mastering algebra, logic, and number theory!</p>
                            </div>
                        </a>
                        <a href="https://brilliant.org/courses/math-fundamentals/" target="_blank" className="course">
                            <span className="img">
                                <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92" alt="img" />
                            </span>
                            <div>
                                <h4>Computer Science Fundamentals</h4>
                                <p>Wrap your mind around computational thinking, from everyday tasks to algorithms.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;


