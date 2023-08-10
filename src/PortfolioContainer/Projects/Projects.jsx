import React, { useRef } from 'react';

import './Projects.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import OnlineTicket from './Project/OnlineTicket';
import Weather from './Project/Weather';
import SpaceX from './Project/SpaceX';
import BookStore from './Project/BookStore';
import MovieGallery from './Project/MovieGallery';

const AboutMe = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="projects-me-container screen-container" id="projects">
      <div className="projects-me-parent">
        <ScreenHeading title="Projects" subHeading="Highlighted Personal Projects" />
        <div className="about-me-card">
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 10500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <OnlineTicket />
            </SwiperSlide>
            <SwiperSlide>
              <Weather />
            </SwiperSlide>
            <SwiperSlide>
              <SpaceX />
            </SwiperSlide>
            <SwiperSlide>
              <BookStore />
            </SwiperSlide>
            <SwiperSlide>
              <MovieGallery />
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20" />
              </svg>
              <span ref={progressContent} />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
