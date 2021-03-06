import React from 'react';
import { Link } from 'react-router-dom';
import genius from '../../images/genius-couching.png';
import computer from '../../images/computer-velly.png';
import './Projects.css';

const Projects = () => {
    return (
        <div>
             <div className="text-center mb-5 mt-5"><h1 className="project">My Projects</h1></div>
             <div className="row d-flex">
                <div className="col-md-5 offset-md-1">
                   <div className="text-center"> <h1>Genius Couching</h1></div>
                    <img className="w-100" src={genius} alt=""/>
                    <p>This is a Math Couching Site. Where students can enroll various types of course. Users can review the course, view their entitled course, make payment through credit cards. Admin can add course, delete course, change status of the course. Also make an admin.</p>
                    <Link className="btn btn-primary mr-2">Live Link</Link>
                    <Link className="btn btn-success mr-2">Code Link</Link>
                </div>
                <div className="col-md-5">
                <div className="text-center"><h1>Computer Valley</h1></div>
                    <img className="w-100" src={computer} alt=""/>
                    <p>This is a Computer Shop Project where people add their product with price dynamically. Also book their product and show their all ordered product. Delete Product is implemented in this project.</p>
                    <Link className="btn btn-primary mr-2">Live Link</Link>
                    <Link className="btn btn-success mr-2">Code Link</Link>
                </div>
             </div>   
        </div>
    );
};

export default Projects;