import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";

import { FaNode, FaGithubSquare, FaReact } from "react-icons/fa";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";

import { links } from "../../Data";
import { BsSun, BsMoon } from "react-icons/bs";
import "./header.css";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav__logo text-cs">
          Murrah
        </Link>

        <div className={`${showMenu ? `nav__menu show-menu ` : `nav__menu`}`}>
          <div className="nav__data">
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className="nav__link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header__socials">
              <div className="header__social-link">
                <FaReact />
              </div>
              <div className="header__social-link">
                <FaNode />
              </div>
              <div className="header__social-link">
                <SiTypescript />
              </div>
              <div className="header__social-link">
                <SiMysql />
              </div>
              <div className="header__social-link">
                <SiMongodb />
              </div>
              <a href="https://github.com/Jaymoo87" className="header__social-link">
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="nav__btns">
          <div className="theme__toggler" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={`${showMenu ? `nav__toggle animate-toggle ` : `nav__toggle`}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
