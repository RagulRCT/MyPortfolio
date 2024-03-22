import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left ">
             
                <br/>
                👋 Hello there! I'm a seasoned full stack developer with 2 years of experience,
                based in Chennai, India, with a strong passion for crafting
                innovative web solutions. My expertise lies in leveraging
                cutting-edge technologies like React.js, Next.js, HTML, SCSS,
                JavaScript, Node.js, Express.js, and CMS platforms like AEM to
                build robust and scalable applications. 
                <br/>
                <br/>
                💼 With hands-on
                experience in both frontend and backend development, I thrive in
                the dynamic world of web development, constantly seeking
                opportunities to push boundaries and create impactful solutions.
                From concept to deployment, I'm dedicated to delivering
                top-notch experiences that exceed expectations. 
                
                <br/>
                <br/>
                🌱 As a lifelong
                learner, I'm always exploring new technologies and methodologies
                to stay ahead of the curve. I believe in the power of continuous
                learning and enjoy unraveling the complexities of emerging
                technologies to solve real-world problems.
                <br/>
                <br/>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1gLBQZMVEVwrXtit1NZi0mqeU7sJdHL3-/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/RagulRCT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ragul-s-736578189"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
