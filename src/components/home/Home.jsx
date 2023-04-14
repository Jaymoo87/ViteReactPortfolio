import React from "react";
import JustinFaceCutOut from "../../assets/JustinFaceCutOut.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaNode, FaGithubSquare, FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";
import CV from "../../assets/Justin-Resume.pdf";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>JUSTIN</span> MURRAH
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am A</span> <b>Web Developer</b>
          </p>
          <div className="home__image-wrapper">
            <div className="home__banner">
              <img src={JustinFaceCutOut} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                1 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Year of <span>Development Projects</span>
              </span>
            </p>
            <p className="home__data home__data-two">
              <span className="text-md text-cs">
                Full <br />
                Stack
              </span>
              <span className="text-sm text-cs">
                Web <span> Devoloper</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            I'm from Alabama. I am a recent React Full-Stack bootcamp graduate and am looking foward to a new career in
            web development
          </p>

          <div className="home__socials">
            <div className="home__social-link">
              <FaReact />
            </div>
            <div className="home__social-link">
              <FaNode />
            </div>
            <div className="home__social-link">
              <SiTypescript />
            </div>
            <div className="home__social-link">
              <SiMysql />
            </div>
            <div className="home__social-link">
              <SiMongodb />
            </div>
            <a href="https://github.com/Jaymoo87" className="home__social-link">
              <FaGithubSquare />
            </a>
          </div>

          <div className="home__btns text-cs">
            <a download="" href={CV} className="btn">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>
    </section>
  );
};

export default Home;
