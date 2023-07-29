"use client";
import React, { useRef, useState } from 'react';
import TestimonialCard from "../../components/TestimonialCard";
import style from "./HomeTestimonials.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const HomeTestimonials = ({ props }) => {

  return (
    <section className={style.section}>
      <div className={style.shape}></div>
      <div className="container">

        <div className={`text-center ${style.title_wrap}`}>
          <h2 className="h2">What Our Clients Say About Us</h2>
          <p className="title-sub">Community development is often linked with community work or
            community planning, and may involve stakeholders, foundations,</p>
        </div>

        {/* <div className="row row-cols-lg-3">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </div> */}

        <div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
          
            className={`${style.testimonial_swiper}`}
          >
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
                  <TestimonialCard />
            </SwiperSlide>
          </Swiper>

        </div>


      </div>
    </section>
  );
};

export default HomeTestimonials;
