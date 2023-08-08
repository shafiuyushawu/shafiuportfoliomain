import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Projects from './PortfolioContainer/Projects/Projects';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  </div>
);

export default App;
