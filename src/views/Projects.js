import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import MainLogo from '../assets/img/dila_logo.png';

import UdayaLogo from '../assets/img/udaya_logo.png';

import SeaSideLodgeLogo from "../assets/img/seasidelodge.png";

import FMSLogo from "../assets/img/project_fms.png";

import WeCareLogo from "../assets/img/wecare.png";

import S3Logo from "../assets/img/3S.png";


const Projects = () => {

    const param1 = 'Projects';

    return (
    
        <div>

            <MainNav title={param1} src={MainLogo}/>
            
                <main className="container" style={{ marginTop: '6rem', marginBottom: '4rem' }}>

                    <div className="jumbotron">

                        <h1 className="display-5">Projects</h1>

                        <h3 className="display-5 mt-5" style={{ fontSize: '30px' }}>Professional Projects</h3>

                        {/* Quotations Management Systems */}
                        <div className="row mt-5">

                            <div className="col-md-2">
                                <img src={UdayaLogo} alt="Quotations Management System (QMS) Icon" style={{ width: '175px' }} />
                            </div>

                            <div className="col-md-10">

                                <h3 className="display-5" style={{ fontSize: '30px' }}>Quotations Management System (QMS)</h3>

                                <hr className="border border-light border-1 opacity-75" width="100" />

                                <p className="display-5" style={{ fontSize: '20px' }}>
                                    A Quotations Management System was developed for Udaya Industries, Weligalla, in order to create custom
                                    quotations for customers with different production needs. The project also has the ability to manage payments
                                    and refunds advanced by customers to confirm production orders. The technologies used for the creation of
                                    this project include HTML, CSS, PHP, JavaScript, AJAX, jQuery, and PhpMyAdmin.
                                </p>

                            </div>

                        </div>

                        {/* SeaSide Lodge */}
                        <div className="row mt-5">

                            <div className="col-md-2">
                                <img src={SeaSideLodgeLogo} alt="SeaSide Logo Icon" style={{ width: '175px' }} />
                            </div>

                            <div className="col-md-10">
                                <h3 className="display-5" style={{ fontSize: '30px' }}>SeaSide Lodge</h3>

                                <hr className="border border-light border-1 opacity-75" width="100" />

                                <p className="display-5" style={{ fontSize: '20px' }}>
                                    Seaside Lodge is a charming hotel situated in the coastal town of Galle, Sri Lanka. The goal of the web
                                    design project was to create a user-friendly website that showcased the hotel's offerings. Using HTML, CSS,
                                    and JavaScript, the website was designed to be responsive and engaging. It features captivating visuals and
                                    easy navigation, inviting visitors to explore the serene seaside getaway that Seaside Lodge provides.
                                </p>

                            </div>

                        </div>

                        <br />

                        {/* Academic Projects */}
                        <h3 className="display-5 mt-5" style={{ fontSize: '30px' }}>Academic Projects</h3>

                        {/* Factory Management System */}
                        <div className="row mt-5">

                            <div className="col-md-2">
                                <img className="mt-3" src={FMSLogo} alt="Factory Management System (FMS) Icon" style={{ width: '175px' }} />
                            </div>

                            <div className="col-md-10">

                                <h3 className="display-5" style={{ fontSize: '30px' }}>Factory Management System (FMS)</h3>

                                <hr className="border border-light border-1 opacity-75" width="100" />

                                <p className="display-5" style={{ fontSize: '20px' }}>
                                    The Factory Management System is a complete data management solution designed for an agricultural machinery
                                    production factory. It was developed specifically for Udaya Industries, a leading manufacturer in Weligalla,
                                    Sri Lanka, known for their production of Rice and spice mills, oil expellers, dehydrators, and more. This
                                    system is fully functional and enables effective management of various aspects of the manufacturing
                                    processes within the organization. It offers more than 11 types of reports that aid in the smooth flow of
                                    operations. The technologies used to create this project include HTML, CSS, PHP, JavaScript, AJAX, jQuery, and
                                    PhpMyAdmin. These technologies were utilized to build a user-friendly interface and ensure seamless
                                    functionality for the system, improving productivity and efficiency in the factory.
                                </p>

                            </div>

                        </div>

                        {/* WeCare */}
                        <div className="row mt-5">

                            <div className="col-md-2">
                                <img className="mt-3" src={WeCareLogo} alt="WeCare Icon" style={{ width: '175px' }} />
                            </div>

                            <div className="col-md-10">

                                <h3 className="display-5" style={{ fontSize: '30px' }}>WeCare (Mobile UI/UX Design)</h3>

                                <hr className="border border-light border-1 opacity-75" width="100" />

                                <p className="display-5" style={{ fontSize: '20px' }}>
                                    WeCare is a functional prototype specifically developed to assist registered nurses in effectively monitoring
                                    and maintaining the health status of residents. The primary objective of this prototype is to showcase the
                                    various actions that can be carried out by a registered nurse from the perspective of managing residents
                                    within their own homes. The technology used for this project is Figma.
                                </p>

                                <p className="display-5 mt-3" style={{ fontSize: '20px' }}>
                                    Links:
                                    <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/proto/7Yy4HdY8kNJbLC62eUAz66/Venessa-Stone-(Hi-Fi-Wireframes)?node-id=34-75&starting-point-node-id=34%3A75&scaling=scale-down" target="_blank" rel="noopener">
                                    <i>WeCare (Prototype)</i>
                                    </a> |
                                    <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noopener">
                                    <i>WeCare (UI Style Guide)</i>
                                    </a> |
                                    <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noopener">
                                    <i>WeCare (UI Specification)</i>
                                    </a>
                                </p>

                            </div>

                        </div>

                        {/* Student Support System (3S) */}
                        <div className="row mt-5">

                            <div className="col-md-2">
                                <img className="mt-3" src={S3Logo} alt="Student Support System (3S)" style={{ width: '175px' }} />
                            </div>

                            <div className="col-md-10">

                                <h3 className="display-5" style={{ fontSize: '30px' }}>Student Support System (3S)</h3>

                                <hr className="border border-light border-1 opacity-75" width="100" />

                                <p className="display-5" style={{ fontSize: '20px' }}>
                                    Student Support System (3S) is a concept website that was proposed for international students who are
                                    newcomers to Canada. The applications provides necessary tools to support students to settle down firmly;
                                    Find your course-mates, find accommodations and jobs, find instructions on how to get SIN and other useful
                                    start-up info. The UI design for the student support system involved creating high-fidelity user interfaces
                                    that were compatible with both mobile and PC platforms. The design was implemented using Figma for creating
                                    interactive prototypes and collaborating with team members.
                                </p>

                                <p className="display-5 mt-3" style={{ fontSize: '20px' }}>
                                    Links:
                                    <a style={{ textDecoration: 'none', color: 'rgb(0, 199, 199)' }} href="https://www.figma.com/file/VDFfJIeoA8PExFKckUB2x7/SSD?type=design&node-id=0-1&t=o9d5LeyMNjpnw76i-0" target="_blank" rel="noopener">
                                    <i>Student Support System (UI)</i>
                                    </a>
                                </p>

                            </div>

                        </div>

                    </div>
                    
                </main>

            <BottomNav/>

            <Footer/>

        </div>

    );

};

export default Projects;
