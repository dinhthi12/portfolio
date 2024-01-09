import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Database from "./Database";
import Other from "./Other";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Database />
        <Other />
      </div>
    </section>
  );
};

export default Skills;
