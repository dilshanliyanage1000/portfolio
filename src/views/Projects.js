import React from 'react';

import { Link } from 'react-scroll';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

import UdayaLogo from '../assets/img/udaya_logo.png';

import SeaSideLodgeLogo from "../assets/img/seasidelodge.png";

import WeCareLogo from "../assets/img/wecare.png";

import S3Logo from "../assets/img/3S.png";

import GroceryLogo from "../assets/img/grocery.png";

const Projects = () => {

    const param1 = "Projects";

    return (
    
        <>

            <MainNav title={param1} />
            
                <main className="container" style={{ marginTop: '8rem', marginBottom: '5rem' }}>

                    <div className="jumbotron">

                        <h1 className="display-5 text-center theme-color fw-medium">Projects</h1>

                        <p className="text-center mt-5" style={{ fontSize: "20px" }}>
                            As a dedicated Web Developer and UI/UX Designer, I bring designs to life with a focus
                            on seamless user experiences. I thrive on creating visually
                            appealing and functional websites, ensuring exceptional results in
                            every project. Explore my creations to know more about each one of my work.
                        </p>

                        <div className='col-md-auto' style={{padding: '10px', textAlign: "center", marginTop: "2rem" }} >

                            <Link style={{padding: "10px"}} to="professional" smooth={true} duration={500} offset={-100} >
                                <button type="button" className="solid-pill" style={{ width: "300px" }}>
                                    <h3 className="pill-text">
                                        <i class="fa-solid fa-briefcase" style={{ marginRight: '10px' }}></i>Professional Projects
                                    </h3>
                                </button>
                            </Link>
                            
                            <Link style={{padding: "10px"}} to="academic" smooth={true} duration={500} offset={-100} >
                                <button type="button" className="solid-pill" style={{ width: "300px" }}>
                                    <h3 className="pill-text">
                                        <i class="fa-solid fa-graduation-cap" style={{ marginRight: '10px' }}></i>Academic Projects
                                    </h3>
                                </button>
                            </Link>

                        </div>

                        <section id="professional">
                        
                            <h1 className="display-6 text-center theme-color fw-medium" style={{ marginTop: '8rem' }}>Professional Projects</h1>

                            <div className="container-fluid">
                                    
                                <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                    <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                        <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                            <img className="about-logo" src={UdayaLogo} alt={UdayaLogo} style={{ width: "60px" }} />

                                            <div>
                                                
                                                <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>Quotations Management System</h3>

                                                <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                    <span className='theme-color fw-medium'>UDAYA INDUSTRIES</span>
                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                    <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                        A Quotations Management System was developed for Udaya Industries, Weligalla, in order to create custom
                                        quotations for customers with different production needs. The project also has the ability to manage payments
                                        and refunds advanced by customers to confirm production orders. The technologies used for the creation of
                                        this project include HTML, CSS, Bootstrap, PHP, JavaScript, AJAX, jQuery, and PhpMyAdmin
                                    </p>

                                    <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                        <div className="skill-pill">HTML</div>
                                        <div className="skill-pill">CSS</div>
                                        <div className="skill-pill">Bootstrap</div>
                                        <div className="skill-pill">PHP</div>
                                        <div className="skill-pill">JavaScript</div>
                                        <div className="skill-pill">AJAX</div>
                                        <div className="skill-pill">jQuery</div>
                                        <div className="skill-pill">PhpMyAdmin</div>
                                    </div>


                                </div>

                                <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                    <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                        <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                            <img className="about-logo" src={SeaSideLodgeLogo} alt={SeaSideLodgeLogo} style={{ width: "60px" }} />

                                            <div>
                                                
                                                <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>Hotel Website</h3>

                                                <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                    <span className='theme-color fw-medium'>SEASIDE LODGE</span>
                                                </h3>

                                            </div>

                                        </div>

                                    </div>

                                    <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                        Seaside Lodge is a charming hotel situated in the coastal town of Galle, Sri Lanka. The goal of the web
                                        design project was to create a user-friendly website that showcased the hotel's offerings. Using HTML, CSS, Bootstrap,
                                        and JavaScript, the website was designed to be responsive and engaging. It features captivating visuals and
                                        easy navigation, inviting visitors to explore the serene seaside getaway that Seaside Lodge provides!
                                    </p>

                                    <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                        <div className="skill-pill">HTML</div>
                                        <div className="skill-pill">CSS</div>
                                        <div className="skill-pill">Bootstrap</div>
                                        <div className="skill-pill">JavaScript</div>
                                    </div>


                                </div>
                                
                            </div>

                        </section>

                        <section id="academic">

                            <h1 className="display-6 text-center theme-color fw-medium" style={{ marginTop: '8rem' }}>Academic Projects</h1>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={UdayaLogo} alt={UdayaLogo} style={{ width: "60px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>Factory Management System</h3>

                                            <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>UNIVERSITY OF COLOMBO (FINAL YEAR PROJECT)</span>
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    The Factory Management System is a complete data management solution designed for a machinery
                                    production factory which enables effective management of various aspects of the manufacturing processes within
                                    the organization. It offers more than 11 types of reports that aid in the smooth flow of operations, improving
                                    productivity and efficiency in the factory.
                                </p>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">HTML</div>
                                    <div className="skill-pill">CSS</div>
                                    <div className="skill-pill">Bootstrap</div>
                                    <div className="skill-pill">PHP</div>
                                    <div className="skill-pill">JavaScript</div>
                                    <div className="skill-pill">AJAX</div>
                                    <div className="skill-pill">jQuery</div>
                                    <div className="skill-pill">PhpMyAdmin</div>
                                </div>


                            </div>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={WeCareLogo} alt={WeCareLogo} style={{ width: "60px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>WeCare - Mobile UI/UX Prototype</h3>

                                            <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>CENTENNIAL COLLEGE</span>
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    WeCare is a functional prototype specifically developed to assist registered nurses in effectively monitoring
                                    and maintaining the health status of residents. The primary objective of this prototype is to showcase the
                                    various actions that can be carried out by a registered nurse from the perspective of managing residents
                                    within their own homes.
                                </p>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    Links:&nbsp;&nbsp;
                                    <a style={{ textDecoration: 'none', color: '#5bbbff' }} href="https://www.figma.com/proto/7Yy4HdY8kNJbLC62eUAz66/Venessa-Stone-(Hi-Fi-Wireframes)?node-id=34-75&starting-point-node-id=34%3A75&scaling=scale-down" target="_blank" rel="noreferrer">
                                        Prototype
                                    </a>&nbsp;|&nbsp;
                                    <a style={{ textDecoration: 'none', color: '#5bbbff' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                        UI Style Guide
                                    </a>&nbsp;|&nbsp;
                                    <a style={{ textDecoration: 'none', color: '#5bbbff' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                        UI Specification
                                    </a>
                                </p>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">Figma (Prototyping)</div>
                                </div>

                            </div>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={S3Logo} alt={S3Logo} style={{ width: "60px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>Student Support System (3S)</h3>

                                            <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>CENTENNIAL COLLEGE</span>
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    Student Support System (3S) is a concept website that was proposed for international students who are
                                    newcomers to Canada. The applications provides necessary tools to support students to settle down firmly;
                                    find your course-mates, accommodations and jobs. The UI design for the 3S involved
                                    creating high-fidelity user interfacesthat were compatible with both mobile and PC platforms
                                </p>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    Link:&nbsp;&nbsp;
                                    <a style={{ textDecoration: 'none', color: '#5bbbff' }} href="https://www.figma.com/file/VDFfJIeoA8PExFKckUB2x7/SSD?type=design&node-id=0-1&t=o9d5LeyMNjpnw76i-0" target="_blank" rel="noreferrer">
                                        Student Support System
                                    </a>
                                </p>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">Figma</div>
                                </div>

                            </div>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={GroceryLogo} alt={GroceryLogo} style={{ width: "60px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ fontSize: "35px", paddingLeft: "1rem"}}>Grocery Ordering Application</h3>

                                            <h3 className="display-6" style={{ fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>CENTENNIAL COLLEGE</span>
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <p style={{ fontSize:"20px", paddingLeft: "2rem", marginTop: "2rem" }}>
                                    Grocery ordering application was created in order to manage stocks and sales of an online supermarket. The user is notified with appropriate
                                    messages to signify the stage of the process. The system uses procedures, triggers, indexes, functions and packages to handle the data. This application uses Oracle Xe Database
                                    alongside PL/SQL as the technology
                                </p>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">Oracle Xe</div>
                                    <div className="skill-pill">PL/SQL</div>
                                </div>

                            </div>

                        </section>

                    </div>
                    
                </main>

            <BottomNav/>

        </>

    );

};

export default Projects;
