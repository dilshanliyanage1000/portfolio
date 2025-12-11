
import MeOne from "../assets/img/side-2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    // faCloudArrowDown,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import DownloadFile from '../contents/Dilshan_Liyanage_Resume.pdf';

const NameCard = () => {

    // const downloadResume = () => {
    //     const link = document.createElement('a');
    //     link.href = DownloadFile;
    //     link.download = 'Dilshan_Liyanage_Resume.pdf';
    //     link.click();
    // };

    return (
        < div className="content-wrapper" >

            <p className="fs-4 raleway-light">Hey There! My name is</p>

            <p className="display-3 mt-1 neon-text">DILSHAN LIYANAGE</p>

            <a className="mt-3" style={{ textDecoration: 'none' }}>
                <img src={MeOne} alt={MeOne} style={{ width: '12rem' }} />
            </a>

            <p className="fs-1 mt-4 neon-text"> WEB DEVELOPER &amp; UI/UX DESIGNER</p>

            <p className="fs-5 raleway-light">...and occasionally, a graphic designer &amp; photographer!</p>

            <div className='mt-4 row align-items-center justify-content-center text-content'>

                <Link
                    style={{ textDecoration: "none" }}
                    type="button"
                    className="skill-pill"
                    to="https://www.linkedin.com/in/dilaliyanage/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffffff" }} />&nbsp;&nbsp;LinkedIn
                </Link>

                <Link
                    style={{ textDecoration: "none" }}
                    type="button"
                    className="skill-pill"
                    to="https://github.com/dilshanliyanage1000/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffffff" }} />&nbsp;&nbsp;GitHub
                </Link>

                <Link
                    style={{ textDecoration: "none" }}
                    type="button"
                    className="skill-pill"
                    to="mailto:dilshanliyanage@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#a0d1e6ff" }} />&nbsp;&nbsp;Email
                </Link>

                {/* <Link style={{ textDecoration: "none" }}
                    type="button"
                    className="skill-pill"
                    onClick={downloadResume}>
                    <FontAwesomeIcon icon={faCloudArrowDown} style={{ color: "#8bbbc7" }} />&nbsp;&nbsp;Resume
                </Link> */}

            </div>

        </div >
    );

};

export default NameCard;