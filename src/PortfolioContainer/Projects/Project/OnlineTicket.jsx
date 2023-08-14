import onlineticket from '../../../assets/Projects/webp/onlineticket.webp';

const Weather = () => {
  const SCREEN_CONSTANTS = {
    description: 'This is an online ticketing page that basically allows users to book ticket for shows, programs, etc.. and also exhibit gallery of past events.',
    highlights: {
      bullets: [
        'HTML5',
        'CSS3',
        'JavaScript',
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
          <img src={onlineticket} alt="no internet" width="100%" height="100%" />
        </div>
        <div className="projects-me-details">
          <h2 className="project-heading">Online Tickets</h2>
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
            <a href="https://github.com/shafiuyushawu/Online-Ticket" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://shafiuyushawu.github.io/Online-Ticket/" target="_blank" rel="noopener noreferrer">
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

export default Weather;
