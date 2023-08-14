import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Header/Navbar';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';

const Home = ({ id }) => (
  <div className="home-container" id="home">
    <Navbar id={id} />
    <Profile />
    <Footer />
  </div>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Home;
