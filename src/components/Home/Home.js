import React from "react";
import Typing from "react-typing-animation";
import "./Home.css";
import me from "../../images/me.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="row">
        <div className="col-sm-12 col-md-5 mt-auto">
          <div className="mt-5">
            <h1 className="me">Hey, I'm Shahibur</h1>
            <Typing>
              <h3>
                A web designer and developer from bangladesh. I create best
                websites to help people go further online.
              </h3>
            </Typing>
            <Link className="btn btn-primary" target="_blank"><a className="resume" href="https://drive.google.com/file/d/1v6cVR0fcSLVb0-h9TUegbu6Zgyq3DQ7s/view?usp=sharing">Download Resume</a></Link>
          </div>
        </div>

        <div className="col-sm-12 col-md-5 mt-auto">
         <div className="text-center"> <img className="my-image img-fluid" src={me} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
