import React from "react";
import About from "./about/index";
import "./body.css";
import Contact from "./contact/index";
import Project from "./project/index";
import Skills from "./skills/index";
import Work from "./work/index";


function Body() {
  return (
    <div class="body">
      <section id="about">
        <About />
       
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
