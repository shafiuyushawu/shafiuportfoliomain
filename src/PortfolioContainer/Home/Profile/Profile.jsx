import React from 'react';
import Typewriter from 'typewriter-effect';
import ScrollService from '../../../utilities/ScrollService';
import Animations from '../../../utilities/Animations';
import './Profile.css';

import resume from '../../../assets/Home/Shafiu.pdf';

import {
  FaGithub, FaLinkedinIn, FaTwitter, FaAngellist,
} from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const Profile = () => (
  <div className="profile-container">
    <div className="profile-parent">
      <div className="profile-detail">
        <div className="colz">
          <div className="colz-icons">
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
        </div>

        <div className="profile-details-name">
          <span className="primary-text">

            Hello, I'M
            {' '}
            <span className="highlighted-text">Shafiu</span>
          </span>
        </div>

        <div className="profile-details-role">
          <span className="primary-text">

            <h1>
              <Typewriter
                options={{
                  strings: [
                    'Enthuasiastic Dev ',
                    'Full Stak Dev',
                    'ML Engineer',
                    'React Native Dev',
                    'Laravel Dev',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <span className="profile-role-tagline">
              Knack of building applications with front and back
            </span>
          </span>
        </div>

        <div className="profile-options">
          <button
            className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
          >

            Hire Me
            {' '}

          </button>
          <a href={resume} download="Shafiu Ibn Yushawu.pdf">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"> </div>
      </div>
    </div>
  </div>
);

export default Profile;
