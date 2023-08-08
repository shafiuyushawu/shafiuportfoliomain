import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Weather from './Project/Weather';
import OnlineTicket from './Project/OnlineTicket';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import './Projects.css';

const AboutMe = () => {
  const options = {
    loop: false,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <div className="projects-me-container screen-container">
      <div className="projects-me-parent">
        <ScreenHeading title="Projects" subHeading="Highlighted Personal Projects" />
        <OwlCarousel classID="owl-carousel" id="testimonial-carousel" options={options}>
          <Weather />
          <OnlineTicket />
        </OwlCarousel>
      </div>
    </div>
  );
};

export default AboutMe;
