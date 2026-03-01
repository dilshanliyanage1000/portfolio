import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ResumePDF from "../contents/Dilshan_Liyanage_Resume.pdf";

import SkillIcon from '../components/SkillIcon';
import NavigationBar from '../components/NavigationBar';
import FooterComponent from '../components/FooterComponent';

import NewMe from '../assets/img/new-me.png';

import PearsonLogo from "../assets/img/skills/pearson.png";
import CentennialCollegeLogo from "../assets/img/skills/centennial-college.jpg";
import UdayaLogo from "../assets/img/skills/udaya-industries.png";
import UCSCLogo from "../assets/img/skills/ucsc.png";
import GoogleLogo from "../assets/img/skills/google.png";
import PiscesLogo from "../assets/img/skills/pisces.png";
import PersonStandingUp from "../assets/img/skills/standing-up-man.png";

const AboutMe = () => {

    return (

        <>

            {/* NAVIGATION BAR */}

            <NavigationBar />

            {/* NAVIGATION BAR END */}

            {/* BODY */}

            {/* ABOUT ME */}

            <div className="custom-container web-view">

                <p className='gsf-semibold fs-2 mb-5 section-underline'>About Me</p>

                <div className='custom-card'>

                    <p className="mb-2 fs-4 gsf-light text-black">
                        Hello, I&apos;m Dilshan! <span className="wave">👋🏼</span>
                    </p>

                    <p className="fs-6 stat-pill mt-1 mb-3"><SkillIcon path={PersonStandingUp} />&nbsp;ENTJ-T</p>
                    <p className="fs-6 stat-pill mt-1 mb-3"><SkillIcon path={PiscesLogo} />&nbsp;Pisces</p>

                    <div className="row">

                        <div className="col-md-8">

                            <p className='fs-6' style={{ marginBottom: "12px" }}>I&apos;m a Product Designer based in Toronto ❄️ , specializing in scalable UX systems across healthcare, education, and enterprise platforms.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>With a background in Software Engineering Technology and Information Technology, I bridge design thinking with technical implementation. I design structured workflows, reusable component systems, and accessible interfaces that balance user needs with real world constraints.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>My work spans discovery through high fidelity execution, partnering closely with product and engineering to reduce friction, improve clarity, and deliver implementation ready solutions.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>If you work with me, you can expect thoughtful collaboration, system level thinking, and design decisions grounded in measurable impact.</p>

                            <div className='mrem-2'>
                                <Link
                                    style={{ marginRight: "10px" }}
                                    type="button"
                                    className="fs-6 gsf-regular primary-gradient-button"
                                    to="https://www.linkedin.com/in/dilaliyanage/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View LinkedIn&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff" }} />
                                </Link>

                                <a
                                    type="button"
                                    className="fs-6 mt-2 gsf-regular primary-gradient-outline-button"
                                    href={ResumePDF}
                                    download="Dilshan_Liyanage_Resume.pdf"
                                >
                                    <span className="color-gradient-animation">Download Resume</span>&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>


                        </div>

                        <div className="col-md-4 d-flex justify-content-center align-items-center">

                            <img src={NewMe} alt="Main Logo" width={225} />

                        </div>

                    </div>

                </div>

            </div>

            <div className="custom-container mobile-view">

                <p className='gsf-semibold fs-1 mb-5 section-underline'>About Me</p>

                <div className='custom-card'>

                    <div className="row">

                        <div className="col-md-4 mb-5 d-flex justify-content-center align-items-center">

                            <img src={NewMe} alt="Main Logo" width={250} />

                        </div>

                        <p className="mb-2 fs-4 gsf-light text-black">
                            Hello, I&apos;m Dilshan! <span className="wave">👋🏼</span>
                        </p>

                        <p className="fs-6 stat-pill mt-1 mb-3"><SkillIcon path={PersonStandingUp} />&nbsp;ENTJ-T</p>
                        <p className="fs-6 stat-pill mt-1 mb-3"><SkillIcon path={PiscesLogo} />&nbsp;Pisces</p>

                        <div className="col-md-8">

                            <p className='fs-6' style={{ marginBottom: "12px" }}>I&apos;m a Product Designer based in Toronto ❄️ , specializing in scalable UX systems across healthcare, education, and enterprise platforms.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>With a background in Software Engineering Technology and Information Technology, I bridge design thinking with technical implementation. I design structured workflows, reusable component systems, and accessible interfaces that balance user needs with real world constraints.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>My work spans discovery through high fidelity execution, partnering closely with product and engineering to reduce friction, improve clarity, and deliver implementation ready solutions.</p>

                            <p className='fs-6' style={{ marginBottom: "12px" }}>If you work with me, you can expect thoughtful collaboration, system level thinking, and design decisions grounded in measurable impact.</p>

                            <div className='mrem-2'>
                                <Link
                                    type="button"
                                    className="fs-6 gsf-regular primary-gradient-button"
                                    to="https://www.linkedin.com/in/dilaliyanage/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    View LinkedIn<FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffffff" }} />
                                </Link>

                                <a
                                    type="button"
                                    className="fs-6 mt-3 gsf-regular primary-gradient-outline-button"
                                    href={ResumePDF}
                                    download="Dilshan_Liyanage_Resume.pdf"
                                >
                                    <span className="color-gradient-animation">Download Resume</span><FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ABOUT ME END */}


            {/* EDUCATION */}

            <div className="custom-container">

                <p className='gsf-semibold fs-2 mb-5 section-underline'>Education</p>

                <div className='custom-card'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Software Engineering Technology (Fast Track) (Co-op)
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

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Jan 2023 - Dec 2024</p>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Graduated in 2024</p>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>High Honors (GPA 4.3/4.5)</p>

                </div>

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Bachelor of Information Technology
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
                                src={UCSCLogo}
                                alt={UCSCLogo}
                                style={{ width: "6rem" }}
                            />
                        </div>
                    </div>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Jan 2017 - Jul 2021</p>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Graduated in 2021</p>

                </div>

            </div>

            {/* EDUCATION END */}


            {/* CERTIFICATIONS */}

            <div className="custom-container">

                <p className='gsf-semibold fs-2 mb-5 section-underline'>Certifications</p>

                <div className='custom-card'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Google UX Design Professional Certificate
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
                                src={GoogleLogo}
                                alt={GoogleLogo}
                                style={{ width: "5rem" }}
                            />
                        </div>
                    </div>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Feb 2026 - Present</p>

                    <ul className='fs-6'>
                        <li> Build Wireframes and Low-Fidelity Prototypes - In Progress</li>
                        <li>Start the UX Design Process: Empathize, Define, and Ideate - Completed</li>
                        <li>Foundations of User Experience (UX) Design - Completed</li>
                    </ul>

                </div>

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Fundamentals of Digital Marketing
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
                                src={GoogleLogo}
                                alt={GoogleLogo}
                                style={{ width: "5rem" }}
                            />
                        </div>
                    </div>

                    <p className="stat-pill mt-2 mb-3" style={{ backgroundColor: "#f3f3f3", border: "none" }}>Aug 2023</p>

                </div>

            </div>

            {/* CERTIFICATIONS END */}

            {/* FEATURED WORK */}

            <div className="custom-container">

                <p className='gsf-semibold fs-2 mb-5 section-underline'>Career Journey</p>

                <div className='custom-card'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                UI/UX Designer
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

                    <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#f3f3f3" }}>Sep 2024 - Present</p>

                    <ul className='fs-6'>
                        <li>Designed and maintained reusable UI components and interaction patterns in Figma to support consistent product experiences across platforms</li>
                        <li>Implemented structured design tokens for typography, spacing, color, and elevation to ensure consistency across enterprise platforms</li>
                        <li>Standardized components across multiple enterprise platforms to improve consistency, scalability, and implementation efficiency</li>
                        <li>Produced rapid design iterations and prototypes to validate solutions before development</li>
                        <li>Partnered closely with developers to validate interaction behavior, responsive logic, and implementation accuracy</li>
                        <li>Defined and documented component usage guidelines and best practices to ensure system wide consistency</li>
                        <li>Collaborated with cross functional teams to iterate on designs based on stakeholder feedback and usability insights</li>
                        <li>Conducted UI reviews and usability improvements to enhance navigation clarity and workflow efficiency</li>
                        <li>Proactively sought feedback from stakeholders and peers to refine solutions and strengthen design decisions</li>
                        <li>Ensured accessibility compliance across all system components</li>
                    </ul>

                </div>

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Media Developer Co-op
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
                                src={PearsonLogo}
                                alt={PearsonLogo}
                                style={{ width: "6rem" }}
                            />
                        </div>
                    </div>

                    <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#f3f3f3" }}>May 2024 – Aug 2024</p>

                    <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#f3f3f3" }}>Sep 2023 – Dec 2023</p>

                    <ul className='fs-6'>
                        <li>Designed and improved UX for educational digital products used by teachers and students across Canada</li>
                        <li>Conducted usability testing and UX evaluations, identifying improvements that reduced reported user issues by 30%</li>
                        <li>Created high fidelity prototypes and interaction states to validate design solutions before development</li>
                        <li>Contributed to standardized UI components and accessibility refinements across multiple product interfaces</li>
                    </ul>

                </div>

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                IT/Web Systems Developer
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
                                src={UdayaLogo}
                                alt={UdayaLogo}
                                style={{ width: "2rem" }}
                            />
                            <span className='gsf-semibold fs-6'>&nbsp;&nbsp;UDAYA INDUSTRIES</span>
                        </div>
                    </div>

                    <p className="fs-6 program-role mt-2 mb-3" style={{ backgroundColor: "#f3f3f3" }}>Sep 2020 – Aug 2022</p>

                    <ul className='fs-6'>
                        <li>Developed and maintained web-based systems to streamline operations, focusing on quotations management, ERP maintenance, and sales data reporting</li>
                        <li>Developed and implemented a fully functional web-based quotations management system for agricultural machinery, reducing quotation processing time by 50%</li>
                        <li>Analyzed and maintained the existing ERP system, collaborating with stakeholders to gather requirements and communicate design and technical needs</li>
                        <li>Designed and visualized operational and sales data dashboards, translating complex datasets into clear, actionable insights to support senior management decision making</li>
                    </ul>

                </div>

            </div>

            {/* FEATURED WORK END */}

            {/* LET'S CONNECT */}

            <FooterComponent />

            {/* LET'S CONNECT END */}

        </>

    );

}

export default AboutMe;