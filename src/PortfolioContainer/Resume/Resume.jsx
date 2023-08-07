import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import './Resume.css';

const Resume = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const ResumeHeading = ({
    heading, fromDate, toDate, subHeading, description, description1, link, live,
  }) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet" />
        <span>{heading || ''}</span>
        {fromDate && toDate ? (
          <div className="heading-date">
            {`${fromDate}-${toDate}`}
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className="resume-sub-heading">
        <span>{subHeading || ''}</span>
      </div>
      <div className="resume-heading-description">
        <span>{description || ''}</span>
      </div>
      <div className="resume-heading-description">
        <span>{description1 || ''}</span>
      </div>
      <div className="resume-heading-description">
        <a href={link}>{live || ''}</a>
      </div>
    </div>
  );

  const resumeBullets = [
    { id: 1, label: 'Education', logoSrc: 'education.svg' },
    { id: 2, label: 'Work History', logoSrc: 'work-history.svg' },
    { id: 3, label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { id: 4, label: 'Projects', logoSrc: 'projects.svg' },
    { id: 5, label: 'Interests', logoSrc: 'interests.svg' },
  ];

  const programmingSkillsDetails = [
    { id: 1, skill: 'JavaScript', ratingPercentage: 90 },
    { id: 2, skill: 'React JS', ratingPercentage: 90 },
    { id: 3, skill: 'React Native', ratingPercentage: 65 },
    { id: 4, skill: 'Express JS', ratingPercentage: 40 },
    { id: 6, skill: 'Node JS', ratingPercentage: 30 },
    { id: 7, skill: 'Mongo Db', ratingPercentage: 20 },
    { id: 8, skill: 'Tailwind CSS & Daisy UI', ratingPercentage: 95 },
    { id: 9, skill: 'HTML', ratingPercentage: 97 },
    { id: 10, skill: 'CSS', ratingPercentage: 95 },
  ];

  const projectsDetails = [
    {
      id: 1,
      title: 'Weather',
      duration: { fromDate: 'Apr. 2023', toDate: 'Apr. 2023' },
      description:
        'Weather forecast is a mobile application that gives users overview of weather conditions in your location.',
      subHeading: 'Built with: React JS, Tailwind CSS, Daisy UI, Redux',
      link: 'https://weather-76ks.onrender.com',
      live: 'Go Live 😊',
    },
    {
      id: 2,
      title: 'Movie Gallery ',
      duration: { fromDate: 'Apr. 2023', toDate: 'Apr. 2023' },
      description:
        'A web application for dis playing list of TV series with descriptions and genre and option to like or comment.',
      subHeading:
        'Built with:  React Native, Mongo DB, Express Js, Node Js, Redux.',
      link: 'https://shafiuyushawu.github.io/movie-gallery/dist/',
      live: 'Go Live 😊',
    },
    {
      id: 3,
      title: 'Movie Gallery ',
      duration: { fromDate: 'Mar. 2023', toDate: 'Mar. 2023' },
      description:
        'An online ticketing page that basically allows users to book tickets.',
      subHeading: 'Built with: React Redux, TailwindCSS, DaisyUI.',
      link: 'https://shafiuyushawu.github.io/Online-Ticket/',
      live: 'Go Live 😊',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading="MICROVERSE"
        subHeading="Remote Full Stack Web Development Program, Full Time"
        fromDate="Jan. 2023"
        toDate="Aug. 2023"
        description="- Spent 1300+ hours mastering algorithms, data structures, and full-stack development."
        description1="- Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers."
      />

      <ResumeHeading
        heading="UNIVERSITY OF GHANA"
        subHeading="Degree, Bachelor of Science in Computer Science"
        fromDate="Oct. 2019"
        toDate="Jul. 2020"
        description="- Relevant coursework: Introduction to Statistics, Introduction to Artificial Intelligence, Data Structures and Algorithm, Database Management System, Web Technology, Calculus, Mathematics."
        description1="- Thesis: Intelligent Traffic Control System (ITCS) - An intelligent system that employs reinforcement learning approach to control traffic at the intersection."
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading="MICROVERSE"
          subHeading="Mentor (Volunteer)"
          fromDate="Feb. 2023"
          toDate="Present"
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Mentoring junior web developers, providing technical support
            through code reviews.
            <br />
            - Proposing improvements to code organization to improve code
            quality and overall performance.
            <br />
            - Providing advice and tips on how to maintain motivation to
            maintain longevity in the program.
          </span>
        </div>
        <ResumeHeading
          heading="COSCO SHIPPING LINES GHANA"
          subHeading="IT Officer"
          fromDate="Oct 2020"
          toDate="Present"
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Configured, monitored, maintained, and controlled server room
            equipment.
            <br />
            - Assisted the team in connecting our Local Area Network to Cosco
            shipping domain at HQ in Shanghai.
            <br />
            - Partnered in migrating all users to the new Cosco Shipping
            domain.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill) => (
        <div className="skill-parent" key={skill.id}>
          <div className="heading-bullet" />
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: `${skill.ratingPercentage}%` }}
              className="active-percentage-bar"
            />
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails) => (
        <>
          <ResumeHeading
            key={projectsDetails.id}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
            live={projectsDetails.live}
          />
        </>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    const offsetHeight = 360;

    const newCarousalOffset = {
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => resumeBullets.map((bullet) => (
    <button
      type="button"
      onClick={() => handleCarousal(bullet.id)}
      className={
          bullet.id === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
      key={bullet.id}
    >
      <img
        className="bullet-logo"
        src={(`../../assets/Resume/${bullet.logoSrc}`)}
        alt="B"
      />
      <span className="bullet-label">{bullet.label}</span>
    </button>
  ));

  const getResumeScreens = () => (
    <div
      style={carousalOffsetStyle.style}
      className="resume-details-carousal"
    >
      {resumeDetails.map((ResumeDetail) => ResumeDetail)}
    </div>
  );

  return (
    <div className="resume-container screen-container ">
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

Resume.propTypes = {
  heading: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
};

export default Resume;
