import React from "react";
import Card from "react-bootstrap/Card";


// skills
import { skills } from "./db-skills";

import "./skills.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <div className="container">
        <div className="row">
          {Object.keys(skills).map((category) => (
            <div className="col-lg-4 col-md-6 mb-4" key={category}>
              <Card className="focus card-name">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    {category}
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills[category].map((skill, index) => (
                      <span key={`${category}-${index}`}>
                        <a
                          className="text-dark text-decoration-none"
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            className="image-style m-1"
                          />{" "}
                          {skill.skillName}
                        </a>
                      </span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
