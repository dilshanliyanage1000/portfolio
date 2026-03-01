import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

import SkillIcon from '../components/SkillIcon';
import Footer from '../components/Footer';

import LinkedInLogo from "../assets/img/skills/linkedin.png";
import GitHubLogo from "../assets/img/skills/github-logo.png";

const FooterComponent = () => {

    return (

        <>
            {/* LET'S CONNECT */}

            <div className="custom-container mb-5">

                <p className='gsf-semibold fs-2 mb-5 section-underline'>Let&apos;s Connect</p>

                <div className='custom-card'>

                    <p className='fs-6 gsf-regular mb-3' style={{ marginBottom: "8px" }}>Looking to elevate your product experience? Let’s talk.</p>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill"
                        to="https://www.linkedin.com/in/dilaliyanage/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SkillIcon path={LinkedInLogo} />&nbsp;&nbsp;LinkedIn
                    </Link>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill"
                        to="https://github.com/dilshanliyanage1000"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SkillIcon path={GitHubLogo} />&nbsp;&nbsp;GitHub
                    </Link>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill"
                        to="mailto:dilshanliyanage1000@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Send size={18} style={{ color: "#64895F" }} />&nbsp;&nbsp;Email
                    </Link>

                    <p className='fs-6 gsf-medium mt-5' style={{ marginBottom: "8px" }}>Navigation</p>

                    <div className="mt-3 d-flex align-items-center" style={{ gap: "8px" }}>
                        <Link
                            className='text-black text-decoration-none'
                            type="button"
                            to="/portfolio/">
                            Work
                        </Link>
                        <span>•</span>
                        <Link
                            className='text-black text-decoration-none'
                            type="button"
                            to="/portfolio/aboutme">
                            About Me
                        </Link>
                        <span>•</span>
                        <Link
                            className='text-black text-decoration-none'
                            type="button"
                            to="/portfolio/contact">
                            Contact
                        </Link>
                    </div>

                    <Footer />

                </div>

            </div>

            {/* LET'S CONNECT END */}

        </>

    );

}

export default FooterComponent;