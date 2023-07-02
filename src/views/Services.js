import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import MainLogo from '../assets/img/dila_logo.png';

import HTMLCSSLogo from "../assets/img/htmlcss.png";

import UIUXLogo from "../assets/img/uiux.png";

import AndroidLogo from "../assets/img/android.png";


const Services = () => {

    const param1 = 'Services';

  return (

    <div>

        <MainNav title={param1} src={MainLogo}/>

        <main className="container" style={{ marginTop: '6rem', marginBottom: '3rem' }}>

            <div className="jumbotron">

                <h1 className="display-5 text-center" style={{ fontSize: '40px' }}>My Services include....</h1>

                <div className="mt-5">

                    <div className="row" style={{ padding: '5px' }}>

                        {/* Web Development */}
                        <div className="col-md-4 text-center">

                            <img src={HTMLCSSLogo} alt="HTML-CSS logo" style={{ height: '150px' }} />

                            <br />

                            <h2 className="display-4 mt-3" style={{ fontSize: '35px' }}>Web Development</h2><br />

                            <p className="display-5" style={{ fontSize: '18px' }}>
                                I specialize in creating attractive and functional websites using HTML and CSS. I combine my technical
                                skills with design principles to bring your unique vision to life. I focus on building websites that work
                                well on different devices and browsers, ensuring a great user experience. With attention to detail and clean
                                code, I create captivating web presences.
                            </p>

                        </div>

                        {/* UI/UX Design */}
                        <div className="col-md-4 text-center">

                            <img src={UIUXLogo} alt="UI-UX logo" style={{ height: '150px' }} />

                            <br />

                            <h2 className="display-4 mt-3" style={{ fontSize: '35px' }}>UI/UX Designs</h2><br />

                            <p className="display-5" style={{ fontSize: '18px' }}>
                                I am dedicated to designing interfaces that are easy to use and visually appealing. By incorporating
                                creativity, research, and understanding user behavior, I create interfaces that engage and delight users. My
                                goal is to optimize the design for driving conversions and providing an exceptional user experience.
                            </p>

                        </div>

                        {/* Android Development */}
                        <div className="col-md-4 text-center">

                            <img src={AndroidLogo} alt="Android logo" style={{ height: '150px' }} />

                            <br />

                            <h2 className="display-4 mt-3" style={{ fontSize: '35px' }}>Android Development</h2><br />

                            <p className="display-5" style={{ fontSize: '18px' }}>
                                I develop high-quality Android applications tailored to your specific needs. I build
                                user-friendly and robust applications that perform well. By building unique apps, you can reach a wider
                                audience and stay ahead in the ever-evolving mobile landscape.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </main>

        <BottomNav/>

        <Footer/>

    </div>

  );

};

export default Services;
