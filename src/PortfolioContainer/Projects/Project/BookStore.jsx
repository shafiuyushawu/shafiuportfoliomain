import bookstore from '../../../assets/Projects/webp/bookstore.webp';

const BookStore = () => {
  const SCREEN_CONSTANTS = {
    description: 'A react web application which functionalities to enable user add a books with name and title.',
    highlights: {
      bullets: [
        'React',
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
          <img src={bookstore} alt="no internet" />
        </div>
        <div className="projects-me-details">
          <h2 className="project-heading">BookStore</h2>
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
            <a href="https://github.com/shafiuyushawu/bookstore" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://bookshop-3fwx.onrender.com/" target="_blank" rel="noopener noreferrer">
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

export default BookStore;
