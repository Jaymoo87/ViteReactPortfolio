import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { services } from "../../../Data";
import shapeOne from "../../../assets/shape-1.png";
import shapeTwo from "../../../assets/shape-2.png";
import "./services.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">What I Do</h2>
      <p className="section__subtitle text-cs">
        My <span>Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="services__container container mySwiper"
      >
        {services.map(({ type, title, description }, index) => {
          return (
            <SwiperSlide key={index} className="services__item card card-one">
              <span className="services__subtitle text-cs">{type}</span>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>

              <a href="#pricing" className="link">
                See Pricing
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a>

              <img src={shapeTwo} alt="fancy dots" className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
    </section>
  );
};

export default Services;
