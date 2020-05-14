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
            <Grid container spacing={1} direction='column' alignItems='center' className={styles.container}>

                <Typography className={styles.placeholder} variant="h5" >
                    Select a command to see how RipBot works...
                </Typography>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={5}
                    className={cx(styles.card, styles.details)}
                >
                    <CardContent>
                        <Typography variant='h3' > RipBot </Typography>
                        <Divider variant="middle" />
                        <br />
                        <Typography variant='h5'> What is RipBot: </Typography>
                        <Typography variant='h6' paragraph>
                            RipBot (RB) is a Discord bot created by me, Chris Sexton. RB was created using Node.js with the assistance of the Discord.js module to help interact with the Discord API. RB is hosted on Heroku and works in any discord server. RB provides assistance moderating your discord channel, along with a variety of informative and useful commands for all users. The above dropdown menu will provide descriptions, demonstrations and a peek at the code that makes it all work.
                        </Typography>
                        <Divider variant="middle" />
                    </CardContent>

                    <CardContent>
                        <img className={styles.discordlogo} src={discordLogoLong} alt="discord logo long" />
                        <Divider variant="middle" />
                        <br />
                        <Typography variant='h5'>
                            What is Discord:
                        </Typography>
                        <Typography variant='h6' paragraph>
                            A new way to chat with your communities and friends. Discord is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out.
                        </Typography>

                        <Typography variant="caption" >
                            source discord.com
                        </Typography>
                    </CardContent>

                </Grid>

            </Grid>
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
        imageCode = require('../../images/mute-command-code-preview.png')
    } else if (image === 'uptimeGif') {
        imageGif = require('../../images/uptime-command-demo.gif')
    } else if (image === 'covidGif') {
        imageGif = require('../../images/covid-command-demo.gif')
        imageCode = require('../../images/covid-command-code-preview.png')
    } else if (image === 'pollGif') {
        imageGif = require('../../images/poll-command-demo.gif')
        imageCode = require('../../images/poll-command-code-preview.png')
    } else if (image === 'rdiceGif') {
        imageGif = require('../../images/rolldice-command-demo.gif')
        imageCode = require('../../images/rolldice-command-code-preview.png')
    } else if (image === 'activityGif') {
        imageGif = require('../../images/activity-command-demo.gif')
        imageCode = require('../../images/activity-command-code-preview.png')
    } else if (image === 'pruneGif') {
        imageGif = require('../../images/prune-command-demo.gif')
        imageCode = require('../../images/prune-command-code-preview.png')
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
                    md={'auto'}
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
                        md={'auto'}
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