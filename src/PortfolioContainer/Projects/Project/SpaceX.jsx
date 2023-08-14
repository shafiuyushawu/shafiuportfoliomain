import space from '../../../assets/Projects/webp/space-x.webp';

const SpaceX = () => {
  const SCREEN_CONSTANTS = {
    description: 'A single page web application that provides a platform for scientists to get booked for reservations and join missions to space travel.',
    highlights: {
      bullets: [
        'React',
        'React-Redux',
        'React-Router-Dom',
        'Tailwind CSS',
        'Daisy UI ',
      ],
      heading: 'Built with: ',
    },
  };

  const renderHighlight = () => SCREEN_CONSTANTS.highlights.bullets.map((value) => (
    <div className="highlight" key={value}>
      <div className="highlight-blob" />
      <span className="project-stack">{value}</span>
    </div>
  ));
  return (
    <>
      <div className="projects-me-card">
        <div className="projects-profile">
          <img src={space} alt="no internet" width="100%" height="100%" />
        </div>
        <div className="projects-me-details">
          <h2 className="project-heading">Space Travelers</h2>
          <span className="projects-me-description">
            <div className="highlight-heading">
              {SCREEN_CONSTANTS.description}
            </div>
          </span>
          <div className="projects-me-highlights">
            <div className="highlight-heading">
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight()}
          </div>
          <div className="projects-me-options">
            <a href="https://github.com/shafiuyushawu/space-travelers" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://space-travelers-hub-kcp2.onrender.com/" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn highlighted-btn">
                Live Demo  🚀
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaceX;
