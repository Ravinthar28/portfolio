// CSS FILES
import "./css/project.css";

export function Project() {
  // FUNCTION TO GENERATE PROJECT BOX
  function ProjectBox({
    projectTitle,
    techStack,
    projectDescr,
    projectLink,
    borderColor,
  }) {
    return (
      <div
        className="project-box"
        style={{ borderTop: `5px solid ${borderColor}` }}
      >
        <div className="project-content">
          <h2 className="project-box-title">{projectTitle}</h2>
          <p>
            <b>Tech Stack:</b>
            {techStack}
          </p>
          <p>{projectDescr}</p>
          <a href={projectLink} className="project-link">
            🔗 View Project | GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  return (
    <section className="sec3">
      <div
      className="project-container wow animate__animated animate__fadeIn"
      data-wow-duration="1.5s"
      data-wow-delay="0.5s"
      id="projects"
    >
      <div className="project-container-title">
        <h1 className="project-title-1">
          Projects
        </h1>
        <h1 className="project-title-2">
            ✨ Showcasing my work and what I’ve built!
          </h1>
      </div>
      <div className="project-box-container">
        <div className="project-box-inner-container">
          <div className="column">
            <ProjectBox
              projectTitle={"QuizArena (Gamified Quiz App)"}
              techStack={"React.js, Redux"}
              projectDescr={
                "A mobile-responsive quiz app with a gamified experience, interactive dashboard, and a badge."
              }
              projectLink={"https://github.com/Ravinthar28/quiz-app"}
              borderColor={"#7cccc8"}
            />
          </div>
          <div className="column">
            <ProjectBox
              projectTitle={
                "Hall Allocation System (Automated Seat Assignment)"
              }
              techStack={"React.js, Django, REST APIs"}
              projectDescr={
                "A web app that automates seat allocation, reducing manual work by 50%. Features user authentication and dynamic seat management."
              }
              projectLink={"https://github.com/Ravinthar28/Seating_Allocation"}
              borderColor={"#b06469"}
            />
            <ProjectBox
              projectTitle={
                "Vedic Maths E-learning Website (WordPress-Based Learning Platform)"
              }
              techStack={"WordPress, Custom Plugins"}
              projectDescr={
                "An educational platform to teach Vedic Maths concepts with interactive learning modules."
              }
              borderColor={"orange"}
            />
          </div>
          <div className="column">
            <ProjectBox
              projectTitle={"Cancer Awareness App (Ongoing Project)"}
              techStack={"React.js, Redux"}
              projectDescr={
                "A web app providing cancer-related information and a doctor search filter."
              }
              projectLink={"https://github.com/Ravinthar28/Seating_Allocation"}
              borderColor={"#7cccc8"}
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
