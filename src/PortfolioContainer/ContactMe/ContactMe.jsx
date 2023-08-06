import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaAngellist,
} from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

import imgBack from '../../images/mailz.jpeg';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
// import ScrollService from '../../utilities/ScrollService';
// import Animations from '../../utilities/Animations';
import './ContactMe.css';

// const fadeInScreenHandler = (screen) => {
//   if (screen.fadeScreen !== props.id) return;
//   Animations.animations.fadeInScreen(id);
// };
// const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
const ContactMe = ({ id }) => (
  <div className="main-container" id={id || ''}>
    <ScreenHeading title="Contact Me" subHeading={"Let's Keep In Touch"} />
    <div className="central-form">
      <div className="contact-details">
        <div className="col">
          <h2>
            <Typewriter
              options={{
                strings: ['Get In Touch '],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <a href="https://github.com/shafiuyushawu">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/shafiuyushawu">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://twitter.com/shafiuyushawu">
            <FaTwitter className="icon" />
          </a>
          <a href="https://medium.com/@shafiuyushawu">
            <SiMedium className="icon" />
          </a>
          <a href="https://wellfound.com/u/shafiuyushawu">
            <FaAngellist className="icon" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here</h4>
            <img src={imgBack} alt="not found" />
          </div>
        </div>
      </div>

      <form action="https://formspree.io/f/xyyaagap" method="POST">
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
        />

        <div className="send-btn">
          <button type="submit">
            Send
            <i className="fa fa-paper-plane" />
          </button>
        </div>
        {/* eslint-enable jsx-a11y/label-has-associated-control */}
      </form>
    </div>
  </div>
);
ContactMe.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ContactMe;
