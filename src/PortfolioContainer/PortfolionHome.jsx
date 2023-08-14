import { PiArrowCircleUpBold } from 'react-icons/pi';
import { Link } from 'react-scroll';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Resume from './Resume/Resume';
import Testimonial from './Testimonial/Testimonial';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';
import Navbar from './Home/Header/Navbar';

const PortfolionHome = () => (
  <div>
    <Navbar />
    <Home />
    <Projects />
    <AboutMe />
    <Resume />
    <Testimonial />
    <ContactMe />
    <Link to="home" smooth duration={500} className="move_home">
      <PiArrowCircleUpBold className="move_home_icon" />
    </Link>
  </div>
);

export default PortfolionHome;
