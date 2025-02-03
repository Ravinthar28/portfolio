// CSS FILES
import "./css/about.css";

export function About() {
  // FUNCTION TO GENERATE JOURNEY BOX
  function JourneyBox({ head, content }) {
    return (
      <div className="journey-box">
        <div>
          <h3>{head}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="about-container" id="about">
      <div className="about-container-bg">
        <div className="about-content">
          <h1
            className="about-title wow animate__animated animate__fadeIn"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            About Me <br />
            <span className="about-title-2">💡 Turning ideas into interactive web experiences!</span>
          </h1>
          <div
            className="who-am-i-container wow animate__animated animate__fadeIn"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            <h2>Who Am I?</h2>
            <p>
              I’m [Ravinthar], a frontend developer passionate about building
              sleek, responsive, and interactive web applications. I specialize
              in React.js, Redux, and modern JavaScript frameworks to create
              seamless user experiences.
            </p>
          </div>
          <div
            className="journey-container wow animate__animated animate__fadeIn"
            data-wow-duration="1.5s"
            data-wow-delay="0.5s"
          >
            <h2>My Journey</h2>
            <div className="journey-box-container">
              <JourneyBox
                head={"Computer Science Student"}
                content={"Currently pursuing my degree."}
              />
              <JourneyBox
                head={"Project Experience"}
                content={
                  "Developed QuizArena, Hall Allocation System, and a Vedic Maths e-learning website."
                }
              />
              <JourneyBox
                head={"Passionate About"}
                content={"Web development, problem-solving, and UI/UX design."}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
