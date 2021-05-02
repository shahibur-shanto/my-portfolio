import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
        <Navbar.Brand href="#home"><span  className="blue-color">SHAHIBUR SHANTO</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ml-xs-auto">
            <Link  className="blue-color pr-5" to="/">Home</Link>
            <Link className="blue-color pr-5" to="resume">Resume</Link>
            <Link className="blue-color pr-5" to="/portfolio">Portfolio</Link>
            <Link className="blue-color pr-5" to="about">Contact me</Link>
            <Link className="blue-color pr-5" to="/blog">Blog</Link>
            <Link className="blue-color" target="_blank"><a href="https://drive.google.com/file/d/1v6cVR0fcSLVb0-h9TUegbu6Zgyq3DQ7s/view?usp=sharing">Download Resume</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavBar;