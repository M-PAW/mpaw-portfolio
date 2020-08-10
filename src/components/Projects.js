
import React from 'react';
import '../styles/projects.css';

const Projects = () => {
    return (
        <div className="projects-container">
            <div>
                <h3>Conway's Game of Life</h3>
                (<a href={"https://friendly-wozniak-c97571.netlify.app/"} rel={"_blank"}>Live</a>)

                <p><strong>Stack:</strong> React with hooks, JavaScript, React-Bootstrap, HTML and CSS</p>
            </div>
            <div>
                <h3>International School Social Worker </h3>
                (<a href={"https://github.com/M-PAW/Front-end/tree/master/school-social-worker"} rel={"_blank"}>Github</a>)

                <p><strong>Stack:</strong> React, Redux, React Router, Axios, Formik, JavaScript, Styled-Components</p>
            </div>
            <div>
                <h3>MyDish </h3>
                (<a href={"https://github.com/M-PAW-LAMBDA-REVIEW/mydish-be"} rel={"_blank"}>Github</a>)

                <p><strong>Stack:</strong> React-Native, Jest, Express, NodeJS, JavaScript, HTML, CSS, KnexJS, PostgreSQL</p>
            </div>
        </div>
    )
}

export default Projects;