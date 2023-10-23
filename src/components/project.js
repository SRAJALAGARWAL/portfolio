import {Link} from "react-router-dom";
import "./portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Projects(){

    const projectstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Srajal Agarwal</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5">About</Link>
                        <Link to="/skill" class="nav-link me-5" >Skills</Link>
                        <Link to="/projects" class="nav-link me-5" style={projectstyle}>Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>Projects</h2></div>
            
        </div>
    )
}

export default Projects;