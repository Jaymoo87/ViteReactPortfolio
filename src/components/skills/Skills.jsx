import React from "react";
import { skills } from "../../Data";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Professional Skills</h2>
      <p className="section__subtitle text-cs">
        My <span>Skills</span>
      </p>
      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div key={index} className="skills__item">
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage} <span>%</span>
                </span>
              </div>
              <span className="skills__percentage" style={{ width: `${percentage}%` }}>
                <span></span>
              </span>
              <p className="skills__description description__font">{description}</p>

              <div className="skills__bar"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
