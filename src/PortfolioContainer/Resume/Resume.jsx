import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
// import ResumeHeading from './ResumeHeading/ResumeHeading';
import { resumeBullets, resumeDetails } from './Data/ResumeData';
import './Resume.css';

const Resume = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const handleCarousal = (index) => {
    const offsetHeight = 360;

    const newCarousalOffset = {
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  /* eslint-disable import/no-dynamic-require */
  /* eslint-disable global-require */
  const getBullets = () => resumeBullets.map((bullet) => (
    <button
      type="button"
      onClick={() => handleCarousal(bullet.id)}
      className={
            bullet.id === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
          }
      key={bullet.id}
      id="resume"
    >
      <img
        className="bullet-logo"
        src={require(`../../assets/Resume/${bullet.logoSrc}`)}
        alt="B"
      />
      <span className="bullet-label">{bullet.label}</span>
    </button>
  ));
  /* eslint-enable global-require */
  /* eslint-enable import/no-dynamic-require */

  const getResumeScreens = () => (
    <div
      style={carousalOffsetStyle.style}
      className="resume-details-carousal"
    >
      {resumeDetails.map((ResumeDetail) => ResumeDetail)}
    </div>
  );

  return (
    <div className="resume-container screen-container " id="resume">
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons" />
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
