import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import UIUXLogo from '../assets/img/ui_logo_new.png';

import { Link } from "react-router-dom";

const Home = () => {

  const param1 = "Home";

  return (

    <>
      
      <MainNav title={param1} />

        <main className="container" style={{marginTop: "6rem"}}>

          <div className="jumbotron">

            <div className="row">

              <div className="col-md-7">

                <h1 className="display-4">Hello!</h1>

                <h3 className="display-6 mt-5">I'm Dilshan Liyanage</h3>

                <h3 className="display-6" style={{fontSize: "1.5rem"}}>You can call me Dila</h3>

                <h3 className="display-6 mt-5" style={{fontSize: "30px"}}>An Enthusiastic Web Developer, UI/UX and Graphic Designer</h3>

                <h3 className="display-6 mb-4" style={{fontSize: "1.5rem", marginTop: "90px"}}>Feel free to know more about me by clicking these sections...</h3>

                <div className='row align-items-left justify-content-left'>

                  <div className='col-md-auto'  style={{padding: '5px', textAlign: "center"  }} >
                    <Link style={{textDecoration: "none"}} to="/about" >
                      <button type="button" className="btn index-link">
                        <h3 className="display-6" style={{fontSize: "18px"}}>About Me</h3>
                      </button>
                    </Link>
                  </div>

                  <div className='col-md-auto'  style={{padding: '5px', textAlign: "center"  }} >
                    <Link style={{textDecoration: "none"}} to="/projects" >
                      <button type="button" className="btn index-link">
                        <h3 className="display-6" style={{fontSize: "18px"}}>Projects</h3>
                      </button>
                    </Link>
                  </div>

                  <div className='col-md-auto'  style={{padding: '5px', textAlign: "center"  }} >

                    <Link style={{textDecoration: "none"}} to="/gallery" >

                      <button type="button" className="btn index-link">
                        <h3 className="display-6" style={{fontSize: "18px"}}>Gallery</h3>
                      </button>
                      
                    </Link>

                  </div>

                  <div className='col-md-auto'  style={{padding: '5px', textAlign: "center"  }} >
                    <Link style={{textDecoration: "none"}} to="/services" >
                      <button type="button" className="btn index-link">
                        <h3 className="display-6" style={{fontSize: "18px"}}>Services</h3>
                      </button>
                    </Link>
                  </div>

                  <div className='col-md-auto'  style={{padding: '5px', textAlign: "center"  }} >

                    <Link style={{textDecoration: "none"}} to="/contact" >

                      <button type="button" className="btn index-link">
                        <h3 className="display-6" style={{fontSize: "18px"}}>Contact</h3>
                      </button>
                      
                    </Link>

                  </div>

                </div>
                
              </div>
              
              <div className="col-md-5 text-end">

                <div className='row align-items-center justify-content-center'>

                  <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                  
                    <img src={UIUXLogo} alt="UI-UX Logo" style={{width: "70%"}} />

                  </div>

                </div>

                <h4 className="display-6 mt-5" style={{fontSize: "25px"}}>

                  <i>"Empowering digital experiences through innovative design and seamless functionality..."</i>

                </h4>

              </div>

            </div>

          </div>

        </main>

        <BottomNav/>

      <Footer/>

    </>

  );
  
}

export default Home;
