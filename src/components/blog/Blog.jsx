import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import shapeOne from "../../assets/shape-1.png";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title">Latest Blog</h2>
      <p className="section__subtitle text-cs">
        My <span>Articles and Advice</span>
      </p>
      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">February 28, 2023</span>
          <h3 className="blog__title">The Main Thing For a Designer</h3>
          <p className="blog__description"> Blog Content </p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">February 10, 2023</span>
          <h3 className="blog__title">Follow Your Own Design Process</h3>
          <p className="blog__description"> Blog Content </p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">January 12, 2023</span>
          <h3 className="blog__title">Usability Secrets to Create Better Interfaces</h3>
          <p className="blog__description"> Blog Content </p>

          <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a>

          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>
      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      ;
    </section>
  );
};

export default Blog;
