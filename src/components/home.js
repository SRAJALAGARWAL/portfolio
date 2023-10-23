import {Link} from "react-router-dom";
import "./portfolio.css";
import img from './Srajal.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Home(){
    const homestyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px"
    }
    return(
        <div class="body">
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Srajal Agarwal</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" style={homestyle}>Home</Link>
                        <Link to="/about" class="nav-link me-5">About</Link>
                        <Link to="/skill" class="nav-link me-5">Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="main">
                <div class="myname">
                    <div>
                        <h2>Hey,Welcome to My</h2>
                        <h1>Portfolio</h1>
                        <h3>I am Srajal Agarwal</h3>
                        <h4>you can know more about me in About Section</h4>
                    </div>
                </div>
                <div>
                    <img src={img} alt="profile"/>
                </div>
            </div>
            
        </div>
    )
}

export default Home;