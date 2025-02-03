// CSS FILE
import "./css/contact.css";

// IMAGES
import contactPic from "../images/contact-img.jpg";

// FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div
          className="contact wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        >
          <h1 className="contact-title">📩 Get in Touch</h1>
          <p>💬 Have a project in mind or just want to connect? Let's talk!</p>
          <div>
            <FontAwesomeIcon icon={faMailBulk} />
            <b>Email:</b>
            <a href="mailto:ravintharravinthar2022@gmail.com">
              ravintharravinthar2022@gmail.com
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <b>GitHub:</b>
            <a href="https://github.com/Ravinthar28">
              🔗 github.com/Ravinthar28
            </a>
          </div>
        </div>
      </div>
      <div className="contact-bg">
        <img
          src={contactPic}
          alt="Loading.."
          className="contact-pic wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        />
      </div>
    </div>
  );
}
