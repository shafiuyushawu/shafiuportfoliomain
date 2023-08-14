import moviegallery from '../../../assets/Projects/webp/moviegallery.webp';

const MovieGallery = () => {
  const SCREEN_CONSTANTS = {
    description: 'A single page app that displays a list of TV series, where users can react to each series by liking or commenting on it.',
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
          <img src={moviegallery} alt="no internet" width="70%" height="70%" />
        </div>
        <div className="projects-me-details">
          <h2 className="project-heading">Movie Gallery</h2>
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
            <a href="https://github.com/shafiuyushawu/movie-gallery" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://maov19.github.io/javascript-capstone/dist/" target="_blank" rel="noopener noreferrer">
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

export default MovieGallery;
