import React from 'react';

import { Link } from 'react-scroll';

import MainNav from '../partials/MainNav';

import BottomNav from '../partials/BottomNav';

import KandyOldImage from "../assets/img/color_grading/img.jpg";

import KandyNewImage from "../assets/img/color_grading/nfs heritage.png";

import SupulveeOne from "../assets/img/supulvee/006.png";

import SupulveeTwo from "../assets/img/supulvee/002.png";

import SupulveeThree from "../assets/img/supulvee/003.png";

import SupulveeFour from "../assets/img/supulvee/004.png";

import SupulveeFive from "../assets/img/supulvee/005.png";

import BathiyaOne from "../assets/img/doodle/b.jpg";

import BathiyaTwo from "../assets/img/doodle/bathiya.png";

import SanthushOne from "../assets/img/doodle/s.jpg";

import SanthushTwo from "../assets/img/doodle/santhush.png";

import CJvintage from "../assets/img/instagram/cj vintage.png";

import CJmedia from "../assets/img/instagram/cj media.png";

import DayaMama from "../assets/img/instagram/Daya mama.png";

import HashiVintage from "../assets/img/instagram/Hashi Vintage.png";

import IshaniVintage from "../assets/img/instagram/Ishani.png";

import soundpeats from "../assets/img/instagram/soundpeats.png";

import lali from "../assets/img/instagram/lali.png";

import dianBW from "../assets/img/instagram/Dian b&w.png";

import sajeeThree from "../assets/img/doodle/sajeethree.png";

import DianRetro from "../assets/img/instagram/Dian Retro (Airbus).png";

import DianRetroTwo from "../assets/img/instagram/Dian Retro (Cockpit).png";

import Sayu from "../assets/img/doodle/sayu.png";

import CanadianKomlaLogo from "../assets/img/logos/canadiankomla.png";

import CCSAITamilOne from "../assets/img/logos/ccsai-tamil-one.png";

import CCSAITamilTwo from "../assets/img/logos/ccsai-tamil-two.png";

import SimplyOrganicLogo from "../assets/img/logos/simplyorganic.png";

const Gallery = () => {

    const param1 = "Gallery";

    return (
    
        <>

            <MainNav title={param1} />
            
                <main className="container" style={{ marginTop: '8rem', marginBottom: '5rem' }}>

                    <div className="jumbotron">

                        <h1 className="display-5 text-center theme-color fw-medium">Gallery</h1>

                        <div className="text-center mt-4">

                            <div className='row align-items-center justify-content-center'>

                                <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                                    <Link style={{textDecoration: "none", padding: "10px"}} to="colorgrading" smooth={true} duration={500} offset={-100} >
                                        <button type="button" className="solid-pill" style={{width: "15rem"}}>
                                            <h3 className="pill-text">
                                                <i class="fa-solid fa-droplet" style={{marginRight: "10px"}}></i>Color Grading
                                            </h3>
                                        </button>
                                    </Link>
                                </div>

                                <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                                    <Link style={{textDecoration: "none"}} to="business_posts" smooth={true} duration={500} offset={-100} >
                                        <button type="button" className="solid-pill" style={{width: "15rem"}}>
                                            <h3 className="pill-text">
                                                <i class="fa-solid fa-envelopes-bulk" style={{marginRight: "10px"}}></i>Business Posts
                                            </h3>
                                        </button>
                                    </Link>
                                </div>

                                <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                                    <Link style={{textDecoration: "none"}} to="doodle" smooth={true} duration={500} offset={-100} >
                                        <button type="button" className="solid-pill" style={{width: "15rem"}}>
                                            <h3 className="pill-text">
                                                <i class="fa-solid fa-pencil" style={{marginRight: "10px"}}></i>Doodles
                                            </h3>
                                        </button>
                                    </Link>
                                </div>

                                <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                                    <Link style={{textDecoration: "none"}} to="logo" smooth={true} duration={500} offset={-100} >
                                        <button type="button" className="solid-pill" style={{width: "15rem"}}>
                                            <h3 className="pill-text">
                                                <i class="fa-solid fa-circle-notch" style={{marginRight: "10px"}}></i>Logos
                                            </h3>
                                        </button>
                                    </Link>
                                </div>

                                <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >
                                    <Link style={{textDecoration: "none"}} to="insta_posts" smooth={true} duration={500} offset={-100} >
                                        <button type="button" className="solid-pill" style={{width: "15rem"}}>
                                            <h3 className="pill-text">
                                                <i class="fa-brands fa-instagram" style={{marginRight: "10px"}}></i>Instagram Posts
                                            </h3>
                                        </button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <section id="colorgrading">

                            <h2 className="theme-color fw-medium display-4" style={{ fontSize: '30px', marginTop: "6rem" }}>Color Grading & Manipulations</h2>

                            <hr className="border border-light border-1 opacity-75" width="100" />

                            <p  className="mt-5" style={{ fontSize: "20px" }}>
                                
                                <span className='fw-medium'>'Motor Races (1975) - Lake Round, Kandy, Sri Lanka'</span>
                                
                                <br/><br/>

                                Recreating a moment that was originally captured in black and white and then colored using Photoshop is a process of adding color
                                to a monochromatic image to bring it to life. It involves digitally applying colors to different elements of the image, such as
                                objects, people, background, and more, to evoke a sense of realism or artistic expression

                                <br/> <br/>

                                Source : &copy; Need for Speed (Logo)

                            </p>

                            <div className='container mt-4'>

                                <div className='row align-items-center justify-content-center'>

                                    <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                        <p style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Original (1975)
                                        </p>

                                        <a href={KandyOldImage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                            <img src={KandyOldImage} alt={KandyOldImage}style={{ width: '20rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px"  }}>

                                        <p style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Manipulated
                                        </p>

                                        <a href={KandyNewImage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={KandyNewImage} alt={KandyNewImage} style={{ width: '20rem' }} />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </section>

                        <section id="business_posts">

                            <h2 className="theme-color fw-medium display-4" style={{ fontSize: '30px', marginTop: "10rem" }}>Business Posts for Instagram</h2>

                            <hr className="border border-light border-1 opacity-75" width="100" />

                            <p className="mt-4" style={{ fontSize: '20px' }}>
                                <span className='fw-medium'>'Supulvee Batiks'</span>
                                
                                <br/><br/>

                                Creating Instagram posts for a batik store using Photoshop involves designing visually appealing and engaging
                                content that showcases the unique beauty of batik fabrics and products

                            </p>

                            <div className='container mt-4'>

                                <div className='row align-items-center justify-content-center'>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center" }}>

                                        <a href={SupulveeTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SupulveeTwo} alt={SupulveeTwo} style={{ width: '13rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <a href={SupulveeThree} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SupulveeThree} alt={SupulveeThree} style={{ width: '13rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <a href={SupulveeFour} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SupulveeFour} alt={SupulveeFour} style={{ width: '13rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <a href={SupulveeFive} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SupulveeFive} alt={SupulveeFive} style={{ width: '13rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <a href={SupulveeOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                            <img src={SupulveeOne} alt={SupulveeOne} style={{ width: '13rem' }} />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </section>

                        <section id="doodle">

                            <h2 className="theme-color fw-medium display-4" style={{ fontSize: '30px', marginTop: "10rem" }}>Doodles</h2>

                            <hr className="border border-light border-1 opacity-75" width="100" />

                            <p className="mt-4" style={{ fontSize: '20px' }}>
                                <span className='fw-medium'>'Bathiya & Santhush - Brand Ambassador for SONY Sri Lanka'</span>
                                
                                <br/><br/>

                                Creating doodles of two famous singers in Sri Lanka using Photoshop can be a fun and creative project. Since I have
                                been drawing with a mouse, it may require some practice to get the desired level of detail, but it's definitely
                                doable.

                            </p>

                            <div className='container mt-4'>
                                <div className='row align-items-center justify-content-center'>

                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <p className="mt-3" style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Bathiya (Unedited)
                                        </p>

                                        <a href={BathiyaOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={BathiyaOne} alt={BathiyaOne} style={{ width: '17rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <p className="mt-3" style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Bathiya (Doodled)
                                        </p>

                                        <a href={BathiyaTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={BathiyaTwo} alt={BathiyaTwo} style={{ width: '17rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <p className="mt-3" style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Santhush (Unedited)
                                        </p>

                                        <a href={SanthushOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SanthushOne} alt={SanthushOne} style={{ width: '17rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '15px', textAlign: "center"  }}>

                                        <p className="mt-3" style={{ fontSize: '20px' }}>
                                            Santhush (Doodled)
                                        </p>

                                        <a href={SanthushTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SanthushTwo} alt={SanthushTwo} style={{ width: '17rem' }} />
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </section>

                        <section id="logo">

                            <h2 className="theme-color fw-medium display-4" style={{ fontSize: '30px', marginTop: "10rem" }}>Logos</h2>

                            <hr className="border border-light border-1 opacity-75" width="100" />

                            <p className="mt-4" style={{ fontSize: '20px' }}>

                            My logo design process begins with a thorough understanding of the brand's identity, target audience, 
                            and values. I believe that an exceptional logo should not only be visually striking but also communicate 
                            the brand's core message effectively.

                            </p>

                            <div className='container mt-5'>

                                <div className='row align-items-center justify-content-center'>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={CanadianKomlaLogo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={CanadianKomlaLogo} alt={CanadianKomlaLogo} style={{ width: '10rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={CCSAITamilOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={CCSAITamilOne} alt={CCSAITamilOne} style={{ width: '10rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={CCSAITamilTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={CCSAITamilTwo} alt={CCSAITamilTwo} style={{ width: '10rem' }} />
                                        </a>

                                    </div>
                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={SimplyOrganicLogo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={SimplyOrganicLogo} alt={SimplyOrganicLogo} style={{ width: '10rem' }} />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </section>

                        <section id="insta_posts">

                            <h2 className="theme-color fw-medium display-4" style={{ fontSize: '30px', marginTop: "10rem" }}>Instagram & Product Posts</h2>

                            <hr className="border border-light border-1 opacity-75" width="100" />

                            <p className="mt-4" style={{ fontSize: '20px' }}>

                                Creating Instagram posts using Photoshop allows you to have full creative control over the design and visual appeal of your content.

                            </p>

                            <div className='container mt-5'>

                                <div className='row align-items-center justify-content-center'>

                                    <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }} >

                                        <a href={CJvintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={CJvintage} alt={CJvintage} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={CJmedia} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={CJmedia} alt={CJmedia} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={DayaMama} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={DayaMama} alt={DayaMama} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={HashiVintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={HashiVintage} alt={HashiVintage} style={{ width: '12rem' }} />
                                        </a>

                                    </div>
                                    
                                    
                                    <div className='col-md-auto'  style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={IshaniVintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={IshaniVintage} alt={IshaniVintage} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={soundpeats} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={soundpeats} alt={soundpeats} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={lali} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={lali} alt={lali} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={dianBW} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={dianBW} alt={dianBW} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={sajeeThree} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={sajeeThree} alt={sajeeThree} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={DianRetro} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={DianRetro} alt={DianRetro} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={DianRetroTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={DianRetroTwo} alt={DianRetroTwo} style={{ width: '12rem' }} />
                                        </a>

                                    </div>

                                    <div className='col-md-auto' style={{padding: '10px', textAlign: "center"  }}>

                                        <a href={Sayu} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none'}}>
                                            <img src={Sayu} alt={Sayu} style={{ width: '12rem' }} />
                                        </a>

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

export default Gallery;
