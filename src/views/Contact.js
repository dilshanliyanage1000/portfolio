import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

const Contact = () => {

  const param1 = "Contact";

    return (

      <>

        <MainNav title={param1} />

          <main className="container" style={{ marginTop: '6rem', marginBottom: '3rem' }}>

            <div className="jumbotron text-center">

              <h1 className="display-5 mb-3">Let's connect!</h1>

              <div className='row align-items-center justify-content-center display-5 mb-3' style={{ fontSize: '20px' }}>

                <div className='col-md-auto'  style={{margin: '5px', textAlign: "center"  }} >
                  <a href="mailto:aliyana4@my.centennialcollege.ca" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <i className="fa-solid fa-envelope-open"></i>&nbsp;&nbsp;Email
                  </a>
                </div>

                <div className='col-md-auto'  style={{margin: '5px', textAlign: "center"  }} >
                    <a href="https://www.linkedin.com/in/dilaliyanage/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                      <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp;LinkedIn
                    </a>
                </div>

                <div className='col-md-auto'  style={{margin: '5px', textAlign: "center"  }} >
                  <a href="https://github.com/dilshanliyanage1000/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <i className="fa-brands fa-github"></i>&nbsp;&nbsp;GitHub
                  </a>
                </div>

                <div className='col-md-auto'  style={{margin: '5px', textAlign: "center"  }} >
                  <a href="https://www.instagram.com/just_dila/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;Instagram
                  </a>
                </div>

                <div className='col-md-auto'  style={{margin: '5px', textAlign: "center"  }} >
                  <a href="https://www.tiktok.com/@slcanadiankolla" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                    <i class="fa-brands fa-tiktok"></i>&nbsp;&nbsp;TikTok
                  </a>
                </div>

              </div>

              <p className="display-5" style={{ fontSize: '20px' }}>Please feel free to reach out to me by filling out this form, and I will get back to you as soon as possible!</p>

              <div className="container">

                <div className="row justify-content-center">

                  <div className="col-md-6">
                  
                    <form className="mt-4 align-items-center justify-content-center" action="/" >
                  
                      <div className="mb-3" style={{ textAlign: 'start', width: '100%' }}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" id="name" name="name" />
                      </div>

                      <div className="mb-3" style={{ textAlign: 'start', width: '100%' }}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                      </div>

                      <div className="mb-3" style={{ textAlign: 'start', width: '100%' }}>
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="subject" className="form-control" id="subject" name="subject" />
                      </div>

                      <div className="mb-3" style={{ textAlign: 'start', width: '100%' }}>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="message" rows="1" ></textarea>
                      </div>

                      <button type="button" className="btn btn-light">Connect!</button>

                    </form>

                  </div>

                </div>

              </div>

            </div>

          </main>

        <BottomNav/>

        <Footer/>

      </>
      
    );

}

export default Contact;
