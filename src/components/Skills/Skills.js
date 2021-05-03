import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skill-div">
        
            <div className="row w-75">
            <div className="col-md-12"><h1 className="text-center">My Skills</h1></div>
            <div className="col-md-8">
            <span>HTML</span>
            <ProgressBar animated variant="success" now={90} label={`90%`} />
            <br/>
            </div>
            
            <div className="col-md-8">
            <span>CSS</span>
            <ProgressBar variant="warning" animated now={80} label={`80%`} />
            <br/>
            </div>
            
            <div className="col-md-8">
            <span>JavaScript</span>
            <ProgressBar animated variant="success" now={80} label={`80%`} />
            <br/>
            </div>
            
            <div className="col-md-8">
            <span>React</span>
            <ProgressBar variant="warning" animated now={70} label={`70%`} />
            <br/>

            </div>
            <div className="col-md-8">
            <span>Python</span>
            <ProgressBar animated variant="success" now={80} label={`80%`} />
            <br/>
            </div>
            
            </div>
            
        </div>
    );
};

export default Skills;