import './Projects.css';
import ScreenHeading from '../../utilities/ScreeenHeading/ScreenHeading';
import OnlineTicket from './Project/OnlineTicket';
import Weather from './Project/Weather';
import MovieGallery from './Project/MovieGallery';
import BookStore from './Project/BookStore';
import SpaceX from './Project/SpaceX';

const AboutMe = () => (
  <div className="projects-me-container screen-container" id="projects">
    <div className="projects-me-parent">
      <ScreenHeading title="Projects" subHeading="Highlighted Personal Projects" />
      <div className="projects-cards">
        <div className="about-me-card">
          <Weather />
        </div>
        <div className="about-me-card">
          <SpaceX />
        </div>
        <div className="about-me-card">
          <BookStore />
        </div>
        <div className="about-me-card">
          <MovieGallery />
        </div>
        <div className="about-me-card">
          <OnlineTicket />
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
