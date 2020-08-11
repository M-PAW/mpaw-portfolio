
import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <h3>Projects</h3>
            <div>
                <h4>Conway's Game of Life</h4>
                (<a href={"https://friendly-wozniak-c97571.netlify.app/"} rel={"_blank"}>Live</a>)

                <p><strong>Stack:</strong> React with hooks, JavaScript, React-Bootstrap, HTML and CSS</p>
            </div>
            <div>
                <h4>International School Social Worker </h4>
                (<a href={"https://github.com/M-PAW/Front-end/tree/master/school-social-worker"} rel={"_blank"}>Github</a>)

                <p><strong>Stack:</strong> React, Redux, React Router, Axios, Formik, JavaScript, Styled-Components</p>
            </div>
            <div>
                <h4>MyDish </h4>
                (<a href={"https://github.com/M-PAW-LAMBDA-REVIEW/mydish-be"} rel={"_blank"}>Github</a>)

                <p><strong>Stack:</strong> React-Native, Jest, Express, NodeJS, JavaScript, HTML, CSS, KnexJS, PostgreSQL</p>
            </div>
        </div>
    )
}

export default Projects;