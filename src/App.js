
// FOR ANIMATION
import { useEffect } from "react";
import WOW from "wow.js";
import "../node_modules/animate.css/animate.min.css";

// CSS FILES
import './App.css';

// COMPONENTS
import { Home } from './homeComp/Home';
import { Header } from "./headerComp/Header";
import { About } from "./aboutComp/About";
import { Project } from "./projectsComp/Project";
import { Skills } from "./skillsComp/Skills";

function App() {


  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
