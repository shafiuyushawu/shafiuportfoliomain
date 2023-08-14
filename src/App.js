import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolionHome from './PortfolioContainer/PortfolionHome';
import Resume from './PortfolioContainer/Resume/Resume';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<PortfolionHome />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </div>
);

export default App;
