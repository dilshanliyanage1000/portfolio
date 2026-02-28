import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

import SkillIcon from '../components/SkillIcon';
import BottomNav from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

import LinkedInLogo from "../assets/img/skills/linkedin.png";
import GitHubLogo from "../assets/img/skills/github-logo.png";

const Contact = () => {

    return (

        <>

            {/* NAVIGATION BAR */}

            <NavigationBar />

            {/* NAVIGATION BAR END */}

            {/* BODY */}

            <div className="full-screen-view-height">

                <div className="custom-container mb-5">

                    <p className="display-6 gsf-medium text-black"><span className="color-gradient-animation">Let&apos;s build scalable product systems</span></p>

                    <div className="hero-subcopy-wrapper mb-5">
                        <p className="mt-4 fs-4 gsf-light">
                            I&apos;m always open to discussing product design, design systems, workflow optimization, or new opportunities. If you&apos;re building complex digital platforms and value structured, scalable UX, I&apos;d love to connect.
                        </p>
                    </div>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill fs-5"
                        to="https://www.linkedin.com/in/dilaliyanage/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SkillIcon path={LinkedInLogo} />&nbsp;&nbsp;LinkedIn
                    </Link>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill fs-5"
                        to="https://github.com/dilshanliyanage1000"
                        target="_blank"
                        rel="noopener noreferrer">
                        <SkillIcon path={GitHubLogo} />&nbsp;&nbsp;GitHub
                    </Link>

                    <Link
                        style={{ textDecoration: "none" }}
                        type="button"
                        className="skill-pill fs-5"
                        to="mailto:dilshanliyanage1000@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Send size={18} style={{ color: "#64895F" }} />&nbsp;&nbsp;Email
                    </Link>

                    <p className='fs-6 gsf-medium' style={{ marginBottom: "8px", marginTop: "120px" }}>Navigation</p>

                    <div className="mt-3" style={{ gap: "10px" }}>
                        <div className="mt-3" style={{ gap: "10px" }}>
                            <Link
                                style={{ textDecoration: "none" }}
                                className='text-black'
                                type="button"
                                to="/portfolio/">
                                Work
                            </Link>
                            &nbsp;&nbsp;•&nbsp;&nbsp;
                            <Link
                                style={{ textDecoration: "none" }}
                                className='text-black'
                                type="button"
                                to="/portfolio/aboutme">
                                About Me
                            </Link>
                            &nbsp;&nbsp;•&nbsp;&nbsp;
                            <Link
                                style={{ textDecoration: "none" }}
                                className='text-black'
                                type="button"
                                to="/portfolio/contact">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <BottomNav />

                </div>

            </div>

        </>

    );

}

export default Contact;