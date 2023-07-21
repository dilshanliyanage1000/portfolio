import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

// import MyLogo from '../assets/img/me.png';

import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';

import MyCarousel from '../partials/MyCarousel';

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

        <main className="container" style={{ marginTop: '6rem', marginBottom: '3rem' }}>

            <div className="jumbotron mt-5">

                <div className="row">

                    <div className="col-md-4 mt-4">
                        {/* <img className="" src={MyLogo} alt="UI-UX Logo" style={{ width: '100%' }} /> */}

                        <MyCarousel />
                    </div>

                    <div className="col-md-8 text-end">

                        <h1 className="display-4">Welcome to my Portfolio!</h1>

                        <h3 className="display-6 mt-4" style={{ fontSize: '2rem' }}>My name is Attidiye Dilshan Nayanamadhu Liyanage.</h3>

                        <h3 className="display-6 mt-5" style={{ fontSize: '1.5rem' }}>
                            I'm a passionate Web Developer and UI/UX Designer with a keen eye for detail. I possess a love for creating
                            user-centered experiences and strive to craft visually appealing and functional websites. Whether it's bringing
                            innovative designs to life or building robust web applications, I'm dedicated to delivering exceptional results.
                        </h3>

                        <h3 className="display-6 mt-5" style={{ fontSize: '25px' }}>
                            Feel free to download my resume to learn more about my qualifications and experience.
                        </h3>
                        
                        <button type="button" className="btn index-link mt-4" style={{ marginLeft: '10px', width: '200px' }} onClick={downloadResume}>
                            <h3 className="display-6" style={{ fontSize: '20px' }}>
                                <i className="fa-solid fa-arrow-down" style={{ marginRight: '10px' }}></i>Get Resume
                            </h3>
                        </button>

                    </div>

                </div>

            </div>
            
        </main>

        <BottomNav/>

        <Footer/>

    </>

  );

};

export default About;
