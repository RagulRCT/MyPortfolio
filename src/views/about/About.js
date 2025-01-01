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
                <br />
                👋 Hello! I'm a Frontend Software Engineer with over 2.6 years
                of experience, based in Chennai, India. I have a proven track
                record of designing and implementing scalable web applications
                for Fortune 500 clients, including Dollar General, Analog
                Devices, Dell Technologies, and Eastman Chemical Company . My
                technical expertise spans developing performant user interfaces,
                optimizing API integrations, and architecting reusable, modular
                components using technologies like React.js, Next.js,
                TypeScript, Node.js, and AEM.
                <br />
                <br />
                🏆 Achievements:-
                <ul>
                  <li>
                    Solved 300+ algorithmic problems on LeetCode, consistently
                    ranking in the top 15% in weekly contests.
                  </li>
                  <li>
                    Recognized with an Outstanding Contribution Award worth of
                    25000 for delivering a critical project ahead of schedule.
                  </li>
                  <li>
                    Certified as a React Developer from HackerRank and Udemy
                  </li>
                  <li>
                    Certified as Adobe Experience Manager Developer from Adobe
                  </li>
                </ul>{" "}
                <br />
                💼 Throughout my career, I've delivered impactful solutions by
                focusing on performance optimization, code quality, and
                efficient team collaboration. Key accomplishments include
                reducing server load by 70%, improving page load times from 11.8
                seconds to 2.6 seconds, and managing cross-functional teams of
                up to 20 developers. My experience extends to writing and
                automating comprehensive test cases using Cypress, Jest, and
                JUnit, ensuring high code coverage and application reliability.
                <br />
                <br />
                🌱 As a lifelong learner, I continuously explore advanced design
                patterns, system architecture principles, and emerging tools to
                stay ahead in the ever-evolving tech landscape. My approach
                emphasizes delivering robust, maintainable solutions that drive
                measurable business outcomes.
                <br />
                <br />
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
                      href="https://drive.google.com/file/d/1Vr4I9u11jULlTqbwrjIgHy3E6Qrrergi/view"
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
                      href="https://leetcode.com/u/ragul7102/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        LeetCode Profile
                      </Button>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/ragul-saravanan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
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
