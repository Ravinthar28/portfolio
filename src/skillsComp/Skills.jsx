// CSS FILES
import "./css/skills.css";

// IMAGES
import htmlPic from "../images/html-logo.png";
import cssPic from "../images/css-logo.png";
import jsPic from "../images/JavaScript-logo.png";
import reactPic from "../images/react-logo.png";
import reduxPic from "../images/redux-logo.png";
import tailwindcssPic from "../images/tailwind-css-logo.png";
import nodePic from "../images/node-js-logo.png";
import restApiPic from "../images/rest-api-logo.png";

export function Skills() {
  return (
    <section className="sec4">
      <div
        className="skills-container wow animate__animated animate__fadeIn"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
        id="skills"
      >
        <div className="skills-content">
          <h1 className="skills-title">My Skills</h1>
          <div className="logo-container">
            <div className="img-container">
              <img src={htmlPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={cssPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={jsPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={reactPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={reduxPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={tailwindcssPic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={nodePic} alt="Loading..." className="logo" />
            </div>
            <div className="img-container">
              <img src={restApiPic} alt="Loading..." className="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
