import React from "react";

import { FaNode, FaGithubSquare, FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <div className="footer__social-link">
            <FaReact />
          </div>
          <div className="footer__social-link">
            <FaNode />
          </div>
          <div className="footer__social-link">
            <SiTypescript />
          </div>
          <div className="footer__social-link">
            <SiMysql />
          </div>
          <div className="footer__social-link">
            <SiMongodb />
          </div>
          <a href="https://github.com/Jaymoo87" className="footer__social-link">
            <FaGithubSquare />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Jaymoo</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Justin Murrah</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
