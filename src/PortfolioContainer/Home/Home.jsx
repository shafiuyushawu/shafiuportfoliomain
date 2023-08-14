import React from 'react';

import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

const Home = () => (
  <div className="home-container" id="home">
    <Profile />
    <Footer />
  </div>
);

export default Home;
