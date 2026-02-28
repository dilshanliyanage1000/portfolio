import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Accessibility, Code, GitBranch, Handshake, Layers, PencilRuler } from 'lucide-react';

import SkillIcon from '../components/SkillIcon';
import NavigationBar from '../components/NavigationBar';
import FooterComponent from '../components/FooterComponent';

import NewMe from '../assets/img/new-me.png';
import MainLogo from '../assets/img/dila_logo_bw.png';

import TenzrHealthLogo from "../assets/img/skills/tenzr-health.png";
import SeyonTaxLogo from "../assets/img/skills/seyon-tax.png";
import CentennialCollegeLogo from "../assets/img/skills/centennial-college.jpg";
import GlobeIcon from "../assets/img/skills/globe-logo.png";
import FigmaIcon from "../assets/img/skills/figma-logo.png";

const Home = () => {

    const WorkRef = useRef(null);
    const aboutMeRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const headlines = [
        <>I design <span className="color-gradient-animation">scalable UX systems</span> for complex web and mobile platforms.</>,
        <>Built with <span className="color-gradient-animation">precision and accessibility</span> in mind.</>,
        <>Helping products evolve without losing <span className="color-gradient-animation">clarity or consistency</span>.</>
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headlines.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [headlines.length]);

    return (

        <>

            {/* NAVIGATION BAR */}

            <NavigationBar />

            {/* NAVIGATION BAR END */}

            {/* BODY */}

            <div>

                {/* LANDING CARD */}

                <div className="full-screen-view-height">

                    <div className="custom-container">

                        <p className="mb-4 fs-2 gsf-light text-black">
                            Hello, I&apos;m Dilshan! <span className="wave">👋🏼</span>
                        </p>

                        <p
                            key={index}
                            className="display-3 gsf-medium text-black fade-hero"
                        >
                            {headlines[index]}
                        </p>

                        <div className="hero-subcopy-wrapper">
                            <p className="mt-4 fs-4 gsf-light">
                                Turning fragmented workflows into structured, accessible, and implementation ready product experiences.
                            </p>
                        </div>

                        <div className='mt-5'>

                            <button
                                type="button"
                                className="fs-6 mt-2 gsf-regular primary-gradient-button me-2"
                                onClick={() => scrollToSection(WorkRef)}
                                rel="noopener noreferrer">
                                Explore My Work&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff" }} />
                            </button>

                            <button
                                style={{ textDecoration: "none" }}
                                type="button"
                                className="fs-6 mt-2 gsf-regular primary-gradient-outline-button"
                                onClick={() => scrollToSection(aboutMeRef)}
                                rel="noopener noreferrer">
                                <span className="color-gradient-animation">About Me</span>&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
                            </button>

                        </div>

                        <p className="mt-5 fs-5 gsf-light text-mid-color">Trusted across healthcare, enterprise, and education platforms.</p>

                    </div>

                </div>

                {/* LANDING END */}

                {/* FEATURED WORK */}

                <div ref={WorkRef} id="work"></div>

                <div className="custom-container">

                    <p className='gsf-semibold fs-2 mb-5 section-underline'>Featured Work</p>

                    <div className='custom-card'>

                        <div className="mb-2 row align-items-center">
                            < div className="col-auto">
                                <p className="gsf-medium fs-5 mb-0">
                                    Digital Rehabilitation Platform
                                </p>
                            </div>
                            <div className="col-auto line-separator">
                                <p className="gsf-regular fs-4 mb-0" style={{ color: "#BBAFCE" }}>
                                    |
                                </p>
                            </div>
                            <div className="col-auto">
                                <img
                                    className='work-image'
                                    src={TenzrHealthLogo}
                                    alt="Tenzr Health Logo"
                                    style={{ width: "10rem" }}
                                />
                            </div>
                        </div>

                        <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#ECE6F7" }}>Product UX Contributor</p>

                        <p className='fs-6' style={{ marginBottom: "8px" }}>Contributed to the evolution of a digital health platform used by therapists and patients across web and mobile environments</p>

                        <ul className='fs-6'>
                            <li>Led UX definition for a new print preview workflow, identifying system gaps and designing the feature architecture from concept to validated prototype</li>
                            <li>Mapped complex therapist workflows, uncovered edge cases, and improved interface clarity across clinical interactions</li>
                            <li>Established reusable UI patterns and documented structured component behaviors to support cross platform consistency</li>
                            <li>Partnered with product and engineering to validate responsive logic, accessibility compliance, and real world usage constraints</li>
                            <span className='gsf-extralight-italic'>Note: Design assets are confidential due to NDA. Sanitized UI samples available upon request</span>
                        </ul>

                        <Link
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

                    <div className='custom-card mt-3'>

                        <div className="mb-2 row align-items-center">
                            < div className="col-auto">
                                <p className="gsf-medium fs-5 mb-0">
                                    Payroll & Tax Platform
                                </p>
                            </div>
                            <div className="col-auto line-separator">
                                <p className="gsf-regular fs-4 mb-0" style={{ color: "#BBAFCE" }}>
                                    |
                                </p>
                            </div>
                            <div className="col-auto">
                                <img
                                    className='work-image'
                                    src={SeyonTaxLogo}
                                    alt={SeyonTaxLogo}
                                    style={{ width: "10rem" }}
                                />
                            </div>
                        </div>

                        <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#F8F2DC" }}>UX Architect</p>

                        <p className='fs-6' style={{ marginBottom: "8px" }}>Defined the UX architecture and foundational design system for a payroll and tax platform built from the ground up</p>

                        <ul className='fs-6'>
                            <li>Designed end to end user flows for tax filing, document collection, and task progress tracking, reducing workflow friction</li>
                            <li>Structured UI architecture to support scalable modules and consistent financial form patterns</li>
                            <li>Introduced standardized components and shared interaction models across filing modules</li>
                            <li>Collaborated with development to ensure implementation accuracy, responsive behavior, and error handling clarity</li>
                            <span className='gsf-extralight-italic'>Note: Design assets are confidential due to NDA. Sanitized UI samples available below</span>
                        </ul>

                        <Link
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
                            to="https://www.figma.com/design/fBJYhatD5G3lzTktsDhUU9/Payroll-%7C-Sanitized-for-view?node-id=0-1&t=n725xPnPYk2PF9vU-1"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SkillIcon path={FigmaIcon} />&nbsp;&nbsp;UI Design (Figma)
                        </Link>

                    </div>

                    <div className='custom-card mt-3'>

                        <div className="mb-2 row align-items-center">
                            < div className="col-auto">
                                <p className="gsf-medium fs-5 mb-0">
                                    My Portfolio Website
                                </p>
                            </div>
                            <div className="col-auto line-separator">
                                <p className="gsf-regular fs-4 mb-0" style={{ color: "#BBAFCE" }}>
                                    |
                                </p>
                            </div>
                            <div className="col-auto">
                                <img
                                    className='work-image'
                                    src={MainLogo}
                                    alt={MainLogo}
                                    style={{ width: "2rem" }}
                                />
                            </div>
                        </div>

                        <p className="program-role mt-2 mb-3" style={{ backgroundColor: "#EFF1CD" }}>UI Designer</p>

                        <p className='fs-6' style={{ marginBottom: "8px" }}>Led UX structure and component design for the organization’s public facing digital platform</p>

                        <ul className='fs-6'>
                            <li>Designed and developed my personal portfolio to showcase structured UX thinking and scalable component architecture</li>
                            <li>Built reusable UI patterns aligned with a cohesive design system and consistent visual hierarchy</li>
                            <li>Engineered responsive layouts with accessibility best practices and clean front end implementation</li>
                        </ul>

                        <Link
                            style={{ textDecoration: "none" }}
                            type="button"
                            className="skill-pill"
                            to="https://www.figma.com/design/yvtOkWolvooXD0LOutVQ31/Portfolio-%7C-Dilshan-Liyanage?node-id=58-2&t=2ohAoE0WIaEJ2gfE-1"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SkillIcon path={FigmaIcon} />&nbsp;&nbsp;UI Design (Figma)
                        </Link>

                    </div>

                    <div className='custom-card mt-3'>

                        <div className="mb-2 row align-items-center">
                            < div className="col-auto">
                                <p className="gsf-medium fs-5 mb-0">
                                    WIMTACH Organization Website
                                </p>
                            </div>
                            <div className="col-auto line-separator">
                                <p className="gsf-regular fs-4 mb-0" style={{ color: "#BBAFCE" }}>
                                    |
                                </p>
                            </div>
                            <div className="col-auto">
                                <img
                                    className='work-image'
                                    src={CentennialCollegeLogo}
                                    alt={CentennialCollegeLogo}
                                    style={{ width: "6rem" }}
                                />
                            </div>
                        </div>

                        <p className="program-role mt-2 mb-3" style={{ backgroundColor: "#EFF1CD" }}>UI Designer</p>

                        <p className='fs-6' style={{ marginBottom: "8px" }}>Led UX structure and component design for the organization’s public facing digital platform</p>

                        <ul className='fs-6'>
                            <li>Designed structured UI components aligned with brand guidelines and reusable system patterns</li>
                            <li>Ensured responsive behaviour and accessibility compliance across breakpoints</li>
                            <li>Collaborated with development to maintain consistency between design intent and implementation</li>
                        </ul>

                        <Link
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
                            to="https://www.figma.com/design/7w2rsR4ZqMs1GKHPIDUXHl/WIMTACH-Website?node-id=0-1&t=OuBlUzwJyPUhLhuy-1"
                            target="_blank"
                            rel="noopener noreferrer">
                            <SkillIcon path={FigmaIcon} />&nbsp;&nbsp;UI Design (Figma)
                        </Link>

                    </div>

                    <Link
                        style={{ marginRight: "10px" }}
                        type="button"
                        className="fs-5 gsf-regular primary-gradient-outline-button no-outline mt-4"
                        to="allprojects">
                        See All Projects&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} style={{ color: "#439B9B" }} />
                    </Link>

                </div>

                {/* FEATURED WORK END */}

                {/* WHY ME? */}

                <div className="custom-container">

                    <p className='gsf-semibold fs-2 mb-4 section-underline'>Why Me?</p>

                    <div className="row">

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#ECE6F7" }}>
                                    <Layers size={32} style={{ color: "#845EC2" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Design Systems & Scalable Architecture
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Architect reusable component libraries and token based systems that ensure consistency, scalability, and cross platform alignment across enterprise products
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#ECF7EF" }}>
                                    <Code size={32} style={{ color: "#82AE91" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Technical Fluency in Front End
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Front end fluency in React, HTML, and CSS enables implementation aware design decisions and seamless collaboration with engineering
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#FFE9E9" }}>
                                    <Accessibility size={32} style={{ color: "#DF817F" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Accessibility First Approach
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Design WCAG aligned interfaces with structured hierarchy, contrast clarity, and inclusive interaction patterns across platforms
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#FFE9E9" }}>
                                    <PencilRuler size={32} style={{ color: "#DF817F" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Measurable Impact Focus
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Drive workflow efficiency and usability improvements, delivering reduced friction and performance gains in production systems
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#ECE6F7" }}>
                                    <GitBranch size={32} style={{ color: "#845EC2" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Workflow Driven UX Thinking
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Translate complex user journeys into structured, scalable flows that reduce edge cases and improve operational clarity
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4 mt-3">

                            <div className='custom-card why-me'>

                                <p className="grid-icon mt-2 mb-3" style={{ backgroundColor: "#ECF7EF" }}>
                                    <Handshake size={32} style={{ color: "#82AE91" }} />
                                </p>

                                <p className="gsf-medium fs-5 mb-0">
                                    Cross Functional Collaboration
                                </p>

                                <p className="gsf-light fs-6 mt-3">
                                    Partner with product, engineering, and stakeholders to align UX strategy with business goals and reduce implementation rework
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* WHY ME? END */}


                {/* ABOUT ME */}

                <div ref={aboutMeRef} id="aboutMe"></div>

                <div className="custom-container web-view">

                    <p className='gsf-semibold fs-2 mb-5 section-underline'>About Me</p>

                    <div className='custom-card'>

                        <div className="row">

                            <div className="col-md-8">

                                <p className='fs-6' style={{ marginBottom: "8px" }}>I&apos;m a Product Designer based in Toronto ❄️ , specializing in enterprise and healthcare platforms where clarity, scalability, and system integrity matter.</p>

                                <p className='fs-6' style={{ marginBottom: "8px" }}>I design structured UX frameworks, reusable component systems, and workflow driven interfaces that balance user needs with business and technical constraints.</p>

                                <p className='fs-6' style={{ marginBottom: "8px" }}>My background in software engineering allows me to collaborate closely with development teams, validate interaction logic, and ensure implementation accuracy across complex digital ecosystems.</p>

                                <Link
                                    style={{ textDecoration: "none", marginRight: "10px" }}
                                    type="button"
                                    className="fs-6 gsf-regular primary-gradient-button mt-3"
                                    to="aboutme">
                                    Read more about me&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff" }} />
                                </Link>


                            </div>

                            <div className="col-md-4 d-flex justify-content-center align-items-center">

                                <img src={NewMe} alt="Main Logo" width={225} />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="custom-container mobile-view">

                    <p className='gsf-semibold fs-2 mb-5 section-underline'>About Me</p>

                    <div className='custom-card'>

                        <div className="col-md-4 d-flex justify-content-center align-items-center">

                            <img src={NewMe} alt="Main Logo" width={225} />

                        </div>

                        <div className="row mt-5">

                            <div className="col-md-8">

                                <p className='fs-6' style={{ marginBottom: "8px" }}>I&apos;m a Product Designer based in Toronto ❄️ , specializing in enterprise and healthcare platforms where clarity, scalability, and system integrity matter.</p>

                                <p className='fs-6' style={{ marginBottom: "8px" }}>I design structured UX frameworks, reusable component systems, and workflow driven interfaces that balance user needs with business and technical constraints.</p>

                                <p className='fs-6' style={{ marginBottom: "8px" }}>My background in software engineering allows me to collaborate closely with development teams, validate interaction logic, and ensure implementation accuracy across complex digital ecosystems.</p>

                                <Link
                                    style={{ textDecoration: "none", marginRight: "10px" }}
                                    type="button"
                                    className="fs-6 gsf-regular primary-gradient-button mt-3"
                                    to="aboutme">
                                    Read more about me&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff" }} />
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ABOUT ME END */}


                {/* LET'S CONNECT */}

                <FooterComponent />

                {/* LET'S CONNECT END */}

            </div>

        </>

    );

}

export default Home;