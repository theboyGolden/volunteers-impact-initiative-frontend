import React, { useState } from "react";
import './Navbar.css';
import Logo from '../Assets/logo.jpg';
import homeIcon from '../Assets/home.png';
import aboutIcon from '../Assets/about.png';
import contactIcon from '../Assets/contact.png';
import projectsIcon from '../Assets/projects.png';
import Volunteer from '../Assets/volunteer.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

function Navbar() {
    const [isMobile, setIsMobile] = useState(false); // State to handle mobile navbar display

    return (
        <nav className="nav">
            <h1><a href="/" className="site-title"><img src={Logo} alt="Logo" style={{ height: 70, width: 120 }} className="VIIlogo" />Volunteers Impact Initiative</a></h1>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <li><a href="/"><img src={homeIcon} alt="Home Icon" style={{ height: 30, width: 30 }} /> Home  </a></li>
                <li><a href="/About"><img src={aboutIcon} alt="About Icon" style={{ height: 30, width: 30 }} /> About</a></li>
                <li><a href="Contact"><img src={contactIcon} alt="Contact Icon" style={{ height: 30, width: 30 }} />Contact</a></li>
                <li><a href="/Projects"><img src={projectsIcon} alt="Projects Icon" style={{ height: 30, width: 30 }} />Projects</a></li>
                <li><a href="/VolunteerNow"><img src={Volunteer} alt="Volunteer Icon" style={{ height: 30, width: 30 }} />Become a Volunteer</a></li>
            </ul>
            <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Toggle between bars and close icon */}
            </div>
        </nav>
    );
}

export default Navbar;
