import React from 'react';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

const Contact = () => {

  const param1 = "Contact";

    return (

      <>

        <MainNav title={param1} />

          <main className="container" style={{ marginTop: '8rem', marginBottom: '5rem' }}>

            <div className="jumbotron text-center">

              <h1 className="display-5 text-center theme-color fw-medium">Let's connect!</h1>

              <h3 className="mt-4" style={{fontSize: "20px"}}>Please feel free to reach out to me and I will get back to you as soon as possible!</h3>

              <div className='align-items-center justify-content-center mt-5' style={{ fontSize: '20px' }}>

                <div>
                  <a href="mailto:aliyana4@my.centennialcollege.ca" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <button type="button" className="solid-pill">
                      <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;Email
                    </button>
                  </a>
                </div>
                
                <div>
                  <a href="https://www.linkedin.com/in/dilaliyanage/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <button type="button" className="solid-pill">
                      <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;LinkedIn
                    </button>
                  </a>
                </div>
                
                <div>
                  <a href="https://github.com/dilshanliyanage1000/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <button type="button" className="solid-pill">
                      <i className="fa-brands fa-github"></i>&nbsp;&nbsp;GitHub
                    </button>
                  </a>
                </div>
                
                <div>
                  <a href="https://www.instagram.com/just_dila/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <button type="button" className="solid-pill">
                      <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;Instagram
                    </button>
                  </a>
                </div>
                
                <div>
                  <a href="https://www.tiktok.com/@slcanadiankolla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <button type="button" className="solid-pill">
                      <i className="fa-brands fa-tiktok"></i>&nbsp;&nbsp;TikTok
                    </button>
                  </a>
                </div>
                
              </div>

            </div>

          </main>

        <BottomNav/>

      </>
      
    );

}

export default Contact;
