import { useRef, useState, useEffect } from 'react';
import SkillIcon from '../components/SkillIcon';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import BgOne from "../assets/img/bg/abstract_01.jpg";
import MainLogo from '../assets/img/dila_logo.png';

import FigmaLogo from "../assets/img/skills/figma-logo.png";

import UdayaLogo from "../assets/img/experience/udaya_logo.png";
import PearsonLogo from "../assets/img/experience/pearson_logo.png";
import WimtachLogo from "../assets/img/experience/wimtach-logo.png";
import TenzrHealthLogo from "../assets/img/experience/tenzrhealth_logo.png";
import SeyonTaxLogo from "../assets/img/experience/seyontax_logo.png";

import CentennialLogo from "../assets/img/education/centennial_logo.png";
import UCSCLogo from "../assets/img/education/ucsc_logo.png";

import LinkIcon from "../assets/img/skills/link-logo.png";
import GlobeIcon from "../assets/img/skills/globe-logo.png";
import MedalLogo from "../assets/img/skills/medal-logo.png";
import CalendarLogo from "../assets/img/skills/calendar-logo.png";
import GraduateLogo from "../assets/img/skills/graduation-logo.png";

import { faArrowUp, faCircle } from '@fortawesome/free-solid-svg-icons';
import NameCard from '../components/NameCard';
import SkillsCard from '../components/SkillsCard';

const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const skillsRef = useRef(null);
    const devProjectsRef = useRef(null);
    const uxProjectsRef = useRef(null);
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
                                About Me
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
                                onClick={() => scrollToSection(uxProjectsRef)}>
                                UX Projects
                            </button>

                            <button
                                type="button"
                                className="nav-link raleway-light" style={{ color: "#fff" }}
                                onClick={() => scrollToSection(devProjectsRef)}>
                                Dev Projects
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

                        <NameCard />

                    </div>

                </main >

                <div ref={skillsRef} id="skills"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">SKILLS</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <SkillsCard />

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
                                    <img className="exp-icon" src={WimtachLogo} alt={WimtachLogo} />
                                </div>

                                <div className="col-md-11">

                                    <p className="fs-5 raleway-semibold">UI/UX Designer </p>

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
                                Focused on UI/UX design and prototyping with Figma while working on multiple clients/projects simultaneously, supporting front end development to enhance user interfaces, and overall functionality
                            </div>

                            <div className="accordion mt-4" id="tenzrAccordian">

                                <div className="accordion-item frosted-glass-mid br-20" style={{ border: "none" }}>

                                    <h2 className="accordion-header" style={{ border: "none" }}>

                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#tenzrCollapse"
                                            aria-expanded="false"
                                            style={{
                                                background: "transparent",
                                                boxShadow: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            }}
                                        >

                                            <img
                                                className="exp-icon"
                                                src={TenzrHealthLogo}
                                                alt={TenzrHealthLogo}
                                                style={{ width: "2.5rem" }}
                                            />

                                            <p className="remove-link fs-5 raleway-semibold" style={{ margin: 0 }}>Tenzr Health</p>

                                        </button>

                                    </h2>

                                    <div
                                        id="tenzrCollapse"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#tenzrAccordian"
                                        style={{ border: "none" }}
                                    >

                                        <div
                                            className="accordion-body text-start"
                                            style={{ background: "transparent", border: "none" }}
                                        >
                                            <ul className='text-start raleway-light fs-6'>

                                                <li className="mb-small">
                                                    Collaborated with Tenzr Health, a digital health company based in British Columbia, to improve the web and mobile interface of their rehabilitation platform
                                                </li>

                                                <li className="mb-small">
                                                    Designed responsive and clinician friendly UI components for key modules, simplifying complex rehabilitation workflows for both clinicians and patients
                                                </li>

                                                <li className="mb-small">
                                                    Developed user centered UX flows and high fidelity UI for a new print preview interface created from the ground up to address a missing capability within the platform
                                                </li>

                                                <li className="mb-small">
                                                    Designed and iterated web and mobile components based on feedback from clinicians, the UI lead, the product manager, and the customer success team, ensuring alignment with real workflow needs
                                                </li>

                                                <li className="mb-small">
                                                    Conducted usability focused refinements to improve clarity, navigation, and workflow efficiency across both desktop and mobile views
                                                </li>

                                                <li className="mb-small">
                                                    Documented UI patterns and interaction rules to ensure consistent implementation across the product and support smoother developer handoff
                                                </li>

                                            </ul>

                                            <Link
                                                style={{ textDecoration: "none" }}
                                                type="button"
                                                className="skill-pill"
                                                to="https://www.tenzrhealth.com/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Tenzr Health Website
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="accordion mt-4" id="seyontaxAccordion">

                                <div className="accordion-item frosted-glass-mid br-20" style={{ border: "none" }}>

                                    <h2 className="accordion-header" style={{ border: "none" }}>

                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#seyonCollapse"
                                            aria-expanded="false"
                                            style={{
                                                background: "transparent",
                                                boxShadow: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            }}
                                        >

                                            <img
                                                className="exp-icon"
                                                src={SeyonTaxLogo}
                                                alt={SeyonTaxLogo}
                                                style={{ width: "2.5rem" }}
                                            />

                                            <p className="remove-link fs-5 raleway-semibold" style={{ margin: 0 }}>SeyonTax</p>

                                        </button>

                                    </h2>

                                    <div
                                        id="seyonCollapse"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#seyontaxAccordion"
                                        style={{ border: "none" }}
                                    >

                                        <div
                                            className="accordion-body text-start"
                                            style={{ background: "transparent", border: "none" }}
                                        >
                                            <ul className='text-start raleway-light fs-6'>

                                                <li className="mb-small">
                                                    Designed modern, organized UI layouts for online tax filing and financial service workflows
                                                </li>

                                                <li className="mb-small">
                                                    Created wireframes, user flows, and prototypes that simplified document collection, form completion, and task progress tracking
                                                </li>

                                                <li className="mb-small">
                                                    Improved clarity and usability for both desktop and mobile interfaces, focusing on error handling and reducing user friction
                                                </li>

                                                <li className="mb-small">
                                                    Collaborated with developers to ensure accurate implementation of interaction details and responsive behavior
                                                </li>

                                                <li className="mb-small">
                                                    Contributed to the development of a consistent design system shared across the tax filing modules
                                                </li>

                                            </ul>

                                            <Link
                                                style={{ textDecoration: "none" }}
                                                type="button"
                                                className="skill-pill"
                                                to="https://seyontax.ca/"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;SeyonTax Website
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={PearsonLogo} alt={PearsonLogo} />
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

                                Contributed to the development, testing, and enhancement of educational products under the K-12 Division, ensuring engaging and seamless user experiences for over 10000 teachers and students across Canada

                                <ul className="personal-tile mt-3">

                                    <li className="mb-small">
                                        Evaluated educational products to ensure a seamless, error-free experience for users, reducing reported issues by 30%.
                                    </li>

                                    <li className="mb-small">
                                        Conducted functional and user acceptance testing across multiple device platforms
                                    </li>

                                    <li className="mb-small">
                                        Enhanced user experience by developing and integrating responsive web components using Vue.js
                                    </li>

                                    <li className="mb-small">
                                        Optimized educational images for inclusion in learning materials
                                    </li>

                                    <li className="mb-small">
                                        Created engaging animations using Adobe After Effects to simplify concepts for children
                                    </li>

                                    <li className="mb-small">
                                        Collaborated with cross functional teams and presented UX findings to support product decisions and align improvements with business needs
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <div className="row">

                                <div className="col-md-1 exp-col">
                                    <img className="exp-icon" src={UdayaLogo} alt={UdayaLogo} />
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
                                        Developed and implemented a fully functional web-based quotations management system for agricultural machinery, reducing quotation processing time by 50%
                                    </li>

                                    <li className="mb-small">
                                        Analyzed and maintained the existing ERP system, collaborating with stakeholders to gather requirements and communicate design and technical needs
                                    </li>

                                    <li className="mb-small">
                                        Collected and visualized sales data to assist senior management in decision-making, increasing data driven insights and enabling 10% more accurate forecasting
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </main>

                {/* UX PROJECTS SECTION */}

                <div ref={uxProjectsRef} id="projects"> </div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">UX PROJECTS</p>
                    </div>

                    <div className="row">

                        <div className="col-md-6">

                            <div className="mt-3 frosted-glass br-20">

                                <div className="content-wrapper text-start">

                                    <div className="row">

                                        <div className="project-card">
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#21a0eb" }} /> <FontAwesomeIcon icon={faCircle} style={{ color: "#fee56c", marginLeft: "-10px" }} />&nbsp;&nbsp;Digital Rehabilitation Platform <span className="raleway-light">| Tenzr Health</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Worked with product and design teams at Tenzr Health to enhance therapist and patient experiences across web and mobile. Designed a new print preview feature from concept to UI, refined components through clinician feedback, created reusable patterns for consistency, and improved workflows by addressing edge cases and usability gaps.
                                        </div>

                                        <div className="mb-3 raleway-thin fs-7">
                                            Note: Design assets are confidential due to NDA. Sanitized UI samples available upon request.
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://www.tenzrhealth.com/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Website
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://app.dev.tenzrhealth.com/login"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Platform App
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
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Payroll Client <span className="raleway-light">| SeyonTax</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Designed the payroll and tax platform from the ground up, defining UI architecture, workflows, and a shared design system. Created wireframes and prototypes that streamlined document submission, form completion, and progress tracking, while improving usability across desktop and mobile through clear interactions and reduced friction.
                                        </div>

                                        <div className="mb-3 raleway-thin fs-7">
                                            Note: Design assets are confidential due to NDA. Sanitized UI samples available below.
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://seyontax.ca/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={GlobeIcon} />&nbsp;&nbsp;Website
                                        </Link>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://www.figma.com/design/fBJYhatD5G3lzTktsDhUU9/Payroll-%7C-Sanitized-for-view?node-id=0-1&t=YN1E0yPlR7ECZIQa-1"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI Design
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
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Website Revamp <span className="raleway-light">| WIMTACH</span></p>
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
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI Design
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
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Website Tweaks <span className="raleway-light">| Dolce & Gourmando </span></p>
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
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI Design
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
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Untitled Towing Agent <span className="raleway-light">| Undisclosed Client</span></p>
                                            <div className="tooltip-text raleway-semibold">Solo Project</div>
                                        </div>

                                        <div className="mb-3 raleway-light fs-6">
                                            Designed a dispatch and operations dashboard for an undisclosed towing service, focused on real time job tracking, driver coordination, and performance insights.
                                        </div>

                                        <Link
                                            style={{ textDecoration: "none" }}
                                            type="button"
                                            className="skill-pill"
                                            to="https://www.figma.com/design/5rxk7Krcww91fikaCwS1g4/Undisclosed-Towing-Agent-%7C-Sanitized-for-view--Copy-?node-id=0-1&t=KhhZH2mBXMUmhG7D-1"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;UI Design
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
                                            Wireframed a user-friendly online grocery ordering platform that allows customers to easily browse, search, and purchase groceries
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
                                            to="https://www.figma.com/design/zq7gFJaE0GQ82HeXqBH1HR/GroceryDeliveryApplication?node-id=0-1&t=YE21fAhp4TZZdfWL-1"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <SkillIcon path={FigmaLogo} />&nbsp;&nbsp;Wireframes
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                {/* DEV PROJECTS SECTION */}

                <div ref={devProjectsRef} id="projects"> </div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 neon-text text-center text-white custom-underline">DEV PROJECTS</p>
                    </div>

                    <div className="row">

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
                                            <p className="fs-6 raleway-semibold"><FontAwesomeIcon icon={faCircle} style={{ color: "#59e33d" }} />&nbsp;&nbsp;Factory Management System <span className="raleway-light">| Udaya Industries</span></p>
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

                        <div className='skill-pill neon-text' onClick={() => scrollToSection(mainContentRef)}>
                            <FontAwesomeIcon icon={faArrowUp} />&nbsp;&nbsp;Go to Top
                        </div>

                    </div>

                </main>

            </div>

            <BottomNav />

        </>

    );

}

export default Home;