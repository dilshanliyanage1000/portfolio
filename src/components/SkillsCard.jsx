import SkillIcon from './SkillIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ReactLogo from "../assets/img/skills/react-logo.png";
import JSLogo from "../assets/img/skills/js-logo.png";
import BootstrapLogo from "../assets/img/skills/bootstrap-logo.png";
// import JQueryLogo from "../assets/img/skills/jquery-logo.png";
import HTML5Logo from "../assets/img/skills/html5-logo.png";
import CCS3Logo from "../assets/img/skills/css3-logo.png";
// import JSONLogo from "../assets/img/skills/json-logo.png";
// import AJAXLogo from "../assets/img/skills/ajax-logo.png";
// import EJSLogo from "../assets/img/skills/ejs-logo.png";

import NodeJSLogo from "../assets/img/skills/nodejs-logo.png";
import RESTAPILogo from "../assets/img/skills/rest-api-logo.png";
import SpringbootLogo from "../assets/img/skills/springboot-logo.png";
import ExpressJSLogo from "../assets/img/skills/expressjs-logo.png";
import JavaLogo from "../assets/img/skills/java-logo.png";
import PHPLogo from "../assets/img/skills/php-logo.png";
import NETCoreLogo from "../assets/img/skills/netcore-logo.png";

import MongoDBLogo from "../assets/img/skills/mongodb-logo.png";
import OracleXELogo from "../assets/img/skills/oraclexe-logo.png";
import MySQLLogo from "../assets/img/skills/mysql-logo.png";
import SQLServerLogo from "../assets/img/skills/sqlserver-logo.png";

// import JenkinsLogo from "../assets/img/skills/jenkins-logo.png";
// import DockerLogo from "../assets/img/skills/docker-logo.png";
// import AWSLogo from "../assets/img/skills/aws-logo.png";

import GitLogo from "../assets/img/skills/git-logo.png";
import BitBucketLogo from "../assets/img/skills/bitbucket-logo.png";

import FigmaLogo from "../assets/img/skills/figma-logo.png";
import PhotoshopLogo from "../assets/img/skills/photoshop-logo.png";
import AfterEffectsLogo from "../assets/img/skills/aftereffects-logo.png";
import XDLogo from "../assets/img/skills/adobexd-logo.png";

const SkillsCard = () => {

    return (

        <div className="content-wrapper text-start">

            <p className="fs-6 raleway-regular">UI/UX Designing &amp; Multimedia</p>

            <div className="row">

                <div className="skill-pill"><SkillIcon path={FigmaLogo} />&nbsp;&nbsp;Figma</div>
                <div className="skill-pill"><SkillIcon path={PhotoshopLogo} />&nbsp;&nbsp;Adobe Photoshop</div>
                <div className="skill-pill"><SkillIcon path={AfterEffectsLogo} />&nbsp;&nbsp;Adobe After Effects</div>
                <div className="skill-pill"><SkillIcon path={XDLogo} />&nbsp;&nbsp;Adobe xD</div>

            </div>

            <p className="mt-4 fs-6 raleway-regular">Front-End Technologies</p>

            <div className="row">

                <div className="skill-pill"><SkillIcon path={ReactLogo} />&nbsp;&nbsp;React</div>
                <div className="skill-pill"><SkillIcon path={HTML5Logo} />&nbsp;&nbsp;HTML</div>
                <div className="skill-pill"><SkillIcon path={CCS3Logo} />&nbsp;&nbsp;CSS</div>
                <div className="skill-pill"><SkillIcon path={JSLogo} />&nbsp;&nbsp;JavaScript</div>
                <div className="skill-pill"><SkillIcon path={BootstrapLogo} />&nbsp;&nbsp;Bootstrap</div>
                {/* <div className="skill-pill"><SkillIcon path={JQueryLogo} />&nbsp;&nbsp;jQuery</div> 
                <div className="skill-pill"><SkillIcon path={JSONLogo} />&nbsp;&nbsp;JSON</div>
                <div className="skill-pill"><SkillIcon path={EJSLogo} />&nbsp;&nbsp;EJS</div>
                <div className="skill-pill"><SkillIcon path={AJAXLogo} />&nbsp;&nbsp;AJAX</div>*/}

            </div>

            <p className="mt-4 fs-6 raleway-regular">Back-End Technologies</p>

            <div className="row">

                <div className="skill-pill"><SkillIcon path={NodeJSLogo} />&nbsp;&nbsp;Node.js</div>
                <div className="skill-pill"><SkillIcon path={RESTAPILogo} />&nbsp;&nbsp;REST API</div>
                <div className="skill-pill"><SkillIcon path={SpringbootLogo} />&nbsp;&nbsp;SpringBoot</div>
                <div className="skill-pill"><SkillIcon path={ExpressJSLogo} />&nbsp;&nbsp;Express</div>
                <div className="skill-pill"><SkillIcon path={JavaLogo} />&nbsp;&nbsp;Java</div>
                <div className="skill-pill"><SkillIcon path={PHPLogo} />&nbsp;&nbsp;PHP</div>
                <div className="skill-pill"><SkillIcon path={NETCoreLogo} />&nbsp;&nbsp;ASP .NET Core</div>

            </div>

            <p className="mt-4 fs-6 raleway-regular">Database Management</p>

            <div className="row">

                <div className="skill-pill"><SkillIcon path={MongoDBLogo} />&nbsp;&nbsp;MongoDB</div>
                <div className="skill-pill"><SkillIcon path={OracleXELogo} />&nbsp;&nbsp;Oracle Xe</div>
                <div className="skill-pill"><SkillIcon path={MySQLLogo} />&nbsp;&nbsp;MySQL</div>
                <div className="skill-pill"><SkillIcon path={SQLServerLogo} />&nbsp;&nbsp;Microsoft SQL Server</div>

            </div>

            {/* <p className="mt-4 fs-6 raleway-regular">CI/CD & Cloud Services</p>

            <div className="row low-margin">

                <div className="skill-pill"><SkillIcon path={JenkinsLogo} />&nbsp;&nbsp;Jenkins</div>
                <div className="skill-pill"><SkillIcon path={DockerLogo} />&nbsp;&nbsp;Docker</div>
                <div className="skill-pill"><SkillIcon path={AWSLogo} />&nbsp;&nbsp;Amazon Web Services (AWS)</div>

            </div> */}

            <p className="mt-4 fs-6 raleway-regular">Version Control</p>

            <div className="row">

                <div className="skill-pill"><FontAwesomeIcon icon={faGithub} style={{ color: "#bebaff" }} />&nbsp;&nbsp;GitHub</div>
                <div className="skill-pill"><SkillIcon path={GitLogo} />&nbsp;&nbsp;GIT</div>
                <div className="skill-pill"><SkillIcon path={BitBucketLogo} />&nbsp;&nbsp;BitBucket</div>

            </div>

        </div>

    );

};

export default SkillsCard;