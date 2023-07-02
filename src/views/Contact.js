import React from 'react';

import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import MainLogo from '../assets/img/dila_logo.png';

const Contact = () => {

  const param1 = 'Contact';

    return (

      <div>

        <MainNav title={param1} src={MainLogo}/>

          <main className="container" style={{ marginTop: '6rem', marginBottom: '2rem' }}>

            <div className="jumbotron text-center">

              <h1 className="display-5">Let's connect!</h1>

              {/* Link to visit my LinkedIn profile */}
              <p className="display-5 mt-3" style={{ fontSize: '20px' }}>
                <a href="https://www.linkedin.com/in/dilaliyanage/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>

                <a href="https://github.com/dilshanliyanage1000/portfolioSite" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginLeft: '30px' }}>
                  <i className="fa-brands fa-github"></i> GitHub
                </a>

                <a href="mailto:aliyana4@my.centennialcollege.ca" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginLeft: '30px' }}>
                  <i className="fa-solid fa-envelope-open"></i> Email
                </a>
              </p>

              <p className="display-5" style={{ fontSize: '20px' }}>Please feel free to reach out to me by filling out this form, and I will get back to you as soon as possible!</p>

              {/* Form to capture user input */}
              <form className="mt-4" action="/" style={{ width: '500px', margin: '0 auto' }}>
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
                  <textarea className="form-control" name="message" id="message" rows="2"></textarea>
                </div>

                <button type="submit" className="btn btn-light">Connect!</button>

              </form>

            </div>

          </main>

        <BottomNav/>

        <Footer/>

      </div>
      
    );

}

export default Contact;
