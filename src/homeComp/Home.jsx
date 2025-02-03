// CSS FILE
import "./css/home.css";

// IMAGES
import homeBgPic from "../images/home-bg.png";

export function Home() {
  return (
    <div className="home-container" id="home">
      <div className="home-left">
        <img
          src={homeBgPic}
          alt="Loading..."
          className="home-pic wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
        />
      </div>
      <div
        className="home-right wow animate__animated animate__fadeIn"
        data-wow-duration="1.5s"
        data-wow-delay="0.5s"
      >
        <div className="home-right-content">
          <h1 className="home-title home-title-1">Hi, I'm Ravinthar</h1>
          <div class="typing-demo">
            <h1 className="home-title home-title-2">
              A Passionate Frontend Developer
            </h1>
          </div>

          <p className="home-sub-heading">
            For me, development is more than just writing code—it's about
            solving real-world problems and creating meaningful experiences.
            Every project I build is an opportunity to innovate and improve.
          </p>
          <div className="home-btn-container">
            <a href="#projects">
              <button className="view-my-work-btn">View My Work</button>
            </a>
            <a href="#contact">
              <button className="contact-btn">Contact Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
