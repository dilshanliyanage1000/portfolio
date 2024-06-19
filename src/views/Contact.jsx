import React, { useState, useEffect } from 'react';
import MainNav from '../components/MainNav';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import BgTwo from "../assets/img/bg/abstract_02.png";

const Contact = () => {

    const param1 = "Contact";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

    window.scrollTo(0, 0);

    return (
        <>

            <MainNav title={param1} />

            <div id='main-content'></div>

            <div className="main-content-area">

                <main className="custom-container" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="frosted-glass br-20 jumbotron">

                        <div className="content-wrapper">

                            <p className="display-4 mt-4 abril-fatface-regular">Let's connect!</p>

                            <p className="poppins-extralight fs-5 mt-3">
                                Please feel free to reach out to me and I will get back to you as soon as possible!
                            </p>

                            <div className='mt-2 row align-items-center justify-content-center text-content'>

                                <div className='text-center'>
                                    <Link to="mailto:aliyana4@my.centennialcollege.ca" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="theme-button">
                                            <FontAwesomeIcon icon={faMailBulk} />&nbsp;&nbsp;Email
                                        </button>
                                    </Link>
                                </div>

                                <div className='mt-1 text-center'>
                                    <Link to="https://www.linkedin.com/in/dilaliyanage/" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="theme-button">
                                            <FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;LinkedIn
                                        </button>
                                    </Link>
                                </div>

                                <div className='mt-1 text-center'>
                                    <Link to="https://github.com/dilshanliyanage1000/" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="theme-button">
                                            <FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;GitHub
                                        </button>
                                    </Link>
                                </div>

                                <div className='mt-1 text-center'>
                                    <Link to="https://www.instagram.com/just_dila/" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="theme-button">
                                            <FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;Instagram
                                        </button>
                                    </Link>
                                </div>

                                <div className='mt-1 text-center'>
                                    <Link to="https://www.tiktok.com/@slcanadiankolla" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="theme-button">
                                            <FontAwesomeIcon icon={faTiktok} />&nbsp;&nbsp;TikTok
                                        </button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </main >

            </div>

            <BottomNav />

        </>
    );

};


export default Contact;
