
import React from 'react';
import '../styles/projects.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import conway from './conway.png';
import issw from './issw.png';
import mydish from './mydish.png';
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Projects = () => {

    const classes = useStyles();

    return (
        <div className="projects-container">
            <Grid container spacing={3}>

                <Grid item xs={12} sm={12} style={{marginTop: "0px", marginBottom: "-20px", padding: "0"}}>
                    <Paper className={classes.paper} elevation={0}>
                        <h3 style={{textDecoration: "underline"}}>Projects</h3>
                    </Paper>
                </Grid>

                <Grid item xs={1} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={conway} alt="Conways game of life" />
                    </Paper>
                </Grid>

                <Grid item xs={11} sm={6}>
                    <Paper className={classes.paper}  elevation={0}>
                        <p className="h5">Conway's Game of Life 
                    (<a href={"https://friendly-wozniak-c97571.netlify.app/"} rel={"_blank"}>Live</a>) (<a href={"https://github.com/M-PAW/conways-game-of-life"}>Github</a>)
                    </p>
                    <p className="project-desc" style={{marginBottom: "30px"}}>A unique recreation of Conway's Game of Life.</p>
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <ul style={{maxWidth: "400px", marginTop: "-25px", marginBottom: "25px", textAlign: "left"}}>
                            <li>Successfully recreated the operational logic</li>
                            <li>Created a visualization of the data</li>
                        </ul>
                    </div>
                    <p className="stack"><strong>Stack:</strong> React with hooks, JavaScript, React-Bootstrap, HTML and CSS</p>
                    </Paper>
                </Grid>

                <Grid item xs={1} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={issw} alt="Conways game of life" />
                    </Paper>
                </Grid>

                <Grid item xs={11} sm={6} style={{marginTop: "-20px", marginBottom: "-20px"}}>
                    <Paper className={classes.paper}  elevation={0}>
                        <p className="h5">International School Social Worker 
                    (<a href={"https://github.com/M-PAW/Front-end/tree/master/school-social-worker"} rel={"_blank"}>Github</a>)
                    </p>
                    <p className="project-desc" style={{marginBottom: "30px"}}>A project aimed at helping social workers and children connect.</p>
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <ul style={{maxWidth: "400px", marginTop: "-25px", marginBottom: "25px", textAlign: "left"}}>
                            <li>Built a front end using React and Material-UI</li>
                            <li>Implemented state management using Redux</li>
                            <li>Built forms and edit capabilities</li>
                        </ul>
                    </div>
                    <p className="stack"><strong>Stack:</strong> React, Redux, React Router, Axios, Formik, JavaScript, Styled-Components</p>
                    </Paper>
                </Grid>

                <Grid item xs={1} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={mydish} alt="Conways game of life" />
                    </Paper>
                </Grid>

                <Grid item xs={11} sm={6} style={{marginBottom: "60px"}}>
                    <Paper className={classes.paper}  elevation={0}>
                        <p className="h5">MyDish 
                    (<a href={"https://github.com/M-PAW-LAMBDA-REVIEW/mydish-be"} rel={"_blank"}>Github</a>)
                    </p>
                    <p className="project-desc" style={{marginBottom: "10px"}}>A mobile app to push the bounds of cooking.</p>
                    <div style={{display:"flex", justifyContent: "center"}}>
                        <ul style={{maxWidth: "400px", marginTop: "-5px", marginBottom: "25px", textAlign: "left"}}>
                            <li>Increased test coverage to more than 200 total tests</li>
                            <li>Built additional user functionality</li>
                            <li>Integrated features created by a Data Science team</li>
                        </ul>
                    </div>
                    <p style={{marginTop: "-25px"}}><strong>Stack:</strong> React-Native, Jest, Express, NodeJS, JavaScript, HTML, CSS, KnexJS, PostgreSQL</p>
                    </Paper>
                </Grid>

            </Grid>

        </div>
    )
}

export default Projects;