
import React from 'react';
import '../styles/projects.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

                <Grid item xs={12} sm={12} style={{marginTop: "-40px", marginBottom: "-40px", padding: "0"}}>
                    <Paper className={classes.paper} elevation={0}>
                        <h3 style={{textDecoration: "underline"}}>Projects</h3>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}  elevation={0}>
                        <h5>Conway's Game of Life</h5>
                    (<a href={"https://friendly-wozniak-c97571.netlify.app/"} rel={"_blank"}>Live</a>) (<a href={"https://github.com/M-PAW/conways-game-of-life"}>Github</a>)
                    <p className="project-desc">A unique recreation of Conway's Game of Life.</p>
                    <p className="stack"><strong>Stack:</strong> React with hooks, JavaScript, React-Bootstrap, HTML and CSS</p>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}  elevation={0}>
                        <h5>International School Social Worker </h5>
                    (<a href={"https://github.com/M-PAW/Front-end/tree/master/school-social-worker"} rel={"_blank"}>Github</a>)
                    <p className="project-desc">A project aimed at helping social workers and children connect.</p>
                    <p className="stack"><strong>Stack:</strong> React, Redux, React Router, Axios, Formik, JavaScript, Styled-Components</p>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} style={{marginBottom: "25px"}}>
                    <Paper className={classes.paper}  elevation={0}>
                        <h5>MyDish </h5>
                    (<a href={"https://github.com/M-PAW-LAMBDA-REVIEW/mydish-be"} rel={"_blank"}>Github</a>)
                    <p className="project-desc">A mobile app to push the bounds of cooking.</p>
                    <p><strong>Stack:</strong> React-Native, Jest, Express, NodeJS, JavaScript, HTML, CSS, KnexJS, PostgreSQL</p>
                    </Paper>
                </Grid>

            </Grid>

        </div>
    )
}

export default Projects;