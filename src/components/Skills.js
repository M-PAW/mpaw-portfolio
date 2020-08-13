import React from 'react';
import '../styles/skills.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// icon images
import react from './icons/react.png';
import reactNative from './icons/reactNative.png';
import html5_css3 from './icons/html5_css3.png';
import bootstrap from './icons/bootstrap.jpeg';
import materialUI from './icons/materialUI.png';
import python from './icons/python.png';
import nodeJS from './icons/nodeJS.png';
import redux from './icons/Redux.png';
import SQLITE from './icons/sqlite.png';
import LESS from './icons/less.png';
import SASS from './icons/sass.png';

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

const Skills = () => {

    const classes = useStyles();

    return (

        <div className="skills-container">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <h3 style={{textDecoration: "underline"}}>Skills</h3>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        {/* <img src={react} alt="" />
                        <img src={reactNative} alt="" />
                        <img src={html5_css3} alt="" /> */}
                        <ul style={{textAlign: "right", listStyle: "none"}}>
                            <li>HTML & CSS</li>
                            <li>Bootstrap</li>
                            <li>Less & Sass</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React-Native</li>
                            <li>Material-UI</li>
                            <li>React-Bootstrap</li>
                        </ul>
                    </Paper>
                </Grid>

                <Grid item xs={6} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        {/* <img src={bootstrap} alt="" />
                        <img src={materialUI} alt="" />
                        <img src={python} alt="" /> */}

                        <ul style={{textAlign: "left", listStyle:"none"}}>
                            <li>Redux</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Axios</li>
                            <li>Jest</li>
                            <li>SQLite3</li>
                            <li>PostgreSql</li>
                            <li>Knex</li>
                        </ul>
                    </Paper>
                </Grid>

                {/* <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={nodeJS} alt="" />
                        <img src={redux} alt="" />
                        <img src={SQLITE} alt="" />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <img src={LESS} alt="" />
                        <img src={SASS} alt="" />
                    </Paper>
                </Grid> */}


            </Grid>
        </div>

    )

}

export default Skills;