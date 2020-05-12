import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, Fade, Fab, Tooltip } from "@material-ui/core";
import cx from "classnames";
import CodeIcon from '@material-ui/icons/Code';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from './Cards.module.css';
const landingImage = require("../../images/RipBot-wall-art.jpg");

const Cards = ({ command, desc, image, role, syntax }) => {

    const [clicked, setClicked] = React.useState(false);
    const handleChange = () => {
        setClicked((prev) => !prev);
    };
    let imageGif;
    let imageCode;

    const discordLogoLong = require('../../images/discord-logo-long.png')

    if (!command) {
        return (
            <div >
                <Typography className={styles.placeholder} variant="h5" >
                    Select a command to see how RipBot works...
                </Typography>
                <img className={styles.discordlogo} src={discordLogoLong} alt="discord logo long" />

                <Typography className={styles.discord} variant="h6" >
                    DISCORD: A new way to chat with your communities and friends. Discord is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.
                </Typography>
            </div>
        )
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
        <div className={cx(styles.container)}>
            <Grid container spacing={1} justify="center">

                {/* DETAILS CARD */}
                {/* DETAILS CARD */}
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

                {/* DEMONSTRATION GIF CARD */}
                {/* DEMONSTRATION GIF CARD */}
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={5}
                    className={cx(styles.card, styles.demonstration)}
                >
                    <CardContent>
                        <Typography variant="h5" color="textSecondary" >
                            {syntax}
                        </Typography>
                        <Divider variant="middle" />
                        <br />
                        <img className={styles.image} src={imageGif} alt="imagegif" />
                    </CardContent>
                </Grid>

                {/* CODE PREVIEW CARD */}
                {/* CODE PREVIEW CARD */}
                <Fade in={clicked}>
                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={5}
                        className={cx(styles.card, styles.code)}
                    >
                        <CardContent>
                            <img className={styles.image} src={imageCode} alt="imagecode" />
                        </ CardContent>
                    </ Grid>
                </Fade>

                {/* SOURCE CODE BUTTON */}
                {/* SOURCE CODE BUTTON */}
                <Tooltip title="peep the source code" >
                    <Fab className={styles.button} color='default' aria-label='code' size="small" onClick={((e) => (handleChange(e.target.value)))}  >
                        <CodeIcon />
                    </Fab>
                </ Tooltip>
            </ Grid>
            <Typography className={styles.author} variant="caption" >
                made with <FavoriteBorderIcon /> by Chris Sexton
            </Typography>

        </div >
    )
}

export default Cards;