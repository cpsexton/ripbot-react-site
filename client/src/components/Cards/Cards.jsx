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

    const discordLogoLong = require('../../images/discord-logo-long.png');
    const sarcasticIntroImage = require('../../images/RipBot-wall-art.jpg');
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

                {/* SARCASTIC INTRO TEXT AND IMAGE CONTAINER */}
                <Grid container spacing={1} direction='inline-row' alignItems='center' className={styles.container}>

                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={5}
                        className={cx(styles.card, styles.sarcastic_introduction)}
                    >
                        <CardContent>
                            <Typography variant='h6'> What is this and what's going on? </Typography>
                            <br />
                            <Divider variant="middle" />
                            <br />
                            <Typography variant='body1' paragraph>
                                Here at RipBot Productions, we understand that hiring the right person for your team/company is more important now than it has ever been. <br />With that in mind we have some GREAT news we have been itching to share with all of you. <br /><br />We are proud to announce that we, RipBot Productions, are just Chris.<br /> It's been just me Chris writing the whole time! <br /><br />"How amazing!" "What tom-foolery!" "What an exceptionally talented individual!" <br /><br />you're probably thinking and well you'd be correct, partner. <br />So partner, now that everyone is perfectly without exception on the same page and we all have an understanding of what is actually going on, let me be serious and tell you about RipBot, the Discord bot I created while learning Node.js.
                        </Typography>
                            <Divider variant="middle" />
                        </CardContent>
                    </Grid>

                    <Grid
                        item
                        container
                        className={styles.imageCard}

                    >
                        <img src={sarcasticIntroImage} alt='sarcastic-intro-image' className={styles.sarcastic_image} />
                    </Grid>

                </Grid>

                {/* BOT INFORMATION TEXT AND IMAGE CONTAINER */}
                <Grid container spacing={1} direction='inline-row' alignItems='center' className={styles.container}>

                    <Grid
                        item
                        container
                        className={styles.imageCard}

                    >
                        <img src={nodejsLogo} alt='nodejs-logo-image' className={styles.sarcastic_image} />
                        <img src={reactjsLogo} alt='reactjs-logo-image' className={styles.sarcastic_image} />
                    </Grid>
                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={5}
                        className={cx(styles.card, styles.bot_information)}
                    >
                        <CardContent>
                            <Typography variant='h6'> Okay, so what is this bot?! </Typography>
                            <br />
                            <Divider variant="middle" />
                            <br />
                            <Typography variant='body1' paragraph>
                                My name is Chris Sexton.
                                I made this site and the bot RipBot (RB) is a Discord bot created by me, Chris Sexton.
                                RB was created using Node.js with the assistance of the Discord.js module to help interact with the Discord API.
                                RB is hosted on Heroku and works in any discord server.
                                RB provides assistance moderating your discord channel,
                                along with a variety of informative and useful commands for all users.
                                The above dropdown menu will provide descriptions, demonstrations and a peek at the code that makes it all work.
                            
                                Fake reviews from companies I totally made up claim RipBot is "Outstanding!" and 
                            </Typography>
                            <Divider variant="middle" />
                        </CardContent>
                    </Grid>


                </Grid>
                
                {/* DISCORD INFORMATION CONTAINER */}
                <Grid container spacing={1} direction='row' alignItems='center' className={styles.container}>
                    <Grid
                        item
                        component={Card}
                        xs={12}
                        md={5}
                        className={cx(styles.card, styles.discord_information)}
                    >
                        <CardContent>
                            <Typography variant='h6'>
                                Cool! But wait what is Discord?!
                            </Typography>
                            <br />
                            <Divider variant="middle" />
                            <br />
                            <Typography variant='body1' paragraph>
                                "A new way to chat with your communities and friends. Discord is the easiest way to communicate over voice, video, and text, whether you’re part of a school club, a nightly gaming group, a worldwide art community, or just a handful of friends that want to hang out".
                            </Typography>
                            <Divider variant="middle" />
                            <Typography variant="caption" >
                                source discord.com
                        </Typography>
                        </CardContent>
                    </Grid>
                    <Grid
                        item
                        container
                        className={styles.imageCard}
                    >
                        <img className={styles.discordlogo} src={discordLogoLong} alt="discord logo long" />
                    </Grid>
                </Grid>



            </div>)
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



// If you're here you must be someone I want to impress. Are you hard to impress? We'll see about that, friend.  1 I'll tell you how much I can benchpress. 2 I'll do that by first mentioning how much I can benchpress.  here goes. I guess what I'll do is. 1. I can benchpress almost about kinda an eighth of my body weight. 2! I My name is Chris Sexton and I'm a software developer. I made this site and the bot RipBot (RB) is a Discord bot created by me, Chris Sexton. RB was created using Node.js with the assistance of the Discord.js module to help interact with the Discord API. RB is hosted on Heroku and works in any discord server. RB provides assistance moderating your discord channel, along with a variety of informative and useful commands for all users. The above dropdown menu will provide descriptions, demonstrations and a peek at the code that makes it all work.