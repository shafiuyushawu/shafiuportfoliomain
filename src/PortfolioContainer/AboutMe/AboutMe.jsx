import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import './AboutMe.css';
import resume from '../../assets/Home/Shafiu.pdf';

const AboutMe = () => {
  const SCREEN_CONSTANTS = {
    description:
      'Full-stack developer who is passionate about open-source projects, and enjoys writing clean and reusable code. I have experience with various programming languages, and frameworks, and  I am skilled in pair programming working remotely.',
    highlights: {
      bullets: [
        'Web Developer',
        'React and React Native',
        'Ruby and Ruby on Rails',
        'Tensorflow: Machine Leaning ',
      ],
      heading: 'Here are a few Highlights: ',
    },
  };

  const renderHighlight = () => SCREEN_CONSTANTS.highlights.bullets.map((value) => (
    <div className="highlight" key={value.id}>
      <div className="highlight-blob" />
      <span>{value}</span>
    </div>
  ));

  return (
    <div className="about-me-container screen-container" id="aboutme">
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile" />
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                type="button"
                className="btn primary-btn"
              >
                {/* onClick={() => ScrollService.scrollHandler.scrollToHireMe()} */}
                {' '}
                Hire Me
                {' '}
              </button>
              <a href={resume} download="Shafiu's.pdf">
                <button type="button" className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
