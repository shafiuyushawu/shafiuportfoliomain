import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BsFillArrowUpSquareFill } from 'react-icons/bs'; // Import your arrow icon
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'aboutme', 'resume', 'projects', 'testimonial', 'contactme']; // Add more sections if needed
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop - 100) {
        setActiveLink(section);
      }
    });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.navbar}>
      <h1>SHAFIU</h1>
      <button type="button" className={`${styles.menuIcon} ${showMenu ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </button>
      <ul className={`${showMenu ? styles.showMenu : ''}`}>
        <Link to="home" smooth duration={500}>
          <li className={activeLink === 'home' ? styles.active : ''}>Home</li>
        </Link>
        <Link to="aboutme" smooth duration={500}>
          <li className={activeLink === 'aboutme' ? styles.active : ''}>About Me</li>
        </Link>
        <Link to="resume" smooth duration={500}>
          <li className={activeLink === 'resume' ? styles.active : ''}>Resume</li>
        </Link>
        <Link to="projects" smooth duration={500}>
          <li className={activeLink === 'projects' ? styles.active : ''}>Projects</li>
        </Link>
        <Link to="testimonial" smooth duration={500}>
          <li className={activeLink === 'testimonial' ? styles.active : ''}>Testimonial</li>
        </Link>
        <Link to="contactme" smooth duration={500}>
          <li className={activeLink === 'contactme' ? styles.active : ''}>Contact Me</li>
        </Link>
        <Link to="home" smooth duration={500} className="move_home">
          <BsFillArrowUpSquareFill />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
