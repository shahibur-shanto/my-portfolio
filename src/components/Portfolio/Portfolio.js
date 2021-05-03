import React from 'react';
import genius from '../../images/genius-couching.png';
import computer from '../../images/computer-velly.png';
import travel from '../../images/travel-simple.png';
import imageSlider from '../../images/issue-tracker.png';
import responsive from '../../images/responsive.png';

const Portfolio = () => {
    return (
        <div>
            <div className="text-center"><h1>My Project</h1></div>
            <div className="mt-5">
                
                <div className="text-center mb-5"><h2>Gineus Coaching</h2></div>
                <div className="row">
                <div className="col-md-5 offset-md-1 w-100"><img src={genius} className="img-fluid" alt="genius coaching"/></div>
                <div className="col-md-5">
                <h5>This is a Math Couching Site. Where students can enroll various types of course. Users can review the course, view their entitled course, make payment through credit cards. Admin can add course, delete course, change status of the course. Also make an admin.</h5>
                <a href="https://genius-coaching-b65c7.web.app/" className="btn btn-primary mr-2">Live Link</a>
                <a href="https://github.com/shahibur-shanto/couching-client" className="btn btn-primary mr-2">Code Link [client]</a>
                <a href="https://github.com/shahibur-shanto/couching" className="btn btn-primary mr-2">Code Link [Server]</a>
                <h5 className="mt-5">Technology used in this project:<br/> <span className="btn btn-success mt-1 mr-2">React</span> <span className="btn btn-success mt-1 mr-2">Bootstrap</span><span className="btn btn-success mt-1 mr-2">Express.js</span><span className="btn btn-success mt-1 mr-2">Node.js</span><span className="btn btn-success mt-1 mr-2">MongoDB</span><span className="btn btn-success mt-1 mr-2">firebase</span></h5>
                </div>
            </div>
            </div>

            <div className="mt-5">
                
                <div className="text-center mb-5"><h2>Computer Valley</h2></div>
                <div className="row">
                <div className="col-md-5 offset-md-1 w-100"><img src={computer} className="img-fluid" alt="Computer Valley"/></div>
                <div className="col-md-5">
                <h5>This is a Computer Shop Project where people add their product with price dynamically. Also book their product and show their all ordered product. Delete Product is implemented in this project.</h5>
                <a href="https://computer-velly.web.app/" className="btn btn-primary mr-2">Live Link</a>
                <a href="https://github.com/shahibur-shanto/math-couching-client" className="btn btn-primary mr-2">Code Link [client]</a>
                <a href="https://github.com/shahibur-shanto/math-couching-server" className="btn btn-primary mr-2">Code Link [Server]</a>
                <h5 className="mt-5">Technology used in this project:<br/> <span className="btn btn-success mt-1 mr-2">React</span> <span className="btn btn-success mt-1 mr-2">Bootstrap</span><span className="btn btn-success mt-1 mr-2">Express.js</span><span className="btn btn-success mt-1 mr-2">Node.js</span><span className="btn btn-success mt-1 mr-2">MongoDB</span><span className="btn btn-success mt-1 mr-2">firebase</span></h5>
                </div>
            </div>
            </div>

            <div className="mt-5">
                
                <div className="text-center mb-5"><h2>Travel Simple</h2></div>
                <div className="row">
                <div className="col-md-5 offset-md-1 w-100"><img src={travel} className="img-fluid" alt="travel"/></div>
                <div className="col-md-5">
                <h5>This is a travel oriented project, Where Authenticate person can book a travel option to go from one place to another place.</h5>
                <a href="https://travel-simple-a1fab.web.app/" className="btn btn-primary mr-2">Live Link</a>
                <a href="https://github.com/shahibur-shanto/react-auth-travel-simple" className="btn btn-primary mr-2">Code Link </a>
                <h5 className="mt-5">Technology used in this project:<br/> <span className="btn btn-success mt-1 mr-2">React</span> <span className="btn btn-success mt-1 mr-2">Bootstrap</span><span className="btn btn-success mt-1 mr-2">firebase</span></h5>
                </div>
            </div>
            </div>

            <div className="mt-5">
                
                <div className="text-center mb-5"><h2>Image Slider</h2></div>
                <div className="row">
                <div className="col-md-5 offset-md-1 w-100"><img src={imageSlider} className="img-fluid" alt="imageSlider"/></div>
                <div className="col-md-5">
                <h5>This is a image sliding project using third party API, Where viewer search variety type of image ans set images for slider also set the delay time for sliding images. </h5>
                <a href="https://shahibur-shanto.github.io/issue-tracker/" className="btn btn-primary mr-2">Live Link</a>
                <a href="https://github.com/shahibur-shanto/issue-tracker" className="btn btn-primary mr-2">Code Link </a>
                <h5 className="mt-5">Technology used in this project:<br/> <span className="btn btn-success mt-1 mr-2">JavaScript</span> <span className="btn btn-success mt-1 mr-2">Bootstrap</span></h5>
                </div>
            </div>
            </div>

            <div className="mt-5">
                
                <div className="text-center mb-5"><h2>Responsive Website</h2></div>
                <div className="row">
                <div className="col-md-5 offset-md-1 w-100"><img src={responsive} className="img-fluid" alt="travel"/></div>
                <div className="col-md-5">
                <h5>This is a static responsive website for female jacket ,bag etc. </h5>
                <a href="https://shahibur-shanto.github.io/responsive-assignment/" className="btn btn-primary mr-2">Live Link</a>
                <a href="https://github.com/shahibur-shanto/responsive-assignment" className="btn btn-primary mr-2">Code Link </a>
                <h5 className="mt-5">Technology used in this project:<br/> <span className="btn btn-success mt-1 mr-2">JavaScript</span> <span className="btn btn-success mt-1 mr-2">Bootstrap</span></h5>
                </div>
            </div>
            </div>


        </div>
    );
};

export default Portfolio;