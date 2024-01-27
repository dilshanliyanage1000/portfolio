import React, { useEffect, useState } from 'react';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

import MyImage from '../assets/img/me_1.png';

import { Link } from "react-router-dom";

const Home = () => {

  const param1 = "Home";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <>
      
      <MainNav title={param1} />

      <main className="container" style={{marginTop: "5rem", marginBottom: "4rem", textAlign: windowWidth < 768 ? 'center' : 'left'}}>

        <div className="jumbotron">

          <div className="row">
            
            <div className="col-md-5 col-lg-5 text-center" style={{marginTop: "3rem"}}>
                
              <img src={MyImage} alt="UI-UX Logo" style={{width: "75%"}} />

            </div>

            <div className="col-md-7 col-lg-7" style={{marginTop: "3rem"}}>

              <h1 className="display-6" style={{fontSize: "30px"}}>Hey There! Welcome to my Portfolio!</h1>

              <h3 className="display-5 mt-5 theme-color fw-medium">I'm Dilshan Liyanage</h3>

              <h3 className="display-6" style={{fontSize: "1.5rem"}}>You can call me Dila</h3>

              <h3 className="display-6 mt-5" style={{fontSize: "30px"}}>Web Developer | UI/UX and Graphic Designer</h3>

              <h4 className="display-6 mt-5" style={{fontSize: "20px"}}>

                <i>"Empowering digital experiences through innovative design and seamless functionality..."</i>

              </h4>

              <div className='row align-items-left justify-content-left text-content' style={{marginTop: "2rem"}}>

                <div className='col-md-auto'  style={{padding: "10px",  textAlign: "center" }} >

                  <Link to="/about" >

                    <button type="button" className="solid-pill">
                      <h3 className="pill-text">Know more about me<i class="fa-solid fa-arrow-right" style={{marginLeft: "10px"}}></i></h3>
                    </button>

                  </Link>

                </div>

                <div className='col-md-auto'  style={{padding: "10px",  textAlign: "center" }} >

                  <Link to="/projects" >

                    <button type="button" className="solid-pill">
                      <h3 className="pill-text">View my projects<i class="fa-solid fa-arrow-right" style={{marginLeft: "10px"}}></i></h3>
                    </button>

                  </Link>

                </div>

              </div>
              
            </div>

          </div>

        </div>

      </main>

      <BottomNav/>

    </>

  );
  
}

export default Home;
