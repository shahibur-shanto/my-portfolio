import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';
 
const Resume = () => {
   
    return (
        <div className="resume-div">
        <div  className="text-center"><h1>My resume</h1></div>
        <div className="d-flex justify-content-center">
        <div className="w-75">
        <Link className="btn btn-primary" target="_blank"><a className="resume" href="https://drive.google.com/file/d/1v6cVR0fcSLVb0-h9TUegbu6Zgyq3DQ7s/view?usp=sharing">Download Resume</a></Link>
            <h2>Mohammad Shahibur Rahman</h2>
            <address>
            Address: 13/C,4/46,Mirpur, Dhaka<br/>
(+880)-1717-464016<br/>
email: <a href="mailto:shahibur407@gmail.com">shahibur407@gmail.com</a><br/>
LinkedIn: <a href="https://www.linkedin.com/in/shahibur-shanto-2191a61bb/">https://www.linkedin.com/in/shahibur-shanto-2191a61bb/</a><br/>
gitHub: <a href="https://github.com/shahibur-shanto">https://github.com/shahibur-shanto</a><br/>
            </address>
            <hr/>
            <h3>Career Objective:</h3>
<p>To gain confidence and fame using my potential in the field of “Web Development”, and express my
innovative creative skills for self and company growth.</p>
<hr/>
<h3>Projects</h3>
<ul>
    <li>Genius Couching</li>
    <ul>
        <li>Live Site: <a href="https://genius-coaching-b65c7.web.app/">https://genius-coaching-b65c7.web.app/</a></li>
        <li>Technology: The site is made with React, Node, Express, MongoDB, HTML5, CSS,
Bootstrap</li>
<li>Authentication: Google Login Authentication with Firebase.</li>
    </ul>

    <li>Computer Vallay</li>
    <ul>
        <li>Live Site: <a href="https://computer-velly.web.app/">https://computer-velly.web.app/</a></li>
        <li>Technology: The site is made with React, Node, Express, MongoDB, HTML5, CSS,
Bootstrap</li>
<li>Authentication: Google Login Authentication with Firebase.</li>
    </ul>


    <li>Travel Simple</li>
    <ul>
        <li>Live Site: <a href="https://travel-simple-a1fab.web.app/">https://travel-simple-a1fab.web.app/</a></li>
        <li>Technology: The site is made with React, HTML5, CSS, Bootstrap.</li>
<li>Authentication: Google Login Authentication with Firebase.</li>
    </ul>

</ul>

<hr/>

<h3>Certification:</h3>
<ul><li>Enterprise Systems Analysis & Design-C# | 2012</li>
<li>Python Basic from HackerRank</li>
<li>Python Intermediate from HackerRank</li>
<li>Complete Web Development Course with Jhankar Mahbub</li></ul>

<hr/>
<h3>Professional Experience:</h3>
<p>Dutch Bangla Bank Ltd. as, Dhaka, Bangladesh| January 2012– Present</p>
<p>Senior Executive Officer</p>

<hr/>
<h3>Education</h3>
<p>Jahangirnagar University | Dhaka | 2008</p>
<p>Masters of Science in Mahtematics</p>
        </div>
        </div>
        </div>
    );
};

export default Resume;