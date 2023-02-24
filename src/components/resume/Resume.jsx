import React from "react";
import { cv } from "../../Data";
import Card from "./Card";
import "./resume.css";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section__title">Resume</h2>
      <p className="section__subtitle text-cs">
        My <span>Story</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Education</h3>

          <div className="resume__items">
            {cv.map((val, index) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={index}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume__group">
          <h3 className="resume__heading">Experience</h3>

          <div className="resume__items">
            {cv.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={index}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
