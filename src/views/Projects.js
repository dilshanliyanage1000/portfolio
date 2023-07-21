import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import UdayaLogo from '../assets/img/udaya_logo.png';

import SeaSideLodgeLogo from "../assets/img/seasidelodge.png";

import FMSLogo from "../assets/img/project_fms.png";

import WeCareLogo from "../assets/img/wecare.png";

import S3Logo from "../assets/img/3S.png";

import GroceryLogo from "../assets/img/grocery.png";

const Projects = () => {

    const param1 = "Projects";

    return (
    
        <>

            <MainNav title={param1} />
            
                <main className="container" style={{ marginTop: '6rem', marginBottom: '10rem' }}>

                    <div className="jumbotron">

                        <h1 className="display-5 text-center" style={{ fontSize: '3rem' }}>Projects</h1>

                            <h3 className="display-5 mt-5" style={{ fontSize: '30px' }}><i className="fa-solid fa-layer-group"></i> Professional Projects</h3>

                            <div className="row mt-5">

                                {/* Quotations Management Systems */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>Quotations Management System (QMS)</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={UdayaLogo} alt="QMS Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            A Quotations Management System was developed for Udaya Industries, Weligalla, in order to create custom
                                            quotations for customers with different production needs. The project also has the ability to manage payments
                                            and refunds advanced by customers to confirm production orders. The technologies used for the creation of
                                            this project include HTML, CSS, Bootstrap, PHP, JavaScript, AJAX, jQuery, and PhpMyAdmin
                                        </p>

                                    </div>

                                </div>

                                {/* SeaSide Lodge */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>SeaSide Lodge</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={SeaSideLodgeLogo} alt="SeaSide Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            Seaside Lodge is a charming hotel situated in the coastal town of Galle, Sri Lanka. The goal of the web
                                            design project was to create a user-friendly website that showcased the hotel's offerings. Using HTML, CSS, Bootstrap,
                                            and JavaScript, the website was designed to be responsive and engaging. It features captivating visuals and
                                            easy navigation, inviting visitors to explore the serene seaside getaway that Seaside Lodge provides!
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <br />

                            {/* Academic Projects */}
                            <h3 className="display-5 mt-5" style={{ fontSize: '30px' }}><i className="fa-solid fa-layer-group"></i> Academic Projects</h3>

                            <div className="row mt-5">

                                {/* Factory Management Systems */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>Factory Management System (FMS)</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={FMSLogo} alt="FMS Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            The Factory Management System is a complete data management solution designed for a machinery
                                            production factory which enables effective management of various aspects of the manufacturing processes within
                                            the organization. It offers more than 11 types of reports that aid in the smooth flow of operations, improving
                                            productivity and efficiency in the factory. The technologies used to create this project include HTML, CSS,
                                            Bootstrap, PHP, JavaScript, AJAX, jQuery, and PhpMyAdmin
                                        </p>

                                    </div>

                                </div>

                                {/* WeCare */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>WeCare (Mobile UI/UX Design)</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={WeCareLogo} alt="WeCare Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            WeCare is a functional prototype specifically developed to assist registered nurses in effectively monitoring
                                            and maintaining the health status of residents. The primary objective of this prototype is to showcase the
                                            various actions that can be carried out by a registered nurse from the perspective of managing residents
                                            within their own homes. The technology used for this project is Figma
                                            
                                            <br/> <br/>

                                            Links:&nbsp;&nbsp;
                                            <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/proto/7Yy4HdY8kNJbLC62eUAz66/Venessa-Stone-(Hi-Fi-Wireframes)?node-id=34-75&starting-point-node-id=34%3A75&scaling=scale-down" target="_blank" rel="noreferrer">
                                                <i>Prototype</i>
                                            </a>&nbsp;|&nbsp;
                                            <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                                <i>UI Style Guide</i>
                                            </a>&nbsp;|&nbsp;
                                            <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                                <i>UI Specification</i>
                                            </a>
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="row mt-5">

                                {/* Student Support System (3S) */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>Student Support System (3S)</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={S3Logo} alt="Student Support System (3S) Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            Student Support System (3S) is a concept website that was proposed for international students who are
                                            newcomers to Canada. The applications provides necessary tools to support students to settle down firmly;
                                            find your course-mates, accommodations and jobs. The UI design for the 3S involved
                                            creating high-fidelity user interfacesthat were compatible with both mobile and PC platforms
                                            <br/><br/>
                                            Link:&nbsp;&nbsp;
                                            <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/VDFfJIeoA8PExFKckUB2x7/SSD?type=design&node-id=0-1&t=o9d5LeyMNjpnw76i-0" target="_blank" rel="noreferrer">
                                                <i>Student Support System (UI)</i>
                                            </a>
                                        </p>

                                    </div>

                                </div>

                                {/* WeCare */}
                                <div className="col-md-6" >

                                    <h2 className="display-4" style={{ fontSize: '30px' }}>Grocery Ordering Application</h2>

                                    <hr className="border border-light border-1 opacity-75" width="100" />

                                    <div className="d-flex align-items-center justify-content-center">

                                        <img src={GroceryLogo} alt="WeCare Logo" style={{ width: '10rem' }} />

                                        <p className="display-5 mt-3" style={{ fontSize: '18px', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'left' }}>
                                            Grocery ordering application was created in order to manage stocks and sales of an online supermarket. The user is notified with appropriate
                                            messages to signify the stage of the process. The system uses procedures, triggers, indexes, functions and packages to handle the data. This application uses Oracle Xe Database
                                            alongside PL/SQL as the technology
                                        </p>

                                    </div>

                                </div>

                            </div>

                    </div>
                    
                </main>

            <BottomNav/>

            <Footer/>

        </>

    );

};

export default Projects;
