
import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h3>Projects</h3>
            <div>
                <h5>Conway's Game of Life</h5>
                (<a href={"https://friendly-wozniak-c97571.netlify.app/"} rel={"_blank"}>Live</a>) (<a href={"https://github.com/M-PAW/conways-game-of-life"}>Github</a>)
                <p className="project-desc">A unique recreation of Conway's Game of Life.</p>
                <p className="stack"><strong>Stack:</strong> React with hooks, JavaScript, React-Bootstrap, HTML and CSS</p>
            </div>
            <div>
                <h5>International School Social Worker </h5>
                (<a href={"https://github.com/M-PAW/Front-end/tree/master/school-social-worker"} rel={"_blank"}>Github</a>)
                <p className="project-desc">A project aimed at helping social workers and children connect.</p>
                <p className="stack"><strong>Stack:</strong> React, Redux, React Router, Axios, Formik, JavaScript, Styled-Components</p>
            </div>
            <div>
                <h5>MyDish </h5>
                (<a href={"https://github.com/M-PAW-LAMBDA-REVIEW/mydish-be"} rel={"_blank"}>Github</a>)
                <p className="project-desc">A mobile app to push the bounds of cooking.</p>
                <p><strong>Stack:</strong> React-Native, Jest, Express, NodeJS, JavaScript, HTML, CSS, KnexJS, PostgreSQL</p>
            </div>
        </div>
    )
}

export default Projects;