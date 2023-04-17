import React from "react";
import { FaArrowRight } from "react-icons/fa";
// import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import { SiTypescript, SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((project) => {
        const { id, img, category, title, description, link, icon1, icon2, icon3, icon4, icon5 } = project;
        return (
          <motion.div
            layout
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.5 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <a href={link}>
                <img src={img} className="portfolio__img" />
              </a>
            </div>
            <div className="portfolio__icons">
              <img src={icon1} className="portfolio__icon" />
              <img src={icon2} className="portfolio__icon" />
              <img src={icon3} className="portfolio__icon" />
              <img src={icon4} className="portfolio__icon" />
              <img src={icon5} className="portfolio__icon" />
            </div>
            <span className="portfolio__category text-cs">{category}</span>

            <div className="home__social-link"></div>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <a href={link} className="link">
              {link}
              <FaArrowRight className="link__icon"></FaArrowRight>
            </a>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
