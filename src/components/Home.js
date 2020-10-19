import React from 'react';

import '../styles/home.css';
import selfie from '../img1217.jpeg';

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

const Home = () => {
  const classes = useStyles();

    return (
        <div className="home-container">
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper} elevation={0}>
                <img src={selfie} alt="Michael Walter, Full-Stack Developer"/>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} style={{marginTop: "-30px"}}>
              <Paper className={classes.paper} id="title-container" elevation={0}>
                <div className="title">
                  <h1 style={{fontSize: "6vw"}}>Michael Walter</h1>
                </div>
                <div className="title">
                  <h2 style={{fontSize: "4vw"}}>Full-Stack Developer</h2>
                </div>
                <div className="title title-bottom">
                  <h4>Riverside, California</h4>
                </div>
                <div className="title">
                  <h5>Open to Relocation</h5>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} style={{marginTop: "-40px", paddingBottom: "50px"}}>
              <Paper className={classes.paper} elevation={0} >
                <p style={{maxWidth:"80%", marginLeft:"10%"}}>
                  <span classNanme="indent">A</span> Full-Stack Software Developer and graduate of Lambda School. 
                  My hobbies include working on code challenges, working through courses on platforms such as Udemy, and working on personal projects.
                </p>
              </Paper>
            </Grid>

          </Grid>
          

        </div>
    );
};

export default Home;