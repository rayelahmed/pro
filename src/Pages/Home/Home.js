import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Skills from "../Skills/skills";
import Projects from "../Projects/Projects";
import Highlight from "../Highlight/Highlight";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <div className="box1">
          <Banner />
        </div>
        <div className="box2">
          <Navbar />
        </div>
        <div className="box3">
          <Footer />
        </div>
      </div>
      <div className="desc-all">
        <About />
        <Skills />
        <Projects />
        <Highlight />
      </div>
    </div>
  );
};

export default Home;
