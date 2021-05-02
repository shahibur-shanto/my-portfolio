import React from "react";
import { Col, Row } from "react-bootstrap";
import Typing from "react-typing-animation";
import "./Home.css";
import me from "../../images/me.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home w-100">
      <Row className="row justify-content-md-center align-items-md-center">
        <Col className="col-sm-12 col-xs-12 col-md-5 mt-auto">
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
        </Col>

        <Col className="col-sm-12 col-xs-12 col-md-5 mt-auto text-center">
          <img className="my-image" src={me} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
