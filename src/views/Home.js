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
                <h3 className="display-6" style={{fontSize: "25px"}}>You can call me Dila</h3>

                <h3 className="display-6 mt-5" style={{fontSize: "30px"}}>An Enthusiastic Web Developer and UI/UX Designer</h3>

                <h3 className="display-6 mb-4" style={{fontSize: "25px", marginTop: "100px"}}>Feel free to know more about me by clicking these sections...</h3>

                <Link style={{textDecoration: "none"}} to="/about" >
                  <button type="button" className="btn index-link">
                    <h3 className="display-6" style={{fontSize: "20px"}}>About Me</h3>
                  </button>
                </Link>

                
                <Link style={{textDecoration: "none"}} to="/projects" >
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Projects</h3>
                  </button>
                </Link>
                
                <Link style={{textDecoration: "none"}} to="/services" >
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Services</h3>
                  </button>
                </Link>

                <Link style={{textDecoration: "none"}} to="/contact" >
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Contact</h3>
                  </button>
                </Link>

              </div>
              
              <div className="col-md-5 text-end">
                <img src={UIUXLogo} alt="UI-UX Logo" style={{width: "70%"}} />

                <h4 className="display-6" style={{fontSize: "25px", marginTop: "100px"}}>
                  <i>"Empowering digital experiences through innovative design and seamless functionality."</i>
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
