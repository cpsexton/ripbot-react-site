import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, makeStyles, Fade, Fab } from "@material-ui/core";
import cx from "classnames";
import CodeIcon from '@material-ui/icons/Code';
import styles from './Cards.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    svg: {
        width: 100,
        height: 100
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

const Cards = ({ command, desc, image, role }) => {
    const classes = useStyles();
    const [clicked, setClicked] = React.useState(false);
    const handleChange = () => {
        setClicked((prev) => !prev);
    };
    let imageGif;
    let imageCode;

    if (!command) {
        return "Loading..."; //temporary placeholder for welcome card which should be gifs of some kind
    };

    if (image === 'helloGif') {
        imageGif = require('../../images/hello-command-demo.gif')
        imageCode = require('../../images/hello-command-code-preview.png')
    } else if (image === 'pfpGif') {
        imageGif = require('../../images/pfp-command-demo.gif')
        imageCode = require('../../images/pfp-command-code-preview.png')
    } else if (image === 'pingGif') {
        imageGif = require('../../images/ping-command-demo.gif')
    } else if (image === 'timerGif') {
        imageGif = require('../../images/timer-command-demo.gif')
    } else if (image === 'muteGif') {
        imageGif = require('../../images/mute-command-demo-start.gif')
    } else if (image === 'uptimeGif') {
        imageGif = require('../../images/uptime-command-demo.gif')
    } else if (image === 'covidGif') {
        imageGif = require('../../images/covid-command-demo.gif')
    }



    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.details)}
                >
                    <CardContent>
                        <Typography variant="h3" color="textSecondary" >
                            {command}
                        </Typography>
                        <Divider variant="middle" />
                        <br />
                        <Typography variant='h5'>
                            Description:
                        </Typography>
                        <Typography variant='h6' paragraph>
                            {desc}
                        </Typography>
                        <Typography variant='h5'>
                            Required Role:
                        </Typography>
                        <Typography variant='h6'>
                            {role}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={5}
                    className={cx(styles.card, styles.demonstration)}
                >
                    <CardContent>
                        <Typography variant="h3" color="textSecondary" >
                            {command}
                        </Typography>
                        <Divider variant="middle" />
                        <br />
                        <img className={styles.image} src={imageGif} alt="imagegif" />


                        <Fab className={styles.deaths} color='default' aria-label='code' size="small" onClick={((e) => (handleChange(e.target.value)))}  >
                            <CodeIcon />
                        </Fab>

                        <Fade in={clicked}>
                            <img className={classes.image} src={imageCode} alt="imagecode" />
                        </Fade>

                    </CardContent>
                </Grid>


            </Grid>



        </div >
    )
}

export default Cards;