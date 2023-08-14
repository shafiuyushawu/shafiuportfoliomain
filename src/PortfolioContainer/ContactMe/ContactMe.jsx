import Typewriter from 'typewriter-effect';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaAngellist,
} from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import imgBack from '../../images/mailz.webp';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import './ContactMe.css';

const ContactMe = () => (
  <div className="main-container" id="contactme">
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
          <a href="https://github.com/shafiuyushawu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/shafiuyushawu" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="https://twitter.com/shafiuyushawu" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://medium.com/@shafiuyushawu" target="_blank" rel="noopener noreferrer">
            <SiMedium className="icon" />
          </a>
          <a href="https://wellfound.com/u/shafiuyushawu" target="_blank" rel="noopener noreferrer">
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

export default ContactMe;
