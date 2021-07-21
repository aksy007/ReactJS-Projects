import React from 'react';
import {Link} from 'react-router-dom';


const Footer = ()=> {
    return (
        <div className="footer"> 
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="about">
                        <h4> About RealEstate</h4>
                        <p>
                        Launched in 2006, Magicbricks is India's No.1 online Property 
                        marketplace to buy, sell, and rent residential and commercial 
                        properties. Adjudged as the most preferred real estate portal 
                        in India by various independent surveys.
                        </p>
                        <div className="social-icons">
                            <ul className="social-links">
                                <li>
                                    <Link to="/">
                                        <i  className="fa fa-facebook-square" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fa fa-linkedin-square" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects">
                    <div className="project-list">
                        <h4>New Projects in India</h4>
                        <div className="links">
                            <Link className="project-link" to="/">New Projects in Delhi</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">New Projects in Chennai</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">New Projects in Mumbai</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">New Projects in Pune</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">New Projects in Kolkata</Link>
                        </div>
                    </div>
                    <div className="project-list">
                        <h4>Real Estate in India</h4>
                        <div className="links">
                            <Link className="project-link" to="/">Property in Delhi NCR</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">Property in Chennai</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">Property in Mumbai</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">Property in Pune</Link>
                            <span> | </span>
                            <Link className="project-link" to="/">Property in Kolkata</Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-tab">
                    <div className="tab-menu">
                        <button>Sitemap</button>
                        <button>Blog</button>
                        <button>Terms & Conditions</button>
                        <button>Help Center</button>
                        <button>Sale Enquiry</button>
                        <button>Buy Our Services</button>
                        <button>Unsubscribe</button>
                    </div>
                </div>
                <div className="footer-info">
                    <p>
                        Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering
                        its platform to advertise properties of Seller for a Customer/Buyer/User
                        coming on its Website and is not and cannot be a party to or privy to or control
                        in any manner any transactions between the Seller and the Customer/Buyer/User.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
