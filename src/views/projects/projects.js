import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//Projects
import inv from "../../assets/inv.png";
import PST from "../../assets/PST.png";
import DG from "../../assets/DG.png";
import eastman from "../../assets/eastman.png";
import dell from "../../assets/dell.png";
import AI from "../../assets/AI-chat.png";

//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "#ec4b4f",
  },
  marker: {
    borderColor: "#070d59",
  },
  timelineTrack: {
    backgroundColor: "#ec4b4f",
  },
});

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline theme={customTheme}>
        <Events>
          {/* AI Chat-Bot */}
          <ImageEvent
            className="text-center"
            text="AI Chat-Bot using Groq"
            src={AI}
            alt="Ai-ChatBot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I developed a dynamic AI
                        Chatbot powered by the <b>Groq API</b> using{" "}
                        <b>Llama3-8B model</b>{" "}
                        for intelligent and context-aware interactions. The
                        project integrates advanced authentication features,
                        including <b>Auth0</b> for secure login with SAML and
                        social login support, ensuring enterprise-grade security
                        and user accessibility. User data and chat history are
                        managed using <b>Prisma ORM with PostgreSQL</b> for
                        efficient storage and retrieval. Built with Next.js, the
                        project provides a scalable backend and an interactive
                        frontend for a seamless and engaging user experience.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            <b>Advanced AI Model:</b> Utilized the Llama3-8B
                            model for dynamic, context-aware conversational
                            capabilities.
                          </li>
                          <li>
                            <b>Authentication:</b> Integrated Auth0 with SAML
                            for enterprise-grade security and social login for
                            broader accessibility.
                          </li>
                          <li>
                            <b>Single Sign-On (SSO):</b> Enabled SSO through
                            SAML, simplifying access for enterprise users.
                          </li>
                          <li>
                            <b>Data Management:</b> Implemented Prisma ORM with
                            PostgreSQL for efficient storage and retrieval of
                            user information and chat history.
                          </li>
                          <li>
                            <b>Full-Stack Development:</b> Built the chatbot
                            using Next.js for both frontend and backend,
                            ensuring seamless integration and scalability.
                          </li>
                          <li>
                            <b>User Experience:</b> Designed an intuitive and
                            interactive UI for enhanced user engagement and ease
                            of use.
                          </li>
                          <li>
                            <b>Scalability:</b> Ensured a scalable architecture
                            to support a growing user base and high concurrency.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">Next Js</span>
                          </li>
                          <li>
                            <span className="p-2">PostgreSQL</span>
                          </li>
                          <li>
                            <span className="p-2">Auth0</span>
                          </li>
                          <li>
                            <span className="p-2">CSS3</span>
                          </li>
                          <li>
                            <span className="p-2">Groq - Llama3-8B model</span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://ragul-chatbot-groq.vercel.app/"
                  target="_blank"
                >
                  LAUNCH
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* PST */}
          <ImageEvent
            className="text-center"
            text="Analog Devices - Parametric Search Table"
            src={PST}
            alt="Parametric Search Table"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Application
                        that allows engineers to select and compare parts based
                        on user input specifications.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            <b>Workflow Optimization:</b> Led the development of
                            a React application that improved workflow
                            efficiency by 35%.
                          </li>
                          <li>
                            <b>Revenue Growth:</b> Delivered solutions that
                            boosted quarterly revenue by 14% through enhanced
                            application functionality.
                          </li>
                          <li>
                            <b>Team Leadership:</b> Led a team of 12 members
                            across India and Portugal, fostering seamless
                            collaboration and ensuring timely project delivery.
                          </li>
                          <li>
                            <b>Scalable Development:</b> Designed and
                            implemented scalable React components for long-term
                            maintainability and performance.
                          </li>
                          <li>
                            <b>CMS Migration:</b> Successfully migrated 65,000+
                            pages in a CMS migration project, reducing workload
                            by 50% for content teams.
                          </li>
                          <li>
                            <b>Impactful Results:</b> Delivered measurable
                            improvements in operational efficiency and client
                            satisfaction.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="data:image/jpeg;base64,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"
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.analog.com/en/parametricsearch/10825#/"
                  target="_blank"
                >
                  LAUNCH
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Invoice Generator */}
          <ImageEvent
            className="text-center"
            text="Invoice Generator"
            src={inv}
            alt="invoice"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Invoice Generator For
                        enterprises.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            {" "}
                            An Invoice creator project built with React.{" "}
                          </li>
                          <li>Attractive UI, Easy to use.</li>
                          <li>
                            Uses jspdf-react to capture the data from the modal
                            and convert it from canvas - pdf
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://my-invoice-generator.vercel.app/"
                  target="_blank"
                >
                  LAUNCH
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* DG Ecommerce */}
          <ImageEvent
            className="text-center"
            text="Dollar General Retail Ecommerce"
            src={DG}
            alt="Dollar General Retail Ecommerce"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> At Dollar General, I
                        served as the lead developer, driving key initiatives to
                        optimize performance and enhance the digital experience.
                        I spearheaded this project which reduced server load by{" "}
                        <b>70%</b>
                        and improved page load times by <b>40%</b>. focused on
                        implementing scalable solutions, fostering collaboration
                        within a team of 8, and delivering measurable results.
                        This work showcased my expertise in{" "}
                        <b>React.js, Next.js, Adobe AEM</b>, and performance
                        optimization.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            <b>Performance Optimization:</b> Reduced server load
                            by 70% and improved page load times by 40% through
                            efficient coding practices and infrastructure
                            improvements.
                          </li>
                          <li>
                            <b>Team Leadership:</b> Led an 8-member
                            cross-functional team, ensuring seamless
                            collaboration and timely project delivery.
                          </li>
                          <li>
                            <b>Scalable Solutions:</b> Designed and implemented
                            scalable architecture for enhanced website
                            functionality and maintainability.
                          </li>
                          <li>
                            <b>CMS Optimization:</b> Leveraged Adobe AEM to
                            streamline content management processes, cutting
                            delivery time by 20%.
                          </li>
                          <li>
                            <b>User Experience Enhancements:</b> Improved
                            website usability, increasing user satisfaction by
                            75%.
                          </li>
                          <li>
                            <b>Impactful Results:</b> Delivered solutions that
                            directly contributed to operational efficiency and a
                            better user experience.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JavaScript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://www.dollargeneral.com/"
                  target="_blank"
                >
                  LAUNCH
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Dell Supplier */}
          <ImageEvent
            className="text-center"
            text="DELL GCM and Supplier Portal"
            src={dell}
            alt="Dell"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> At Dell, I worked on the
                        Global Commodity Management (GCM) system and Supplier
                        Portal, streamlining supply chain and procurement
                        operations. My contributions involved enhancing the
                        portal's functionality to improve supplier collaboration
                        and efficiency. I optimized performance, ensured
                        scalability, and implemented reliable solutions to
                        support Dell's supply management processes. This work
                        enabled better decision-making and operational
                        effectiveness across the supply chain.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            <b>Supply Chain Optimization:</b> Improved supply
                            chain workflows and procurement operations by
                            enhancing the GCM system and Supplier Portal.
                          </li>
                          <li>
                            <b>Supplier Collaboration:</b> Developed features to
                            streamline communication and collaboration with
                            suppliers, improving efficiency.
                          </li>
                          <li>
                            <b>Scalable Architecture:</b> Designed scalable
                            solutions to support growing supplier management
                            needs and future integrations.
                          </li>
                          <li>
                            <b>Performance Improvements:</b> Optimized portal
                            performance, ensuring fast and reliable operations
                            for global users.
                          </li>
                          <li>
                            <b>Data Integration:</b> Integrated data analytics
                            to provide insights for better supply chain
                            decision-making.
                          </li>
                          <li>
                            <b>User Experience:</b> Enhanced the UI/UX of the
                            Supplier Portal for seamless navigation and improved
                            usability.
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Eastman Chemicals */}
          <ImageEvent
            className="text-center"
            text="Eastman CMS Application"
            src={eastman}
            alt="eastman corp"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> At Eastman, I played a key
                        role in enhancing their digital ecosystem by
                        implementing scalable and personalized content
                        solutions. Leveraging Adobe AEM, I optimized content
                        workflows and reduced turnaround times, improving
                        operational efficiency. I collaborated with
                        cross-functional teams to deliver a seamless user
                        experience, driving a 30% increase in user engagement.
                        My work focused on scalability, performance, and
                        measurable results that elevated customer satisfaction.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            <b>Content Personalization:</b> Developed
                            personalized content delivery features, enhancing
                            user engagement by 30%.
                          </li>
                          <li>
                            <b>Efficient Team Management:</b> Coordinated with a
                            cross-functional team to ensure smooth
                            implementation of new digital solutions.
                          </li>
                          <li>
                            <b>Adobe AEM Expertise:</b> Utilized Adobe AEM to
                            optimize content workflows, reducing turnaround time
                            by 25%.
                          </li>
                          <li>
                            <b>Scalable Architecture:</b> Designed scalable
                            solutions to support Eastman’s growing digital
                            ecosystem.
                          </li>
                          <li>
                            <b>User Experience:</b> Enhanced UI/UX to deliver a
                            seamless and intuitive user experience across
                            platforms.
                          </li>
                          <li>
                            <b>Measurable Results:</b> Delivered impactful
                            improvements that boosted customer satisfaction and
                            operational efficiency.
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React Js
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://www.eastman.com/en" target="_blank">
                  LAUNCH
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
