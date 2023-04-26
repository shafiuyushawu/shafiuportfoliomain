import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';

import './Projects.css'

import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Weather from './Project/Weather'
import OnlineTicket from './Project/OnlineTicket'

const AboutMe = (props) => {



  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const options = {
    loop: false,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
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
    <div className="projects-me-container screen-container" id={props.id || ""}>
      <div className="projects-me-parent">
        <ScreenHeading title={"Projects"} subHeading={"Highlighted Personal Projects"} />
        <OwlCarousel classID='owl-carousel' id='testimonial-carousel' {...options}>
          <Weather />
          <OnlineTicket />
        </OwlCarousel>
      </div>
    </div>
  )
}

export default AboutMe