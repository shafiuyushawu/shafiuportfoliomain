import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="home" smooth duration={500} className="home_icon">
          <h1>SHAFIU ~ </h1>
        </Link>
        <button type="button" className="nav_icon" onClick={handleToggle}>
          {toggle ? (
            <MdClose className="icon_m" />
          ) : (
            <AiOutlineMenuUnfold className="icon_m" />
          )}
        </button>
        <div className={`nav_menu ${toggle ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="aboutme" smooth duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="resume" smooth duration={500}>
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth
                offset={-70}
                duration={500}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contactme" smooth duration={500}>
                Contact Me
              </Link>
            </li>
            <li>
              <Link to="home" smooth duration={500} className="move_home">
                <BsFillArrowUpSquareFill />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
