import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import SkillIcon from '../components/SkillIcon';
import NavigationBar from '../components/NavigationBar';
import FooterComponent from '../components/FooterComponent';

import TenzrHealthLogo from "../assets/img/skills/tenzr-health.png";
import SeyonTaxLogo from "../assets/img/skills/seyon-tax.png";
import CentennialCollegeLogo from "../assets/img/skills/centennial-college.jpg";
import DGLogo from "../assets/img/skills/dg-logo.jpg";
import GlobeIcon from "../assets/img/skills/globe-logo.png";
import FigmaIcon from "../assets/img/skills/figma-logo.png";

const AllProjects = () => {

    return (

        <>

            {/* NAVIGATION BAR */}

            <NavigationBar />

            {/* NAVIGATION BAR END */}

            {/* FEATURED WORK */}

            <div className="custom-container">

                <div className="mb-4">

                    <Link
                        style={{ textDecoration: "none", marginRight: "10px" }}
                        type="button"
                        className="fs-5 gsf-regular primary-gradient-outline-button no-outline mt-4"
                        to="/portfolio/">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#439B9B" }} />&nbsp;&nbsp;Back to portfolio
                    </Link>

                </div>

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
                        <li>
                            Led UX definition for a new print preview workflow, identifying system gaps and designing the feature architecture from concept to validated prototype.
                        </li>
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
                        <li>Introduced standardized components and shared interaction models across filing modules.</li>
                        <li>Collaborated with development to ensure implementation accuracy, responsive behavior, and error handling clarity</li>
                        <span className='gsf-extralight-italic'>Note: Design assets are confidential due to NDA. Sanitized UI samples available below.</span>
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
                        <li>Ensured responsive behaviour and accessibility compliance across breakpoints.</li>
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

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Website Tweaks
                            </p>
                        </div>
                        <div className="col-auto line-separator">
                            <p className="gsf-regular fs-4 mb-0" style={{ color: "#CACDA5" }}>
                                |
                            </p>
                        </div>
                        <div className="col-auto">
                            <img
                                className='work-image'
                                src={DGLogo}
                                alt={DGLogo}
                                style={{ width: "6rem" }}
                            />
                        </div>
                    </div>

                    <p className="program-role mt-2 mb-3" style={{ backgroundColor: "#DCF0D9" }}>UI Designer</p>

                    <p className='fs-6 mb-4' style={{ marginBottom: "8px" }}>Collaborated with the client to redesign, prototype, and enhance their website, focusing on usability and brand alignment</p>

                    <Link
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
                        <SkillIcon path={FigmaIcon} />&nbsp;&nbsp;UI Design (Figma)
                    </Link>

                </div>

                <div className='custom-card mt-3'>

                    <div className="mb-2 row align-items-center">
                        < div className="col-auto">
                            <p className="gsf-medium fs-5 mb-0">
                                Untitled Towing Dispatch Agent
                            </p>
                        </div>
                        <div className="col-auto line-separator">
                            <p className="gsf-regular fs-4 mb-0" style={{ color: "#CACDA5" }}>
                                |
                            </p>
                        </div>
                        <div className="col-auto">
                            <p className="gsf-light-italic fs-6 mb-0">
                                UNDISCLOSED CLIENT
                            </p>
                        </div>
                    </div>

                    <p className="program-role mt-2 mb-3" style={{ backgroundColor: "#FFF3EA" }}>UI Designer</p>

                    <p className='fs-6 mb-4' style={{ marginBottom: "8px" }}>Collaborated with the client to redesign, prototype, and enhance their website, focusing on usability and brand alignment</p>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill"
                        to="https://www.figma.com/design/5rxk7Krcww91fikaCwS1g4/Undisclosed-Towing-Agent-%7C-Sanitized-for-view--Copy-?node-id=0-1&t=KhhZH2mBXMUmhG7D-1"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SkillIcon path={FigmaIcon} />&nbsp;&nbsp;UI Design (Figma)
                    </Link>

                </div>

            </div>

            {/* FEATURED WORK END */}


            {/* LET'S CONNECT */}

            <FooterComponent />

            {/* LET'S CONNECT END */}

        </>

    );

}

export default AllProjects;