import React, { useRef, useState, useEffect } from 'react';
import SkillIcon from '../components/SkillIcon';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';
import { Link } from 'react-router-dom';
import BgOne from "../assets/img/bg/abstract_01.jpg";
import MeOne from "../assets/img/side-2.png";
import MainLogo from '../assets/img/dila_logo.png';

import ReactLogo from "../assets/img/skills/react-logo.png";
import JSLogo from "../assets/img/skills/js-logo.png";
import BootstrapLogo from "../assets/img/skills/bootstrap-logo.png";
import JQueryLogo from "../assets/img/skills/jquery-logo.png";
import HTML5Logo from "../assets/img/skills/html5-logo.png";
import CCS3Logo from "../assets/img/skills/css3-logo.png";
import JSONLogo from "../assets/img/skills/json-logo.png";
import AJAXLogo from "../assets/img/skills/ajax-logo.png";
import EJSLogo from "../assets/img/skills/ejs-logo.png";

import NodeJSLogo from "../assets/img/skills/nodejs-logo.png";
import RESTAPILogo from "../assets/img/skills/rest-api-logo.png";
import SpringbootLogo from "../assets/img/skills/springboot-logo.png";
import ExpressJSLogo from "../assets/img/skills/expressjs-logo.png";
import JavaLogo from "../assets/img/skills/java-logo.png";
import PHPLogo from "../assets/img/skills/php-logo.png";
import NETCoreLogo from "../assets/img/skills/netcore-logo.png";

import MongoDBLogo from "../assets/img/skills/mongodb-logo.png";
import OracleXELogo from "../assets/img/skills/oraclexe-logo.png";
import MySQLLogo from "../assets/img/skills/mysql-logo.png";
import SQLServerLogo from "../assets/img/skills/sqlserver-logo.png";

import JenkinsLogo from "../assets/img/skills/jenkins-logo.png";
import DockerLogo from "../assets/img/skills/docker-logo.png";
import AWSLogo from "../assets/img/skills/aws-logo.png";

import GitLogo from "../assets/img/skills/git-logo.png";
import BitBucketLogo from "../assets/img/skills/bitbucket-logo.png";

import FigmaLogo from "../assets/img/skills/figma-logo.png";
import PhotoshopLogo from "../assets/img/skills/photoshop-logo.png";
import AfterEffectsLogo from "../assets/img/skills/aftereffects-logo.png";
import XDLogo from "../assets/img/skills/adobexd-logo.png";

import UdayaLogo from "../assets/img/experience/udaya_logo.png";
import PearsonLogo from "../assets/img/experience/pearson_logo.png";
import WimtachLogo from "../assets/img/experience/wimtach-logo.png";

import CentennialLogo from "../assets/img/education/centennial_logo.png";
import UCSCLogo from "../assets/img/education/ucsc_logo.png";

import LinkIcon from "../assets/img/skills/link-logo.png";
import GlobeIcon from "../assets/img/skills/globe-logo.png";
import MedalLogo from "../assets/img/skills/medal-logo.png";
import CalendarLogo from "../assets/img/skills/calendar-logo.png";
import GraduateLogo from "../assets/img/skills/graduation-logo.png";

import { faCloudArrowDown, faArrowUp, faPaperPlane, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
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
        document.body.style.backgroundColor = "#11222b";
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

            <nav className="navbar navbar-expand-lg fixed-top frosted-glass nav-container">
                <div className="container-fluid justify-content-lg-center">

                    <Link className={`navbar-brand`}>
                        <img src={MainLogo} alt="Dila Logo" width="45" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbar-center flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(mainContentRef)}>
                                Home
                            </button>

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(skillsRef)}>
                                Skills
                            </button>

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(experienceRef)}>
                                Experience
                            </button>

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(projectsRef)}>
                                Projects
                            </button>

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(educationRef)}>
                                Education
                            </button>

                        </ul>
                    </div>
                </div>
            </nav>

            <div ref={mainContentRef} id="main_content"></div>

            <div className="main-content-area">

                <main className="custom-container" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="frosted-glass br-20">

                        <div className="content-wrapper">

                            <p className="fs-4 raleway-light">Hey There! My name is</p>

                            <p className="display-3 mt-1 neon-text">DILSHAN LIYANAGE</p>

                            <a className="mt-3" style={{ textDecoration: 'none' }}>
                                <img src={MeOne} alt={MeOne} style={{ width: '12rem' }} />
                            </a>

                            <p className="fs-1 mt-4 neon-text"> WEB DEVELOPER &amp; UI/UX DESIGNER</p>

                            <p className="fs-5 raleway-light">...and occasionally, a photographer &amp; graphic designer!</p>

                            <div className='mt-4 row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto text-center'>
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        type="button"
                                        className="theme-button"
                                        to="https://www.linkedin.com/in/dilaliyanage/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#78bbff" }} />&nbsp;&nbsp;LinkedIn
                                    </Link>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        type="button"
                                        className="theme-button"
                                        to="https://github.com/dilshanliyanage1000/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} style={{ color: "#bebaff" }} />&nbsp;&nbsp;GitHub
                                    </Link>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <Link
                                        style={{ textDecoration: "none" }}
                                        type="button"
                                        className="theme-button"
                                        to="mailto:dilshanliyanage@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#f5da62" }} />&nbsp;&nbsp;Email
                                    </Link>
                                </div>

                                <div className='col-md-auto text-center'>
                                    <Link style={{ textDecoration: "none" }}>
                                        <button type="button" className="theme-button" onClick={downloadResume}>
                                            <FontAwesomeIcon icon={faCloudArrowDown} style={{ color: "#8bbbc7" }} />&nbsp;&nbsp;Resume
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
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">SKILLS</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-6 raleway-regular">Front-End Technologies</p>

                            <div className="row low-margin">

                                <div className="skill-pill"><SkillIcon path={ReactLogo} />&nbsp;&nbsp;React</div>
                                <div className="skill-pill"><SkillIcon path={JSLogo} />&nbsp;&nbsp;JavaScript</div>
                                <div className="skill-pill"><SkillIcon path={BootstrapLogo} />&nbsp;&nbsp;Bootstrap</div>
                                <div className="skill-pill"><SkillIcon path={JQueryLogo} />&nbsp;&nbsp;jQuery</div>
                                <div className="skill-pill"><SkillIcon path={HTML5Logo} />&nbsp;&nbsp;HTML</div>
                                <div className="skill-pill"><SkillIcon path={CCS3Logo} />&nbsp;&nbsp;CSS</div>
                                <div className="skill-pill"><SkillIcon path={JSONLogo} />&nbsp;&nbsp;JSON</div>
                                <div className="skill-pill"><SkillIcon path={EJSLogo} />&nbsp;&nbsp;EJS</div>
                                <div className="skill-pill"><SkillIcon path={AJAXLogo} />&nbsp;&nbsp;AJAX</div>

                            </div>

                            <p className="mt-4 fs-6 raleway-regular">Back-End Technologies</p>

                            <div className="row low-margin">

                                <div className="skill-pill"><SkillIcon path={NodeJSLogo} />&nbsp;&nbsp;Node.js</div>
                                <div className="skill-pill"><SkillIcon path={RESTAPILogo} />&nbsp;&nbsp;REST API</div>
                                <div className="skill-pill"><SkillIcon path={SpringbootLogo} />&nbsp;&nbsp;SpringBoot</div>
                                <div className="skill-pill"><SkillIcon path={ExpressJSLogo} />&nbsp;&nbsp;Express</div>
                                <div className="skill-pill"><SkillIcon path={JavaLogo} />&nbsp;&nbsp;Java</div>
                                <div className="skill-pill"><SkillIcon path={PHPLogo} />&nbsp;&nbsp;PHP</div>
                                <div className="skill-pill"><SkillIcon path={NETCoreLogo} />&nbsp;&nbsp;ASP .NET Core</div>

                            </div>

                            <p className="mt-4 fs-6 raleway-regular">Database Management</p>

                            <div className="row low-margin">

                                <div className="skill-pill"><SkillIcon path={MongoDBLogo} />&nbsp;&nbsp;MongoDB</div>
                                <div className="skill-pill"><SkillIcon path={OracleXELogo} />&nbsp;&nbsp;Oracle Xe</div>
                                <div className="skill-pill"><SkillIcon path={MySQLLogo} />&nbsp;&nbsp;MySQL</div>
                                <div className="skill-pill"><SkillIcon path={SQLServerLogo} />&nbsp;&nbsp;Microsoft SQL Server</div>

                            </div>

                            <p className="mt-4 fs-6 raleway-regular">CI/CD & Cloud Services</p>

                            <div className="row low-margin">

                                <div className="skill-pill"><SkillIcon path={JenkinsLogo} />&nbsp;&nbsp;Jenkins</div>
                                <div className="skill-pill"><SkillIcon path={DockerLogo} />&nbsp;&nbsp;Docker</div>
                                <div className="skill-pill"><SkillIcon path={AWSLogo} />&nbsp;&nbsp;Amazon Web Services (AWS)</div>

                            </div>

                            <p className="mt-4 fs-6 raleway-regular">Version Control</p>

                            <div className="row low-margin">

                                <div className="skill-pill"><FontAwesomeIcon icon={faGithub} style={{ color: "#bebaff" }} />&nbsp;&nbsp;GitHub</div>
                                <div className="skill-pill"><SkillIcon path={GitLogo} />&nbsp;&nbsp;GIT</div>
                                <div className="skill-pill"><SkillIcon path={BitBucketLogo} />&nbsp;&nbsp;BitBucket</div>

                            </div>

                            <p className="mt-4 fs-6 raleway-regular">UI/UX Designing &amp; Multimedia</p>

                            <div className="row">

                                <div className="skill-pill"><SkillIcon path={FigmaLogo} />&nbsp;&nbsp;Figma</div>
                                <div className="skill-pill"><SkillIcon path={PhotoshopLogo} />&nbsp;&nbsp;Adobe Photoshop</div>
                                <div className="skill-pill"><SkillIcon path={AfterEffectsLogo} />&nbsp;&nbsp;Adobe After Effects</div>
                                <div className="skill-pill"><SkillIcon path={XDLogo} />&nbsp;&nbsp;Adobe xD</div>

                            </div>

                            {/* <p className="mt-4 fs-5 raleway-light">Mobile Development</p>

                            <div className="row">

                                <div className="skill-pill"><SkillIcon path={KotlinLogo} />&nbsp;&nbsp;Kotlin</div>

                            </div> */}

                        </div>

                    </div>

                </main>

                <div ref={experienceRef} id="experience"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">EXPERIENCE</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={WimtachLogo} alt={WimtachLogo} style={{ width: "4rem" }} />
                                </div>

                                <div className="col-md-11">

                                    <p className="fs-5 raleway-semibold">Student Researcher – UI/UX Designer </p>

                                    <p className="fs-6 raleway-light low-margin-m">
                                        <Link className="remove-link" to={"https://wimtach.centennialcollege.ca/"} target="_blank">
                                            WIMTACH (Centennial College)
                                        </Link>
                                    </p>

                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;Sep 2024 - Present</div>
                            </div>

                            <div className="mt-4 raleway-light fs-6">

                                Focused on UI/UX design and prototyping with Figma while working on multiple projects simultaneously, supporting front-end development to enhance user interfaces and overall functionality

                                <ul className="personal-tile mt-3">

                                    <li className="mb-small">
                                        Designed and prototyped user interfaces using Figma to create engaging and intuitive digital experiences
                                    </li>

                                    <li className="mb-small">
                                        Collaborated with the development team to assist in front-end development, ensuring seamless integration of design and functionality
                                    </li>

                                    <li className="mb-small">
                                        Conducted user research and testing to optimize UI/UX strategies based on feedback
                                    </li>

                                    <li className="mb-small">
                                        Successfully balanced competing project priorities, delivering high-quality outcomes across multiple initiatives
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={PearsonLogo} alt={PearsonLogo} style={{ width: "4rem" }} />
                                </div>

                                <div className="col-md-11">

                                    <p className="fs-5 raleway-semibold">Media Developer Co-op</p>

                                    <p className="fs-6 raleway-light low-margin-m">
                                        <Link className="remove-link" to={"https://www.pearson.com/en-ca.html"} target="_blank">
                                            Pearson Canada Inc.
                                        </Link>
                                    </p>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;Sep 2023 - Dec 2023</div>
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;May 2024 - Aug 2024</div>
                            </div>

                            <div className="mt-4 raleway-light fs-6">

                                Contributed to the development, testing, and enhancement of educational products under the K-12 Division, ensuring engaging and seamless user experiences for teachers and students across Canada

                                <ul className="personal-tile mt-3">

                                    <li className="mb-small">
                                        Evaluated educational products to ensure a seamless, error-free experience for users
                                    </li>

                                    <li className="mb-small">
                                        Conducted functional and user acceptance testing across multiple device platforms
                                    </li>

                                    <li className="mb-small">
                                        Enhanced user experience by developing and integrating responsive web components
                                    </li>

                                    <li className="mb-small">
                                        Optimized educational images for inclusion in learning materials
                                    </li>

                                    <li className="mb-small">
                                        Created engaging animations using Adobe After Effects to simplify concepts for children
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20 jumbotron">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={UdayaLogo} alt={UdayaLogo} style={{ width: "4rem" }} />
                                </div>

                                <div className="col-md-11">
                                    <p className="fs-5 raleway-semibold">IT/Web Systems Developer</p>

                                    <p className="fs-6 raleway-light low-margin-m">
                                        <Link className="remove-link" to={"https://udayaindustries.lk/"} target="_blank">
                                            Udaya Industries
                                        </Link>
                                    </p>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;Sep 2020 - Aug 2022</div>
                            </div>

                            <div className="mt-4 raleway-light fs-6">

                                Developed and maintained web-based systems to streamline operations, focusing on quotations management, ERP maintenance, and sales data reporting

                                <ul className="personal-tile mt-3">

                                    <li className="mb-small">
                                        Developed and implemented a fully functional web-based quotations management system for agricultural machinery
                                    </li>

                                    <li className="mb-small">
                                        Analyzed and maintained the existing ERP system, collaborating with stakeholders to gather requirements and report progress to the senior team
                                    </li>

                                    <li className="mb-small">
                                        Collected and visualized sales data to assist senior management in decision-making.
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={projectsRef} id="projects"> </div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">PROJECTS</p>
                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;WIMTACH <span className="raleway-light">| Website Redesign</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Designed and developed the official website for WIMTACH, ensuring consistency with brand identity and functionality across devices
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://wimtach.centennialcollege.ca/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Website
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://www.figma.com/design/7w2rsR4ZqMs1GKHPIDUXHl/WIMTACH-Website?node-id=0-1&p=f&t=jxJtU9vCSyhERTdy-0"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI/UX Design
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;PixShare <span className="raleway-light">| An Instagram Alternative</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            PixShare, a post-sharing platform inspired by Instagram, allowing users to post images, like, and comment
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/dilshanliyanage1000/pix-share"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub (Client)
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/dilshanliyanage1000/PixshareAPI"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub (Server)
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;WatchFlix! <span className="raleway-light">| Movie Streaming Platform</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            WatchFlix!, a community-driven movie streaming platform inspired by Netflix where users can upload, review, and rate movies
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/dilshanliyanage1000/WatchFlix"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Dolce & Gourmando <span className="raleway-light">| Website Redesign</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Collaborated with the client to redesign, prototype, and enhance their website, focusing on usability and brand alignment.
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://dolcegourmando.com/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Website
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://www.figma.com/design/UyDK0A795CFVsY7DOsytO7/Dolce-Gourmando-(Client)?t=PDwoPB7cRLIo2tIF-0"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI/UX Design
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#21a0eb" }} /> <FontAwesomeIcon icon={faCircle} style={{ color: "#fee56c", marginLeft: "-10px" }} />&nbsp;&nbsp;Vital+ <span className="raleway-light">| Medical Tracker</span></p>
                                            <div className="tooltip-text raleway-semibold">Collaborative Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Vital Plus is an innovative application designed to assist nurses in continuously monitoring and supporting patients
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://main--vital-plus.netlify.app/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Live Site
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/haneefmhmmd/Vital-Plus"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#21a0eb" }} /> <FontAwesomeIcon icon={faCircle} style={{ color: "#fee56c", marginLeft: "-10px" }} />&nbsp;&nbsp;SimplyOrganic <span className="raleway-light">| Grocery Ordering Application</span></p>
                                            <div className="tooltip-text raleway-semibold">Collaborative Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            A user-friendly online grocery ordering platform that allows customers to easily browse, search, and purchase groceries
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://simply-organic-frontend.onrender.com/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Live Site
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/Simply-Organic/simply-organic"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Portfolio <span className="raleway-light">| Personal Website</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            This website is personal portfolio created using React to highlight skills, projects, and professional accomplishments
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://dilshanliyanage1000.github.io/portfolio/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Live Site
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/dilshanliyanage1000/portfolio/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Factory Management System</p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Built a fully functional data management system for an agricultural machinery production factory to streamline production workflows
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://github.com/dilshanliyanage1000/fms/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={LinkIcon} />&nbsp;&nbsp;GitHub
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={educationRef} id="education"> </div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">EDUCATION</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={CentennialLogo} alt={CentennialLogo} style={{ width: "4rem" }} />
                                </div>

                                <div className="col-md-11">

                                    <p className="fs-5 raleway-semibold">Software Engineering Technology (Fast Track with Co-op)</p>

                                    <p className="fs-6 raleway-light low-margin-m">
                                        <Link className="remove-link" to={"https://www.centennialcollege.ca/"} target="_blank">
                                            Centennial College (Progress Campus)
                                        </Link>
                                    </p>

                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;Jan 2023 - Dec 2024</div>
                                <div className="skill-pill"><SkillIcon path={GraduateLogo} />&nbsp;&nbsp;Graduated in 2024</div>
                                <div className="skill-pill"><SkillIcon path={MedalLogo} />&nbsp;&nbsp;High Honors (GPA 4.3/4.5)</div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20 jumbotron">

                        <div className="row content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={UCSCLogo} alt={UCSCLogo} />
                                </div>

                                <div className="col-md-11">

                                    <p className="fs-5 raleway-semibold">Bachelor of Information Technology</p>

                                    <p className="fs-6 raleway-light low-margin-m">
                                        <Link className="remove-link" to={"https://ucsc.cmb.ac.lk/"} target="_blank">
                                            University of Colombo : School of Computing
                                        </Link>
                                    </p>

                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="skill-pill"><SkillIcon path={CalendarLogo} />&nbsp;&nbsp;Jan 2017 - Apr 2021</div>
                                <div className="skill-pill"><SkillIcon path={GraduateLogo} />&nbsp;&nbsp;Graduated in 2021</div>
                            </div>

                        </div>

                    </div>

                </main>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className='mt-5 row align-items-center justify-content-center text-content'>

                        <div className='col-md-auto text-center'>
                            <button type="button" className='theme-button neon-text' onClick={() => scrollToSection(mainContentRef)}>
                                <FontAwesomeIcon icon={faArrowUp} />&nbsp;&nbsp;Go to Top
                            </button>
                        </div>

                    </div>

                </main>

            </div>

            <BottomNav />

        </>

    );

}

export default Home;
