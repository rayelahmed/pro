import React from "react";
import "./Skills.css";
import { MdArrowOutward } from "react-icons/md";
import { HashLink as NavLink } from "react-router-hash-link";

const skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-area" id="skills">
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Advanced</h5>
            </div>
            <div>
              <h2>
                Programming Languages
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                Proficient in HTML5, CSS3, and JavaScript (ES6+). Familiarity
                with React.js frameworks. Strong foundation in frontend
                development for creating interactive and responsive web
                applications.
              </p>
              <div className="btn-flex">
                <button>HTML 5</button>
                <button>CSS 3</button>
                <button>Javascript</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Expert</h5>
            </div>
            <div>
              <h2>
                Frameworks and Libraries
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                Experienced in utilizing frontend frameworks and libraries such
                as React.js. Proficient in leveraging tools like React Router to
                build scalable and efficient web applications.
              </p>
              <div className="btn-flex">
                <button>React</button>
                <button>React Router</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Expert</h5>
            </div>
            <div>
              <h2>
                Responsive Design
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                Responsive Design ensures websites adapt seamlessly across
                various devices and screen sizes, enhancing user experience.
                Utilizing CSS frameworks and media queries, it optimizes layout
                and content presentation for accessibility and usability.
              </p>
              <div className="btn-flex">
                <button>Bootstrap 5</button>
                <button>Tailwind CSS v3.4</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Advance</h5>
            </div>
            <div>
              <h2>
                API Integration
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                API Integration involves seamlessly incorporating external
                services or data sources into web applications. Utilizing
                RESTful APIs and asynchronous JavaScript, it facilitates
                efficient data exchange and interaction, enhancing application
                functionality and user experience.
              </p>
              <div className="btn-flex">
                <button> RESTful APIs</button>
                <button>Asynchronous JS</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Expert</h5>
            </div>
            <div>
              <h2>
                Git
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                Git is a distributed version control system essential for
                collaborative software development. It allows tracking changes,
                managing branches, merging code, and facilitating seamless
                collaboration among developers, ensuring project integrity and
                efficient code management.
              </p>
              <div className="btn-flex">
                <button> Git</button>
                <button>Github</button>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-1">
          <div className="titles">
            <div>
              <h5>Intermediate</h5>
            </div>
            <div>
              <h2>
                Problem Solving and Collaboration
                <span id="icon">
                  <MdArrowOutward />
                </span>
              </h2>
              <p>
                Problem Solving and Collaboration are crucial skills in software
                development. Proficient at identifying and resolving technical
                issues, I also excel in communicating and collaborating with
                team members to achieve project goals effectively.
              </p>
              <div className="btn-flex">
                <button>Solving</button>
                <button>Collaboration</button>
                <button>Communication</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navLink">
        <NavLink className="navTo" smooth to="/archive/#archive">
          <h4 className="resume">
            Download Full Resume
            <span id="icon">
              <MdArrowOutward />
            </span>
          </h4>
        </NavLink>
      </div>
    </section>
  );
};

export default skills;
