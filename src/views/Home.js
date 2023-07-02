import MainNav from '../partials/MainNav';

import Footer from '../partials/Footer';

import BottomNav from '../partials/BottomNav';

import UIUXLogo from '../assets/img/ui_logo_new.png';

import MainLogo from '../assets/img/dila_logo.png';

const Home = () => {

  const param1 = 'Home';

  return (

    <div>
      
      <MainNav title={param1} src={MainLogo}/>

        <main className="container" style={{marginTop: "6rem"}}>

          <div className="jumbotron">
            <div className="row">
              <div className="col-md-7">
                <h1 className="display-4">Hello!</h1>

                <h3 className="display-6 mt-5">I'm Dilshan Liyanage</h3>
                <h3 className="display-6" style={{fontSize: "25px"}}>You can call me Dila</h3>

                <h3 className="display-6 mt-5" style={{fontSize: "30px"}}>An Enthusiastic Web Developer and UI/UX Designer</h3>

                <h3 className="display-6 mb-4" style={{fontSize: "25px", marginTop: "100px"}}>Feel free to know more about me by clicking these sections...</h3>
                <a href="/about" style={{textDecoration: "none"}}>
                  <button type="button" className="btn index-link">
                    <h3 className="display-6" style={{fontSize: "20px"}}>About Me</h3>
                  </button>
                </a>

                <a href="/projects" style={{textDecoration: "none"}}>
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Projects</h3>
                  </button>
                </a>

                <a href="/services" style={{textDecoration: "none"}}>
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Services</h3>
                  </button>
                </a>

                <a href="/contact" style={{textDecoration: "none"}}>
                  <button type="button" className="btn index-link" style={{marginLeft: "10px"}}>
                    <h3 className="display-6" style={{fontSize: "20px"}}>Contact</h3>
                  </button>
                </a>

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

    </div>

  );
  
}

export default Home;
