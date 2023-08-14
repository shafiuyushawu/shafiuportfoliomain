import recipe from '../../../assets/Projects/recipe.png';

const RecipeApp = () => {
  const SCREEN_CONSTANTS = {
    description: 'Recipe App is a rails app which lets users add their favorite food, recipe, and it also alow them to shop for missing ingredient from the recipe.',
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
          <img src={recipe} alt="no internet" />
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
            <a href="https://github.com/shafiuyushawu/recipe-app">
              <button
                type="button"
                className="btn primary-btn"
              >
                See Source  📝
              </button>
            </a>
            <button disabled type="button" className="btn highlighted-btn">
              Live, Soon!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeApp;
