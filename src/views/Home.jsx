import React, { useRef, useState, useEffect } from 'react';
import MainNav from '../components/MainNav';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';
import { Link } from 'react-router-dom';
import BgOne from "../assets/img/bg/abstract_01.png";
import {
    faHtml5,
    faCss3,
    faReact,
    faJs,
    faPhp,
    faBootstrap,
    faGithub,
    faFigma,
    faUikit,
    faPix,
    faJava,
    faNode,
    faAndroid,
    faBitbucket,
    faCanadianMapleLeaf
} from '@fortawesome/free-brands-svg-icons';
import {
    faMedal,
    faBriefcase,
    faGraduationCap,
    faCodeBranch,
    faCode,
    faDatabase,
    faVialVirus,
    faServer,
    faDownload,
    faArrowUp
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const param1 = "Home";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const mainContentRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${BgOne})`;
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = '#11222b';
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

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = DownloadFile;
        link.download = 'Dilshan_Liyanage_Resume.pdf';
        link.click();
    };

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

                            <p className="fs-4 poppins-extralight">Hey There! My name is</p>

                            <p className="display-4 mt-3 abril-fatface-regular">Dilshan Liyanage</p>

                            <p className="fs-5 poppins-extralight">You can call me <span className="fs-4 abril-fatface-regular">Dila..</span></p>

                            <p className="fs-2 mt-4 abril-fatface-regular">
                                Web Developer &amp; Graphic Designer
                                <br></br>
                                <span className="fs-5 poppins-extralight">(and occasionally, a photographer &amp; film-maker)</span>
                            </p>

                            <p className="poppins-extralight fs-6 mt-2">
                                <FontAwesomeIcon icon={faCanadianMapleLeaf} />&nbsp; Toronto, Canada&nbsp;
                            </p>

                            {/* <p className="poppins-extralight fs-5 mt-5">
                                I'm a passionate MERN Stack Web Developer and UI/UX Designer with a keen eye for detail. Whether it's bringing innovative designs to life or building robust web applications, I'm dedicated to delivering exceptional results.
                            </p> */}

                            <div className='mt-3 row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto text-center'>
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(skillsRef)}>
                                        <FontAwesomeIcon icon={faMedal} />&nbsp;&nbsp;Skills
                                    </button>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(experienceRef)}>
                                        <FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;Experience
                                    </button>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(educationRef)}>
                                        <FontAwesomeIcon icon={faGraduationCap} />&nbsp;&nbsp;Education
                                    </button>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <Link style={{ textDecoration: "none" }}>
                                        <button type="button" className="theme-button" onClick={downloadResume}>
                                            <FontAwesomeIcon icon={faDownload} />&nbsp;&nbsp;Resume
                                        </button>
                                    </Link>
                                </div>

                            </div>


                        </div>

                    </div>

                </main >

                <div ref={skillsRef} id="skills"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-4 fs-1 abril-fatface-regular text-center text-white custom-underline">Skills</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-5 poppins-extralight">Frontend Technologies</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faReact} />&nbsp;&nbsp;React</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;JavaScript</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBootstrap} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;jQuery</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faHtml5} />&nbsp;&nbsp;HTML</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;AJAX</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCss3} />&nbsp;&nbsp;CSS</div>

                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">Backend &amp; Middleware Technologies</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faNode} />&nbsp;&nbsp;Node.js</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faVialVirus} />&nbsp;&nbsp;REST API</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJava} />&nbsp;&nbsp;SpringBoot</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJs} />&nbsp;&nbsp;Express.js</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faJava} />&nbsp;&nbsp;Java</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPhp} />&nbsp;&nbsp;PHP</div>

                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">Databases</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faDatabase} />&nbsp;&nbsp;MongoDB</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;Oracle Xe (PL/SQL)</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCode} />&nbsp;&nbsp;MySQL</div>

                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">Version Control</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;GitHub</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faCodeBranch} />&nbsp;&nbsp;GIT</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faBitbucket} />&nbsp;&nbsp;BitBucket</div>

                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">Design and Prototyping Tools</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faFigma} />&nbsp;&nbsp;Figma</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faUikit} />&nbsp;&nbsp;Balsamiq</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPix} />&nbsp;&nbsp;Adobe Photoshop</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPix} />&nbsp;&nbsp;Adobe After Effects</div>
                                <div className="skill-pill"><FontAwesomeIcon icon={faPix} />&nbsp;&nbsp;Adobe xD</div>

                            </div>

                            <p className="mt-4 fs-5 poppins-extralight">Mobile Application Development</p>

                            <div className="row">

                                <div className="skill-pill"><FontAwesomeIcon icon={faAndroid} />&nbsp;&nbsp;Android Development (Kotlin)</div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={experienceRef} id="experience"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-4 fs-1 abril-fatface-regular text-center text-white custom-underline">Experience</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Media Developer Co-op</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://www.pearson.com/en-ca.html"} target="_blank">
                                    Pearson Canada Inc.
                                </Link>
                            </p>

                            <div className="row" style={{ marginTop: "-10px" }}>
                                <div className="skill-pill">May 2024 - Aug 2024</div>
                                <div className="skill-pill">Sep 2023 - Dec 2023</div>
                            </div>

                            <ul className="mt-4 fs-5 poppins-extralight personal-tile">

                                <li className="mb-small">
                                    Ensuring that educational products are thoroughly tested for a seamless and error-free experience for teachers and students across Canada
                                </li>

                                <li className="mb-small">
                                    Conduct both functional and user acceptance testing across various device platforms to ensure optimal performance and functionality of those features
                                </li>

                                <li className="mb-small">
                                    Enhancement of overall user experience by developing and integrating new web components into existing systems while maintaining device responsiveness
                                </li>

                                <li className="mb-small">
                                    Modify educational images that need to be included in educational materials, ensuring their visual quality is optimized for different readers
                                </li>

                                <li>
                                    Create animations using Adobe After Effects to enhance the understandability of educational content for children
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20 jumbotron">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">IT/Web Systems Developer</p>

                            <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                <Link className="remove-link" to={"https://udayaindustries.lk/"} target="_blank">
                                    Udaya Industries.
                                </Link>
                            </p>

                            <div className="row" style={{ marginTop: "-10px" }}>
                                <div className="skill-pill">Sep 2020 - Aug 2022</div>
                            </div>

                            <ul className="mt-4 fs-5 poppins-extralight personal-tile">

                                <li className="mb-small">
                                    Develop and implement a fully functional web-based quotations management system for agricultural machineries
                                </li>

                                <li className="mb-small">
                                    Analyze and maintain existing ERP, consulting with stakeholders for needs and reporting to senior team
                                </li>

                                <li className="mb-small">
                                    Gather sales data and visual reports to aid senior management as required
                                </li>

                            </ul>

                        </div>

                    </div>

                </main>

                <div ref={educationRef} id="education"> </div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-4 fs-1 abril-fatface-regular text-center text-white custom-underline">Education</p>
                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start min-h">

                                    <p className="fs-3 abril-fatface-regular">Software Engineering Technology</p>

                                    <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                        <Link className="remove-link" to={"https://www.centennialcollege.ca/"} target="_blank">
                                            Centennial College
                                        </Link>
                                    </p>

                                    <div className="row" style={{ marginTop: "-10px" }}>
                                        <div className="skill-pill">Jan 2023 - Present</div>
                                    </div>

                                    <ul className="mt-4 fs-5 poppins-extralight personal-tile">

                                        <li>
                                            Fast-Track Program with Co-op
                                        </li>

                                        <li>
                                            GPA: 4.3/4.5 (A+)
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20 jumbotron">

                                <div className="row content-wrapper text-start min-h">

                                    <p className="fs-3 abril-fatface-regular">Bachelor's in Information Technology</p>

                                    <p className="fs-5 poppins-light" style={{ marginTop: "-15px" }}>
                                        <Link className="remove-link" to={"https://ucsc.cmb.ac.lk/"} target="_blank">
                                            University of Colombo School of Computing
                                        </Link>
                                    </p>

                                    <div className="row" style={{ marginTop: "-10px" }}>
                                        <div className="skill-pill">Jan 2017 - Apr 2021</div>
                                    </div>

                                    <ul className="mt-4 fs-5 poppins-extralight personal-tile">

                                        <li>
                                            Graduated in July 2021
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

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

}

export default Home;
