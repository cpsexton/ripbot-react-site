import React from 'react';
import { Typography, Grid, Divider, Fab, Tooltip } from "@material-ui/core";
import cx from "classnames";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import styles from './Header.module.css';



const Header = ({ }) => {
    return (
        <Grid container spacing={1} justify="center">

            <Typography variant="h4" >RIPBOT</Typography>

            <Tooltip title="peep the source code on GitHub" >
                <Fab className={styles.button} color='default' aria-label='github link' size="small" href="www.github.com/cpsexton">
                    <GitHubIcon />
                </Fab>
            </ Tooltip>
            <Tooltip title="I made this" >
                <Fab className={styles.button} color='default' aria-label='linkedin link' size="small" href="www.linkedin.com/cpsexton">
                    <LinkedInIcon />
                </Fab>
            </ Tooltip>
        </ Grid>
    )
}
export default Header;