import budget from '../../../assets/Projects/budget1.png';

const BudgetApp = () => {
  const SCREEN_CONSTANTS = {
    description: 'Budget App is a web-based budgeting application built using Ruby on Rails and PostgreSQL. With Budget app, users can effortlessly track their income and expenses, gaining full control over their finances.',
    highlights: {
      bullets: [
        'Ruby on Rails',
        'PostgreSQL',
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
          <img src={budget} alt="no internet" />
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
            <a href="https://github.com/shafiuyushawu/budget-app">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <a href="https://budget-app-03mn.onrender.com/">
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

export default BudgetApp;
