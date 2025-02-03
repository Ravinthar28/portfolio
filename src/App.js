
import { useEffect } from "react";
import WOW from "wow.js";
import "../node_modules/animate.css/animate.min.css";


import './App.css';
import { Home } from './homeComp/Home';
import { Header } from "./headerComp/Header";
import { About } from "./aboutComp/About";

function App() {


  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
