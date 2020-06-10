import React from 'react';
import { Card, CardContent, Typography, Grid, Divider, Fade, Fab, Tooltip, Slide } from "@material-ui/core";
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


    const ripbotLogoSmall = require('../../images/ripbot-transparent-logo.png');
    const discordLogoLong = require('../../images/discord-logo-long.png');
    const nodejsLogo = require('../../images/nodejs-logo-green.png');
    const reactjsLogo = require('../../images/react-logo-blue.png');

    if (!command) {
        return (
            <div className={styles.container}>

                {/* SELECT COMMAND CONTAINER */}
                <Grid container spacing={1} justify='center' className={styles.container}>
                    <Typography className={styles.placeholder} variant="caption" >
                        Select a command to see how RipBot works...
                    </Typography>
                </Grid>



                {/* BOT INFORMATION TEXT AND IMAGE CONTAINER */}
                <Grid container spacing={1} direction='inline-row' alignItems='center' className={styles.container} >

                    <Slide direction='right' in={true} >
                        <Grid item container className={styles.imageCard} >
                            <a href="www.nodejs.com">
                                <img src={nodejsLogo} className={styles.sheGot} alt='nodejs-logo-image' />
                            </a>
                            <a href="www.reactjs.com"  >
                                <img src={reactjsLogo} className={styles.sheGotTwo} alt='reactjs-logo-image' />
                            </a>

                        </Grid>
                    </Slide>

                    <Slide direction='left' in={true}>
                        <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.bot_information)} >
                            <CardContent>
                                <Typography variant='h6'> What is this and whats going on? </Typography>
                                <br />
                                <Divider variant="middle" />
                                <br />
                                <Typography variant='body2' paragraph>
                                    Well, firstly my name is Chris Sexton.
                                    I made this site and the bot, RipBot(RB). RB is a Discord bot created using Node.js with the assistance of the Discord.js module to help interact with the Discord API.
                                <br />
                                RB is hosted on Heroku and works in any discord server.
                                RB provides assistance moderating your discord channel,
                                along with a variety of informative and useful commands for all users.
                                The above dropdown menu will provide descriptions, demonstrations and a peek at the code that makes it all work.
                            </Typography>
                                <Divider variant="middle" />
                            </CardContent>
                        </Grid>
                    </Slide>

                </Grid>

                {/* DISCORD INFORMATION CONTAINER */}
                <Grid container spacing={1} direction='row' alignItems='center' className={styles.container}>

                    <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.discord_information)}>
                        <CardContent>
                            <Typography variant='h6'>
                                Cool! But wait what is Discord?!
                            </Typography>
                            <br />
                            <Divider variant="middle" />
                            <br />
                            <Typography variant='body2' paragraph>
                                "A new way to chat with your communities and friends.
                                Discord is the easiest way to communicate over voice,
                                video, and text, whether you’re part of a school club,
                                a nightly gaming group, a worldwide art community, or
                                just a handful of friends that want to hang out".
                            </Typography>
                            <Divider variant="middle" />
                            <Typography variant="caption" >
                                source discord.com
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item container className={styles.imageCard} >
                        <img className={styles.discordlogo} src={discordLogoLong} alt="discord logo long" />
                    </Grid>

                </Grid>

            </div>
        )
    };

    // // // WHEN A COMMAND IS SELECTED // // //
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

            <Grid container spacing={1} direction='inline-row' alignItems='center' className={styles.container}>

                {/* DETAILS CARD */}
                {/* DETAILS CARD */}
                <Slide direction="right" in={true} >
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.introduction)} >
                        <CardContent>
                            <Typography variant="h6" >
                                {command.toUpperCase()}
                            </Typography>
                            <Divider variant="middle" light />
                            <br />
                            <Typography variant='body1'>
                                Description:
                            </Typography>
                            <Typography variant='body2' paragraph>
                                {desc}
                                <Divider variant="middle" light />
                            </Typography>
                            <Typography variant='body1'>
                                Required Role:
                            </Typography>
                            <Typography variant='body2'>
                                {role}
                            </Typography>
                            <Divider variant="middle" light />
                        </CardContent>
                    </Grid>
                </Slide >

                {/* DEMONSTRATION GIF CARD */}
                {/* DEMONSTRATION GIF CARD */}
                <Slide direction="left" in={true} >
                    <Grid item component={Card} xs={12} md={'auto'} className={cx(styles.card, styles.bot_information)} >
                        <CardContent>
                            <Typography variant="h5" >
                                {syntax}
                            </Typography>
                            <Divider variant="middle" />
                            <br />
                            <img className={styles.image} src={imageGif} alt="imagegif" />
                        </CardContent>
                    </Grid>
                </Slide >
            </Grid>

            {/* CODE PREVIEW CARD */}
            {/* CODE PREVIEW CARD */}
            <Grid container spacing={1} direction='inline-row' alignItems='center' className={styles.container}>

                {/* SOURCE CODE BUTTON */}
                {/* SOURCE CODE BUTTON */}
                <Tooltip title="peep the source code" >
                    <Fab className={styles.button} color='default' aria-label='code' size="small" onClick={((e) => (handleChange(e.target.value)))}  >
                        <CodeIcon />
                    </Fab>
                </ Tooltip>

                <Fade in={clicked}>
                    <Grid item component={Card} xs={12} md={'auto'} className={cx(styles.card, styles.code)} >
                        <CardContent>
                            <img className={styles.image} src={imageCode} alt="imagecode" />
                        </ CardContent>
                    </ Grid>
                </Fade>

            </Grid>
            <Typography className={styles.author} variant="caption" >
                made with <FavoriteBorderIcon /> by Chris Sexton
            </Typography>

        </div >
    )
}

export default Cards;



// If you're here you must be someone I want to impress. Are you hard to impress? We'll see about that, friend.  1 I'll tell you how much I can benchpress. 2 I'll do that by first mentioning how much I can benchpress.  here goes. I guess what I'll do is. 1. I can benchpress almost about kinda an eighth of my body weight. 2! I My name is Chris Sexton and I'm a software developer. I made this site and the bot RipBot (RB) is a Discord bot created by me, Chris Sexton. RB was created using Node.js with the assistance of the Discord.js module to help interact with the Discord API. RB is hosted on Heroku and works in any discord server. RB provides assistance moderating your discord channel, along with a variety of informative and useful commands for all users. The above dropdown menu will provide descriptions, demonstrations and a peek at the code that makes it all work.