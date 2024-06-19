import React, { useRef, useState, useEffect } from 'react';
import MainNav from '../components/MainNav';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircleNotch, faDroplet, faEnvelopesBulk, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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
import BgOne from "../assets/img/bg/abstract_01.png";

const Gallery = () => {

    const param1 = "Gallery";

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const colorGradingRef = useRef(null);
    const businessPostsRef = useRef(null);
    const doodlesRef = useRef(null);
    const logosRef = useRef(null);
    const instagramPostsRef = useRef(null);
    const mainContentRef = useRef(null);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${BgOne})`;
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#11222b";
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>

            <MainNav title={param1} />

            <div ref={mainContentRef} id="main_content"></div>

            <div className="main-content-area">

                <main className="custom-container" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="frosted-glass br-20">

                        <div className="content-wrapper">

                            <p className="display-4 mt-4 abril-fatface-regular">Gallery</p>

                            <p className="poppins-extralight fs-5 mt-3">
                                From bringing old black-and-white photos to life with color, to designing fun doodles, unique logos, and eye-catching Instagram posts, each piece reflects my creativity and passion for digital design. Enjoy exploring my work!
                            </p>

                            <div className='mt-4 row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(colorGradingRef)}>
                                        <FontAwesomeIcon icon={faDroplet} />&nbsp;&nbsp;Color Grading
                                    </button>
                                </div>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(businessPostsRef)}>
                                        <FontAwesomeIcon icon={faEnvelopesBulk} />&nbsp;&nbsp;Business Posts
                                    </button>
                                </div>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(doodlesRef)}>
                                        <FontAwesomeIcon icon={faPencil} />&nbsp;&nbsp;Doodles
                                    </button>
                                </div>

                            </div>

                            <div className='mt-2 row align-items-center justify-content-center text-content lower-deck'>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(logosRef)}>
                                        <FontAwesomeIcon icon={faCircleNotch} />&nbsp;&nbsp;Logos
                                    </button>
                                </div>

                                <div className='col-md-auto' style={{ textAlign: "center" }} >
                                    <button
                                        type="button"
                                        className="theme-button"
                                        onClick={() => scrollToSection(instagramPostsRef)}>
                                        <FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;Instagram Posts
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

                </main >

                <div ref={colorGradingRef} id="color_grading"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-center text-white custom-underline">Color Grading</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">'Motor Races (1975) - Lake Round, Kandy, Sri Lanka'</p>

                            <p className="fs-5 poppins-extralight">Recreating a moment that was originally captured in black and white and then colored using Photoshop is a process of adding color to a monochromatic image to bring it to life. It involves digitally applying colors to different elements of the image, such as objects, people, background, and more, to evoke a sense of realism or artistic expression</p>

                            <p className="fs-5 poppins-extralight">Source : © Need for Speed (Logo)</p>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Original (1975)</p>

                                    <a href={KandyOldImage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={KandyOldImage} alt={KandyOldImage} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Manipulated</p>

                                    <a href={KandyNewImage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={KandyNewImage} alt={KandyNewImage} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={businessPostsRef} id="business_posts"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-center text-white custom-underline">Business Posts for Instagram</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">'Supulvee Batiks' - Online Clothing Store</p>

                            <p className="fs-5 poppins-extralight">Creating Instagram posts for a batik store using Photoshop involves designing visually appealing and engaging
                                content that showcases the unique beauty of batik fabrics and products</p>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SupulveeTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SupulveeTwo} alt={SupulveeTwo} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SupulveeThree} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SupulveeThree} alt={SupulveeThree} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SupulveeFour} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SupulveeFour} alt={SupulveeFour} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SupulveeFive} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SupulveeFive} alt={SupulveeFive} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SupulveeOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SupulveeOne} alt={SupulveeOne} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={doodlesRef} id="doodles"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-center text-white custom-underline">Doodles</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-3 abril-fatface-regular">Bathiya & Santhush' - Brand Ambassador for SONY Sri Lanka</p>

                            <p className="fs-5 poppins-extralight">Creating doodles of two famous singers in Sri Lanka using Photoshop can be a fun and creative project. Since I have been drawing with a mouse, it may require some practice to get the desired level of detail, but it's definitely doable.</p>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Bathiya (Unedited)</p>

                                    <a href={BathiyaOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={BathiyaOne} alt={BathiyaOne} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Bathiya (Doodled)</p>

                                    <a href={BathiyaTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={BathiyaTwo} alt={BathiyaTwo} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                            </div>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Santhush (Unedited)</p>

                                    <a href={SanthushOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SanthushOne} alt={SanthushOne} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "20px" }}>

                                    <p className="fs-5 poppins-extralight">Santhush (Doodled)</p>

                                    <a href={SanthushTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SanthushTwo} alt={SanthushTwo} style={{ width: '15rem' }} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={logosRef} id="logos"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-center text-white custom-underline">Logos</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-5 poppins-extralight">My logo design process begins with a thorough understanding of the brand's identity, target audience, and values. I believe that an exceptional logo should not only be visually striking but also communicate the brand's core message effectively.</p>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={CanadianKomlaLogo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={CanadianKomlaLogo} alt={CanadianKomlaLogo} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={CCSAITamilOne} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={CCSAITamilOne} alt={CCSAITamilOne} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={CCSAITamilTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={CCSAITamilTwo} alt={CCSAITamilTwo} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={SimplyOrganicLogo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={SimplyOrganicLogo} alt={SimplyOrganicLogo} style={{ width: '9rem' }} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div ref={instagramPostsRef} id="instagram"></div>

                <main className="custom-container mt-5" style={{ textAlign: windowWidth < 768 ? 'center' : 'left' }}>

                    <div className="text-center">
                        <p className="mt-5 fs-1 abril-fatface-regular text-center text-white custom-underline">Instagram & Product Posts</p>
                    </div>

                    <div className="mt-3 frosted-glass br-20">

                        <div className="content-wrapper text-start">

                            <p className="fs-5 poppins-extralight">Creating Instagram posts using Photoshop allows you to have full creative control over the design and visual appeal of your content.</p>

                            <div className='row align-items-center justify-content-center text-content'>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={CJvintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={CJvintage} alt={CJvintage} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={CJmedia} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={CJmedia} alt={CJmedia} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={DayaMama} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={DayaMama} alt={DayaMama} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={HashiVintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={HashiVintage} alt={HashiVintage} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={IshaniVintage} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={IshaniVintage} alt={IshaniVintage} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={soundpeats} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={soundpeats} alt={soundpeats} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={lali} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={lali} alt={lali} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={dianBW} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={dianBW} alt={dianBW} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={sajeeThree} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={sajeeThree} alt={sajeeThree} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={DianRetro} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={DianRetro} alt={DianRetro} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={DianRetroTwo} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={DianRetroTwo} alt={DianRetroTwo} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                                <div className='col-md-auto' style={{ textAlign: 'center', padding: "10px" }}>

                                    <a href={Sayu} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                                        <img src={Sayu} alt={Sayu} style={{ width: '10rem' }} />
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </main>

                <div className='mt-5 mb-4 row align-items-center justify-content-center text-content'>

                    <div className='col-md-auto text-center'>
                        <button type="button" className="theme-button" onClick={() => scrollToSection(mainContentRef)}>
                            <FontAwesomeIcon icon={faArrowUp} />&nbsp;&nbsp;Go to Top
                        </button>
                    </div>

                </div>

            </div >

            <BottomNav />

        </>
    );

};


export default Gallery;
