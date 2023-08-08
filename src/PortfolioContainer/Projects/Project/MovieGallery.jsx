import moviegallery from '../../../assets/Projects/moviegallery.png';

const MovieGallery = () => {
  const SCREEN_CONSTANTS = {
    description: 'This is an online ticketing page that basically allows users to book ticket for shows, programs, etc.. and also exhibit gallery of past events.',
    highlights: {
      bullets: [
        'React',
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
          <img src={moviegallery} alt="no internet" />
        </div>
        <div className="projects-me-details">
          <h3 className="project-heading">Online Tickets</h3>
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
            <button type="button" className="btn highlighted-btn">See Projects</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieGallery;
