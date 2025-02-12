// FOR ANIMATION
import { useEffect } from "react";
import WOW from "wow.js";
import "../node_modules/animate.css/animate.min.css";

// CSS FILES
import "./App.css";
import "./Stars.css";

// COMPONENTS

import { Home } from "./homeComp/Home";
import { About } from "./aboutComp/About";
import { Project } from "./projectsComp/Project";
import { Skills } from "./skillsComp/Skills";
import { Contact } from "./contactComp/Contact";

function App() {
  useEffect(() => {
    new WOW().init();
  }, []);


  return (
    <div className="app-outer-container">
      <div class="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="app-container">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>

    </div>
  );
}

export default App;
