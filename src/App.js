import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Education from './components/Education';
import Home from './components/Home';
import Contact from './components/Contact';

import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="route-container">
            <Route exact path="/" >
            <Home />
            </Route>

            {/* <Route path="/About">
            <About />
            </Route> */}

            {/* <Route path="/Contact">
            <Contact />
            </Route> */}

            <Route path="/Education">
                <Education />
            </Route>

            <Route path="/Projects">
                <Projects />
            </Route>
        
        </div>
    );
};

export default App;