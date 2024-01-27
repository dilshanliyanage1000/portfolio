import React from 'react';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

import HTMLCSSLogo from "../assets/img/htmlcss.png";

import UIUXLogo from "../assets/img/uiux.png";

import AndroidLogo from "../assets/img/android.png";

import GraphicDesignLogo from "../assets/img/graphic.png";


const Services = () => {

    const param1 = "Services";

  return (

    <>

        <MainNav title={param1} />

        <main className="container" style={{ marginTop: '8rem', marginBottom: '5rem' }}>

            <div className="jumbotron">

                <h1 className="display-5 text-center theme-color fw-medium">Services</h1>

                <div className="mt-4">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="d-flex align-items-center justify-content-center">

                                <img src={HTMLCSSLogo} alt="HTML-CSS logo" style={{ width: '6rem' }} />
                                
                                <h2 className="display-4" style={{ fontSize: '30px', marginLeft: '2rem' }}>Web Development</h2>
                                
                            </div>
                                
                            <p className="display-5 mt-3" style={{ fontSize: '18px', padding: '1rem', textAlign: 'center' }}>
                                I specialize in creating attractive and functional websites using HTML and Bootstrap, combining my technical
                                skills with design principles to bring your unique vision to life. I focus on building websites that work
                                well on different devices and browsers, ensuring a great user experience while creating captivating web presences
                                with attention to detail and clean code.
                            </p>

                        </div>

                        <div className="col-md-6">

                            <div className="d-flex align-items-center justify-content-center">

                                <img src={UIUXLogo} alt="UI-UX logo" style={{ width: '6rem' }} />
                                
                                <h2 className="display-4" style={{ fontSize: '30px', marginLeft: '2rem' }}>UI/UX Designs</h2><br />
                                
                            </div>
                                
                            <p className="display-5 mt-3" style={{ fontSize: '18px', padding: '1rem', textAlign: 'center'}}>
                                I am dedicated to designing interfaces that are easy to use and visually appealing. By incorporating
                                creativity, research, and understanding user behavior, I create interfaces that engage and delight users. My
                                goal is to optimize the design for driving conversions and providing an exceptional user experience.
                            </p>

                        </div>

                    </div>

                    <div className="row mt-4">

                        <div className="col-md-6">

                            <div className="d-flex align-items-center justify-content-center">

                                <img src={AndroidLogo} alt="UI-UX logo" style={{ width: '6rem' }} />
                                
                                <h2 className="display-4" style={{ fontSize: '30px', marginLeft: '2rem' }}>Android Development</h2><br />
                                
                            </div>
                                
                            <p className="display-5 mt-3" style={{ fontSize: '18px', padding: '1rem', textAlign: 'center'}}>
                                I develop high-quality Android applications tailored to your specific needs. I build
                                user-friendly and robust applications that perform well. By building unique apps, you can reach a wider
                                audience and stay ahead in the ever-evolving mobile landscape.
                            </p>

                        </div>

                        <div className="col-md-6">

                            <div className="d-flex align-items-center justify-content-center">

                                <img src={GraphicDesignLogo} alt="UI-UX logo" style={{ width: '6rem' }} />
                                
                                <h2 className="display-4" style={{ fontSize: '30px', marginLeft: '2rem' }}>Graphic Designing</h2><br />
                                
                            </div>
                                
                            <p className="display-5 mt-3" style={{ fontSize: '18px', padding: '1rem', textAlign: 'center'}}>
                                As a passionate and skilled graphic designer, I take great pride in bringing
                                your ideas to life through visually stunning and impactful designs. Whether you need posters for events, logos 
                                for your brand, or expertly edited photos, I am dedicated to delivering exceptional results. 
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </main>

        <BottomNav/>

    </>

  );

};

export default Services;
