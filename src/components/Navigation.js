import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <div>
      <div className="Nav-Container">
        <div>
          <Link to="/">Home</Link>
        </div>
        {/* <div>
          <Link to="/About">About</Link>
        </div> */}
        <div>
          <Link to='/Education'>Education</Link>
        </div>
        <div>
          <Link to='/Projects'>Projects</Link>
        </div>
        {/* <div>
          <Link to='/Contact'>Contact</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navigation;