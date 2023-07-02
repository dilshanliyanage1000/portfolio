import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import MyLogo from '../assets/img/me.png';

import MainLogo from '../assets/img/dila_logo.png';

import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';

const About = () => {
    
    const param1 = 'About';

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = DownloadFile;
        link.download = 'Dilshan_Liyanage_Resume.pdf';
        link.click();
    };

  return (

    <div>

        <MainNav title={param1} src={MainLogo}/>

        <main className="container" style={{ marginTop: '6rem', marginBottom: '3rem' }}>

            <div className="jumbotron mt-5">

                <div className="row">

                    <div className="col-md-3">
                        <img className="mt-5" src={MyLogo} alt="UI-UX Logo" style={{ width: '100%' }} />
                    </div>

                    <div className="col-md-9 text-end">

                        <h1 className="display-4">Welcome to my Portfolio!</h1>

                        <h3 className="display-6 mt-4">My name is Attidiye Dilshan Nayanamadhu Liyanage.</h3>

                        <h3 className="display-6 mt-5" style={{ fontSize: '25px' }}>
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

    </div>

  );

};

export default About;
