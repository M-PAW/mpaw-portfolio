
import React from 'react';
import '../styles/education.css';

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

const Education = () => {

    const classes = useStyles();

    return (

        <div className="education-container">
            <Grid container spacing={3} style={{marginTop: "-40px"}}>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <div>
                            <h2 className="title-ed">Formal Education</h2>
                            <section>   
                                <h4>Lambda School</h4>
                                <p>Full-Stack Development</p>
                            </section>
                            <section>
                                <h4>Nanjing University</h4>
                                <p>Mandarin Chinese</p>
                            </section>
                            <section>
                                <h4>Riverside City College</h4>
                                <p>Computer Science</p>
                            </section>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <div>
                            <h3 className="title-ed">Informal Education</h3>
                            <section>
                                <h5>Udemy</h5>
                            </section>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <div>
                            <h3 className="title-ed">Code Challenges</h3>
                            <section>
                                <h5>leetcode</h5>
                            </section>
                            <section>
                                <h5>Edabit</h5>
                            </section>
                        </div>
                    </Paper>
                </Grid>

            </Grid>

        </div>
    )
}

export default Education;