import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import cx from "classnames";

import styles from './Cards.module.css';


const Cards = ({ command, desc, image, role }) => {
    let Theimage;

    if (!command) {
        return "Loading..."; //temporary placeholder for welcome card which should be gifs of some kind
    };

    if (image === 'helloGif') {
        Theimage = require('../../images/hello-command-demo.gif')
    } else if (image === 'pfpGif') {
        Theimage = require('../../images/pfp-command-demo.gif')
    } else if (image === 'pingGif') {
        Theimage = require('../../images/ping-command-demo.gif')
    } else if (image === 'timerGif') {
        Theimage = require('../../images/timer-command-demo.gif')
    } else if (image === 'muteGif') {
        Theimage = require('../../images/mute-command-demo-start.gif')
    } else if (image === 'uptimeGif') {
        Theimage = require('../../images/uptime-command-demo.gif')
    } else if (image === 'covidGif') {
        Theimage = require('../../images/covid-command-demo.gif')
    }


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.demonstration)}
                >
                    <CardContent>
                        <Typography variant="h3" color="textSecondary" gutterBottom>
                            {command}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography variant='body2'>
                            {desc}
                            {role}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={5}
                    className={cx(styles.card, styles.infected)}
                >
                    <CardContent>
                        <Typography variant="h3" color="textSecondary" gutterBottom>
                            {command}
                        </Typography>
                        <Divider variant="middle" />

                        <img className={styles.image} src={Theimage} alt="testimage" />

                    </CardContent>
                </Grid>


            </Grid>



        </div >
    )
}

export default Cards;