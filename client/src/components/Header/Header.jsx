import React from 'react';
import { Typography, Grid, IconButton, Tooltip, AppBar, Toolbar, Button } from "@material-ui/core";
import cx from "classnames";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styles from './Header.module.css';
import { CommandSelector } from "../../components";


const Header = ({ handleCommandChange }) => {

    const discordLogo = require('../../images/discord-logo-short.png')
    return (

        <AppBar position="static" >
            <Toolbar className={styles.appbar}>
                <Typography className={styles.title} variant="h4"> RIPBOT </Typography>

                <CommandSelector handleCommandChange={handleCommandChange} />

                <Tooltip title="Me on GitHub" >
                    <IconButton color="inherit" aria-label='github link' size="medium" href="www.github.com/cpsexton">
                        <GitHubIcon />
                    </IconButton>
                </ Tooltip>

                <Tooltip title="My projects on YouTube" >
                    <IconButton color="inherit" aria-label='youtube link' size="medium" href="www.youtube.com/MYUTUBE">
                        <YouTubeIcon />
                    </IconButton>
                </ Tooltip>

                <Tooltip title="Me on LinkedIn" >
                    <IconButton color="inherit" aria-label='linkedin link' size="medium" href="www.linkedin.com/cpsexton">
                        <LinkedInIcon />
                    </IconButton>
                </ Tooltip>

                <Tooltip title="Check out Discord" >
                    <Button href="www.discord.com" >
                        <img width='30px' src={discordLogo} alt='discord logo' />
                    </Button>
                </Tooltip>

            </Toolbar>
        </ AppBar>

    )
}
export default Header;