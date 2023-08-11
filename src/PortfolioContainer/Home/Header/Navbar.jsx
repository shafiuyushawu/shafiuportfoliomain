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
    <div className="navbar">
      <h1>SHAFIU</h1>
      <div className="nav_icon">
        {
        toggle
          ? <MdClose onClick={handleToggle} />
          : <AiOutlineMenuUnfold onClick={handleToggle} />
}
      </div>
      <ul className={toggle ? 'togle_open' : 'togle_close'}>
        <Link to="home" smooth duration={500}>
          <li>Home</li>
        </Link>
        <Link to="aboutme" smooth duration={500}>
          <li>About Me</li>
        </Link>
        <Link to="home" smooth duration={500} className="move_home">
          <BsFillArrowUpSquareFill />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
