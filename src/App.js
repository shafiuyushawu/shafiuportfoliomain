import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolionHome from './PortfolioContainer/PortfolionHome';

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<PortfolionHome />} />
      </Routes>
    </Router>
  </div>
);

export default App;
