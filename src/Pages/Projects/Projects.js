import React from "react";
import "../Skills/Skills.css";
import youtube from "../../projects-banner/Cover (1).png";
import GPT from "../../projects-banner/chatgpt.png";
import cafe from "../../projects-banner/Cafe Street - E Commerce Landing Page.png";
import agency from "../../projects-banner/digital-agency.png";
import { MdArrowOutward } from "react-icons/md";
import { HashLink as NavLink } from "react-router-hash-link";
const Projects = () => {
  return (
    <section className="skills-container">
      <div className="skills-area" id="projects">
        <a href="https://utubee.netlify.app/">
          <div className="skills-1">
            <div className="titles">
              <div>
                <img src={youtube} alt="" />
              </div>
              <div>
                <h2>
                  YouTube Clone
                  <span id="icon">
                    <MdArrowOutward />
                  </span>
                </h2>
                <p>
                  Experience my YouTube clone, blending React, Bootstrap, and
                  seamless API integration. Enjoy smooth video playback,
                  personalized recommendations, and a sleek user interface.
                  Explore, engage, and share your passions effortlessly on our
                  platform.
                </p>
                <div className="btn-flex">
                  <button>React</button>
                  <button>Bootstrap</button>
                  <button>Api integration</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://660ec790185bf01158dea7a0--amazing-gaufre-0dc139.netlify.app/">
          <div className="skills-1">
            <div className="titles">
              <div>
                <img src={GPT} alt="" />
              </div>
              <div>
                <h2>
                  Chat GPT
                  <span id="icon">
                    <MdArrowOutward />
                  </span>
                </h2>
                <p>
                  Unleash the power of conversational AI with our ChatGPT clone,
                  built using HTML, CSS, JavaScript, and OpenAI API integration.
                  Engage in natural, intelligent conversations, explore endless
                  possibilities, and revolutionize user interaction
                  effortlessly.
                </p>
                <div className="btn-flex">
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>Javascript</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://adorable-quokka-7e9422.netlify.app/">
          <div className="skills-1">
            <div className="titles">
              <div>
                <img src={agency} alt="" />
              </div>
              <div>
                <h2>
                  Digital Agency
                  <span id="icon">
                    <MdArrowOutward />
                  </span>
                </h2>
                <p>
                  Introducing our cutting-edge digital agency landing page,
                  powered by React and Tailwind CSS. Seamlessly blending
                  functionality and style, it's a gateway to your digital
                  success. Engage visitors with dynamic content, showcase your
                  expertise, and leave a lasting impression in the digital
                  landscape
                </p>
                <div className="btn-flex">
                  <button>React</button>
                  <button>Tailwind CSS</button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="https://661112454a79d1ba8648785f--adorable-quokka-7e9422.netlify.app/">
          <div className="skills-1">
            <div className="titles">
              <div>
                <img src={cafe} alt="" />
              </div>
              <div>
                <h2>
                  Cafe Street Landing page
                  <span id="icon">
                    <MdArrowOutward />
                  </span>
                </h2>
                <p>
                  Step into the world of café culture with our captivating
                  landing page, meticulously designed using HTML, CSS, and
                  JavaScript. Immerse yourself in the inviting ambiance, explore
                  our delectable offerings, and plan your next visit with ease.
                </p>
                <div className="btn-flex">
                  <button>HTML5</button>
                  <button>CSS3</button>
                  <button>Javascript</button>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="navLink">
        <NavLink className="navTo" smooth to="/archive/#archive">
          <h4 className="resume">
            View Full Projects Archive
            <span id="icon">
              <MdArrowOutward />
            </span>
          </h4>
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
