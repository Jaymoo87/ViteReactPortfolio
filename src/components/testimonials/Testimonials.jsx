import React from "react";
import { testimonials } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <p className="section__subtitle text-cs">
        My <span>Customers Say</span>
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
        className="testimonials__container container mySwiper"
      >
        {testimonials.map(({ img, name, author, description }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials__item card card-one">
              <div className="testimonial__header">
                <div className="testimonial__icon">
                  <img src={testimonialIcon} alt="" />
                </div>
                <img src={img} alt="" className="testimonial__img" />
              </div>

              <p className="testimonial__description">{description}</p>

              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__author">{author}</p>

              <img src={shapeTwo} alt="" className="shape c__shape" />
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

export default Testimonials;
