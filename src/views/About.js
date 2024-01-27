import React from 'react';

import { Link } from 'react-scroll';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

import PearsonLogo from '../assets/img/experience/pearson_logo.png';

import UdayaLogo from '../assets/img/experience/udaya_logo.png';

import CentennialLogo from '../assets/img/education/centennial_logo.png';

import UCSCLogo from '../assets/img/education/ucsc_logo.png';

import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';

import ImgOne from "../assets/img/me/myOne.png";

import ImgTwo from "../assets/img/me/myTwo.png";

import ImgThree from "../assets/img/me/myThree.png";

import ImgFour from "../assets/img/me/myFour.png";

import ImgFive from "../assets/img/me/myFive.png";

const About = () => {
    
    const param1 = "About Me";

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = DownloadFile;
        link.download = 'Dilshan_Liyanage_Resume.pdf';
        link.click();
    };

  return (

    <>

        <MainNav title={param1} />

        <main className="container" style={{ marginTop: "8rem", marginBottom: "5rem" }}>

            <div className="jumbotron">

                <div className="text-center">

                    <h1 className="display-5 theme-color fw-medium">About Me</h1>

                    <p className="mt-5" style={{fontSize: "20px"}}>
                        I'm a passionate Web Developer and UI/UX Designer with a keen eye for detail. I possess a love for creating
                        user-centered experiences and strive to craft visually appealing and functional websites. Whether it's bringing
                        innovative designs to life or building robust web applications, I'm dedicated to delivering exceptional results.
                    </p>

                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center", marginTop: "2rem" }} >

                        <Link style={{padding: "10px"}} to="skills" smooth={true} duration={500} offset={-100} >
                            <button type="button" className="solid-pill" style={{ width: "200px" }}>
                                <h3 className="pill-text">
                                    <i class="fa-solid fa-star" style={{ marginRight: '10px' }}></i>Skills
                                </h3>
                            </button>
                        </Link>

                        <Link style={{padding: "10px"}} to="experience" smooth={true} duration={500} offset={-100} >
                            <button type="button" className="solid-pill" style={{ width: "200px" }}>
                                <h3 className="pill-text">
                                    <i class="fa-solid fa-briefcase" style={{ marginRight: '10px' }}></i>Experience
                                </h3>
                            </button>
                        </Link>
                        
                        <Link style={{padding: "10px"}} to="education" smooth={true} duration={500} offset={-100} >
                            <button type="button" className="solid-pill" style={{ width: "200px" }}>
                                <h3 className="pill-text">
                                    <i class="fa-solid fa-graduation-cap" style={{ marginRight: '10px' }}></i>Education
                                </h3>
                            </button>
                        </Link>
                        
                        <Link style={{padding: "10px"}} >
                            <button type="button" className="solid-pill" style={{ width: "200px" }} onClick={downloadResume}>
                                <h3 className="pill-text">
                                    <i className="fa-solid fa-download" style={{ marginRight: '10px' }}></i>Resume
                                </h3>
                            </button>
                        </Link>

                    </div>

                    <div className='row align-items-center justify-content-center' style={{marginTop: "2rem"}}>

                        <div className='col-md-auto' style={{padding: '20px', textAlign: "center" }}>

                            <img src={ImgOne} alt={ImgOne} style={{ width: '12rem' }} />       

                        </div>

                        <div className='col-md-auto' style={{padding: '20px', textAlign: "center"}}>

                            <img src={ImgTwo} alt={ImgTwo} style={{ width: '12rem' }} />

                        </div>

                        <div className='col-md-auto' style={{padding: '20px', textAlign: "center" }}>

                            <img src={ImgThree} alt={ImgThree} style={{ width: '12rem' }} />

                        </div>

                        <div className='col-md-auto' style={{padding: '20px', textAlign: "center"}}>

                            <img src={ImgFour} alt={ImgFour} style={{ width: '12rem' }} />

                        </div>

                        <div className='col-md-auto' style={{padding: '20px', textAlign: "center" }}>

                            <img src={ImgFive} alt={ImgFive} style={{ width: '12rem' }} />

                        </div>

                    </div>

                </div>

                <section id="skills">

                    <div style={{ marginTop: '6rem' }}>

                        <h1 className="display-5 text-center theme-color fw-medium">Skills</h1>

                        <div className="container-fluid">
                                
                            <div className="col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>

                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-html5"></i>&nbsp;&nbsp;HTML</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-css3"></i>&nbsp;&nbsp;CSS</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-js"></i>&nbsp;&nbsp;JavaScript</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-react"></i>&nbsp;&nbsp;React</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-vuejs"></i>&nbsp;&nbsp;Vue.js</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-js"></i>&nbsp;&nbsp;AJAX</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-js"></i>&nbsp;&nbsp;jQuery</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-php"></i>&nbsp;&nbsp;PHP</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-code"></i>&nbsp;&nbsp;MySQL</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-github"></i>&nbsp;&nbsp;GitHub</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-code-branch"></i>&nbsp;&nbsp;GIT</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-figma"></i>&nbsp;&nbsp;Figma</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-uikit"></i>&nbsp;&nbsp;Balsamiq</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-atom"></i>&nbsp;&nbsp;Prototyping</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-pix"></i>&nbsp;&nbsp;Adobe Creative Suit</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-java"></i>&nbsp;&nbsp;Java</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-c"></i>&nbsp;&nbsp;C#</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-node"></i>&nbsp;&nbsp;NodeJS</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-vial-virus"></i>&nbsp;&nbsp;REST API</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-code"></i>&nbsp;&nbsp;PL/MySQL</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-solid fa-database"></i>&nbsp;&nbsp;MongoDB</div>
                                    <div className="skill-pill" style={{fontSize: "25px", margin: "10px"}}><i class="fa-brands fa-android"></i>&nbsp;&nbsp;Android Development (Kotlin)</div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </section>

                <section id="experience">

                    <div style={{ marginTop: '6rem' }}>

                        <h1 className="display-5 text-center theme-color fw-medium">Experience</h1>

                        <div className="container-fluid">
                                
                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={PearsonLogo} alt="Pearson Cananda Inc. Logo" style={{ width: "80px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ paddingLeft: "1rem"}}>Media Developer Co-op</h3>

                                            <h3 className="display-6" style={{fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>PEARSON CANADA INC.</span>&nbsp;&nbsp;(SEP 2023 - DEC 2023)
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <ul style={{ fontSize:"20px", paddingLeft: "3rem", marginTop: "2rem" }}>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Ensuring that educational products are thoroughly tested for a seamless and error-free experience for teachers and students across Canada
                                    </li>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Conduct both functional and user acceptance testing across various device platforms to ensure optimal performance and functionality of those features
                                    </li>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Enhancement of overall user experience by developing and integrating new web components into existing systems while maintaining device responsiveness
                                    </li>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Modify educational images that need to be included in educational materials, ensuring their visual quality is optimized for different readers
                                    </li>

                                </ul>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">Vue.js</div>
                                    <div className="skill-pill">HTML</div>
                                    <div className="skill-pill">CSS</div>
                                    <div className="skill-pill">JavaScript</div>
                                    <div className="skill-pill">Adobe Photoshop</div>
                                    <div className="skill-pill">Function & User Testing Documents</div>
                                </div>

                            </div>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "5rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={UdayaLogo} alt="Udaya Industries Logo" style={{ width: "80px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ paddingLeft: "1rem"}}>IT/Web Systems Developer</h3>

                                            <h3 className="display-6" style={{fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>UDAYA INDUSTRIES</span>&nbsp;&nbsp;(SEP 2020 - AUG 2022)
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <ul style={{  fontSize:"20px", paddingLeft: "3rem", marginTop: "2rem" }}>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Develop and implement a fully functional web-based quotations management system for agricultural machineries
                                    </li>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Analyze and maintain existing ERP, consulting with stakeholders for needs and reporting to senior team 
                                    </li>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Gather sales data and visual reports to aid senior management as required
                                    </li>

                                </ul>

                                <div className="row" style={{ paddingLeft: "3rem", marginTop: "2rem"}}>
                                    <div className="skill-pill">HTML</div>
                                    <div className="skill-pill">CSS</div>
                                    <div className="skill-pill">Bootstrap</div>
                                    <div className="skill-pill">JavaScript</div>
                                    <div className="skill-pill">AJAX</div>
                                    <div className="skill-pill">jQuery</div>
                                    <div className="skill-pill">PHP</div>
                                    <div className="skill-pill">PhpMyAdmin</div>
                                    <div className="skill-pill">MySQL</div>
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </section>

                <section id="education">

                    <div style={{ marginTop: '10rem' }}>

                        <h1 className="display-5 text-center theme-color fw-medium">Education</h1>

                        <div className="container-fluid">
                                
                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "4rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={CentennialLogo} alt="Centennial College Logo" style={{ width: "80px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ paddingLeft: "1rem"}}>Software Engineering Technology</h3>

                                            <h3 className="display-6"  style={{fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>CENTENNIAL COLLEGE</span>&nbsp;&nbsp;(JAN 2023 - PRESENT)
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <ul style={{  fontSize:"20px", paddingLeft: "3rem", marginTop: "2rem" }}>

                                    <li style={{ marginBottom: "0.5rem" }}>Fast-Track Program</li>

                                    <li style={{ fontStyle: "italic" }}>GPA: 4.3/4.5 (A+)</li>

                                </ul>

                            </div>

                            <div className="margin-box col-md-10 mx-auto" style={{ marginTop: "5rem" }}>

                                <div className="row" style={{ display: "flex", alignItems: "center" }}>

                                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "3rem" }}>

                                        <img className="about-logo" src={UCSCLogo} alt="Udaya Industries Logo" style={{ width: "80px" }} />

                                        <div>
                                            
                                            <h3 className="display-6" style={{ paddingLeft: "1rem"}}>Bachelor's in Information Technology</h3>

                                            <h3 className="display-6"  style={{fontSize: "20px", paddingLeft: "1rem" }}>
                                                <span className='theme-color fw-medium'>UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING</span>&nbsp;&nbsp;(JAN 2017 - APR 2021)
                                            </h3>

                                        </div>

                                    </div>

                                </div>

                                <ul style={{  fontSize:"20px", paddingLeft: "3rem", marginTop: "2rem" }}>

                                    <li style={{ marginBottom: "0.5rem" }}>
                                        Graduated in July 2021
                                    </li>

                                </ul>

                            </div>
                            
                        </div>

                    </div>

                </section>

            </div>
            
        </main>

        <BottomNav/>

    </>

  );

};

export default About;
