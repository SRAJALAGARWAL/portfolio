import {Link} from "react-router-dom";
import "./portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function About(){
    
    const aboutstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div class="outerdiv">
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand">Srajal Agarwal</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5" style={aboutstyle}>About</Link>
                        <Link to="/skill" class="nav-link me-5">Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>About</h2></div>
            <div class="main-details">
                <div>
                    <label>Name:</label><span class="details">Srajal Agarwal</span><br/><br/>
                    <label>Date of Birth:</label><span class="details">23 March 2003</span><br/><br/>
                    <label>Age:</label><span class="details">20</span><br/><br/>
                    <label>Degree:</label><span class="details">Bachelor of Technology in Computer Science</span><br/><br/>
                    <label>College:</label><span class="details">Vellore Institute of Technology, Vellore</span><br/><br/>
                    <label>Phone No:</label><span class="details">+91 9468886051</span><br/><br/>
                    <label>Email:</label><span class="details">srajalagarwal03@gmail.com</span><br/><br/>

                </div>
                <div class="education">
                    <h3>Education details:</h3>
                    <h5 class="clgname">VIT-Vellore University</h5>
                    <h6>(2021-2025)</h6>
                    <h6>B.Tech in Computer Science and Engineering</h6>
                    <br/>
                    <h5 class="clgname">LBS Public School</h5>
                    <h6>(2018-2020)</h6>
                    <h6>11th-12th</h6>
                    <h6>Percentage: <span class="result">79.6%</span></h6>

                </div>
            </div>
            <div class="work">
                <h2>Work experience</h2>
                <h5 class="clubname">IEEE Club - VIT Vellore </h5>
                <p>Working as a web developer for
                IEEE club.</p>
                <h5 class="clubname">BIF Club - VIT Vellore </h5>
                <p>Teaching childrens with economic problems
                    so that they have a better future .</p>
                <br/>
            </div>
        </div>
    )
}
export default About;