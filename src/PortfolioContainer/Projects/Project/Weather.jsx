import weather from '../../../assets/Projects/weatherf.png';

const Weather = () => {
  const SCREEN_CONSTANTS = {
    description: 'Weather forecast is a mobile application that gives users overview of weather conditions in your location, it will predict the next 10 days weather forecast in your locality. It also has search functional where users can seach for weather conditions in their locality by using the country, regions, city names, etc.',
    highlights: {
      bullets: [
        'React',
        'Redux',
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
          <img src={weather} alt="no internet" />
        </div>
        <div className="projects-me-details">
          <h3 className="project-heading">Weather</h3>
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
            <a href="https://github.com/shafiuyushawu/weather-app">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://weather-app-r266.onrender.com/">
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
