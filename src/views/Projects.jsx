import React, { useRef, useState, useEffect } from 'react';
import MainNav from '../components/MainNav';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJs, faBootstrap, faPhp, faGithub, faFigma, faNode, faAngular, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faLink, faBriefcase, faGraduationCap, faCode, faDatabase, faVialVirus, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import BgTwo from "../assets/img/bg/abstract_02.png";

const Projects = () => {

    const param1 = "Projects";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const professionalRef = useRef(null);
    const academicRef = useRef(null);
    const mainContentRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${BgTwo})`;
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#31253b";
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <>

            <MainNav title={param1} />

            <div ref={mainContentRef} id="main_content"></div>

            <div className="main-content-area">

                <main className="custom-container" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="frosted-glass br-20">

                        <div className="content-wrapper">

                            <p className="display-4 mt-4 abril-fatface-regular">Projects</p>

                            <p className="poppins-extralight fs-5 mt-3">
                                As a dedicated MERN Stack Web Developer, I bring designs to life with a focus on seamless user experiences. I thrive on creating visually appealing and functional websites, ensuring exceptional results in every project. Explore my creations to know more about each one of my work.
                            </p>

                            <div className='row align-items-center justify-content-center text-content' style={{ marginTop: "2rem" }}>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(professionalRef)}>
                                        <FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Professional Projects
                                    </button>
                                </div>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(academicRef)}>
                                        <FontAwesomeIcon icon={faGraduationCap} />&nbsp;&nbsp;Academic Projects
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

                </main >

                <div ref={professionalRef} id="professional"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-white custom-underline">Professional Projects</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Quotations Management System</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://udayaindustries.lk/"} target="_blank">
                                    Udaya Industries.
                                </Link>
                            </p>

                            <p className="mt-4 fs-5 poppins-extralight">
                                A Quotations Management System was developed for Udaya Industries, Weligalla,
                                in order to create custom quotations for customers with different production needs.
                                The project also has the ability to manage payments and refunds advanced by
                                customers to confirm production orders.
                            </p>

                            <div className="mt-4 row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faHtml5} />&nbsp;&nbsp;HTML</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCss3} />&nbsp;&nbsp;CSS</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBootstrap} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPhp} />&nbsp;&nbsp;PHP</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;JavaScript</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;AJAX</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;jQuery</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;MySQL</div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Hotel Website</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                Seaside Lodge
                            </p>

                            <p className="mt-4 fs-5 poppins-extralight">
                                Seaside Lodge is a charming hotel situated in the coastal town of Galle, Sri Lanka. The goal of the web design project was to create a user-friendly website that showcased the hotel's offerings. Using HTML, CSS, Bootstrap, and JavaScript, the website was designed to be responsive and engaging. It features captivating visuals and easy navigation, inviting visitors to explore the serene seaside getaway that Seaside Lodge provides!
                            </p>

                            <div className="mt-4 row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faHtml5} />&nbsp;&nbsp;HTML</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCss3} />&nbsp;&nbsp;CSS</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBootstrap} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;JavaScript</div>

                            </div>

                        </div>

                    </div>

                </main >

                <div ref={academicRef} id="academic"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-white custom-underline">Academic Projects</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Vital+ | Medical Tracker</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://www.centennialcollege.ca/"} target="_blank">
                                    Centennial College
                                </Link>
                            </p>

                            <p className="mt-4 fs-5 poppins-extralight">
                                Vital Plus is an innovative application designed to assist nurses in continuously monitoring and supporting patients, especially during the crucial first weeks after hospital discharge. Leveraging the power of neural networks provided by Brain.js, Vital Plus empowers nurses to diagnose diseases through patient-provided symptoms.
                            </p>

                            <div className="mt-4 row">
                                <Link className='remove-link skill-pill' to="https://github.com/Dhruvil-Rangani/vital_plus" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;GitHub
                                </Link>
                                <Link className='remove-link skill-pill' to="https://main--vital-plus.netlify.app/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLink} />&nbsp;&nbsp;Live Site
                                </Link>
                            </div>

                            <div className="mt-4 row">
                                <div className="skill-pill"><FontAwesomeIcon icon={faReact} />&nbsp;&nbsp;React</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBootstrap} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;Express.js</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faVialVirus} />&nbsp;&nbsp;REST API</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCodepen} />&nbsp;&nbsp;GraphQL</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faDatabase} />&nbsp;&nbsp;MongoDB</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;Brain.js</div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">SimplyOrganic - Grocery Ordering Application</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://www.centennialcollege.ca/"} target="_blank">
                                    Centennial College
                                </Link>
                            </p>

                            <p className="mt-4 fs-5 poppins-extralight">
                                The Simply Organic Grocery Ordering Application is a collaborative web-based platform designed to facilitate the seamless purchase of groceries while efficiently tracking essential information such as customer details, order specifics, grocery items, and delivery information. This application employs REST API interactions with a Node.js backend, ensuring smooth communication throughout the ordering process. Developed using the MEAN Stack, which comprises MongoDB, Express, Angular, and NodeJS, the system integrates GitHub for version control and utilizes Render for effective deployment.
                            </p>

                            <div className="mt-4 row">
                                <div className="skill-pill"><FontAwesomeIcon icon={faAngular} />&nbsp;&nbsp;Angular</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;Express.js</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faVialVirus} />&nbsp;&nbsp;REST API</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faNode} />&nbsp;&nbsp;Node.js</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faDatabase} />&nbsp;&nbsp;MongoDB</div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Factory Management System</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://ucsc.cmb.ac.lk/"} target="_blank">
                                    University of Colombo School of Computing
                                </Link>
                            </p>

                            <p className="mt-4 fs-5 poppins-extralight">
                                The Factory Management System is a complete data management solution designed for a machinery production factory which enables effective management of various aspects of the manufacturing processes within the organization. It offers more than 11 types of reports that aid in the smooth flow of operations, improving productivity and efficiency in the factory.
                            </p>

                            <div className="mt-4 row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faHtml5} />&nbsp;&nbsp;HTML</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCss3} />&nbsp;&nbsp;CSS</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBootstrap} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPhp} />&nbsp;&nbsp;PHP</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;JavaScript</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;AJAX</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;jQuery</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;MySQL</div>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">WeCare - Mobile UI/UX Prototype</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://www.centennialcollege.ca/"} target="_blank">
                                    Centennial College
                                </Link>
                            </p>

                            <div className="row" style={{ marginTop: "-10px" }}>
                                <div className="skill-pill">Jan 2023 - Present</div>
                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">
                                WeCare is a functional prototype specifically developed to assist registered nurses in effectively monitoring and maintaining the health status of residents. The primary objective of this prototype is to showcase the various actions that can be carried out by a registered nurse from the perspective of managing residents within their own homes.
                            </p>

                            <div className="mt-4 row">
                                <Link className='remove-link skill-pill' to="https://www.figma.com/proto/7Yy4HdY8kNJbLC62eUAz66/Venessa-Stone-(Hi-Fi-Wireframes)?node-id=34-75&starting-point-node-id=34%3A75&scaling=scale-down" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLink} />&nbsp;&nbsp;Prototype
                                </Link>
                                <Link className='remove-link skill-pill' to="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLink} />&nbsp;&nbsp;UI Style Guide
                                </Link>
                                <Link className='remove-link skill-pill' to="https://www.figma.com/file/7YrluMH8TExyEXHCH2dsN2/UI-Style-Guide?type=design&node-id=0-1&t=FMMYcWREmXqqib8I-0" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLink} />&nbsp;&nbsp;UI Specification
                                </Link>
                            </div>

                            <div className="mt-4 row">
                                <div className="skill-pill"><FontAwesomeIcon icon={faFigma} />&nbsp;&nbsp;Figma (Prototyping)</div>
                            </div>

                        </div>

                    </div>

                </main >

                <div className='mt-5 mb-4 row align-items-center justify-content-center text-content'>

                    <div className='col-md-auto text-center'>
                        <button type="button" className="theme-button" onClick={() => scrollToSection(mainContentRef)}>
                            <FontAwesomeIcon icon={faArrowUp} />&nbsp;&nbsp;Go to Top
                        </button>
                    </div>

                </div>

            </div>

            <BottomNav />

        </>
    );

};


export default Projects;
