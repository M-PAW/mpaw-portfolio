import React from 'react';

import '../styles/home.css';

const Home = () => {
    return (
        <div className="home-container">
          <div className="home-content">
            <div>
              <h1>Michael Walter</h1>
            </div>
            <div>
              <h2>Full-Stack Developer</h2>
            </div>
            <div>
              <p>
                <span classNanme="indent">A</span> Full-Stack Software Developer and graduate of Lambda School 
                currently based in Southern California. My hobbies include working on code challenges, working through courses on platforms such as Udemy, and working on personal projects.
              </p>
            </div>
          </div>
        </div>
    );
};

export default Home;