import bookingcar from '../../../assets/Projects/bookingcar.png';

const BookingCar = () => {
  const SCREEN_CONSTANTS = {
    description: 'Book vehicle rental frontend is a frontend react app for our book vehicle rental backend. It shows the features of the app and provides a user with better experience and interface.',
    highlights: {
      bullets: [
        'Ruby on Rails',
        'PostgreSQL',
        'Redux',
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
          <img src={bookingcar} alt="no internet" />
        </div>
        <div className="projects-me-details">
          <h3 className="project-heading">Movie Gallery</h3>
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
            <a href="https://github.com/shafiuyushawu/book_vehicle_rental-frontend" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <button disabled type="button" className="btn highlighted-btn" target="_blank" rel="noopener noreferrer">
              Live, Soon!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCar;
