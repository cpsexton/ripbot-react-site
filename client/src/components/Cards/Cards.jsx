import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import cx from "classnames";

import styles from './Cards.module.css';
import testImage from '../../images/uptime-command-demo.gif';

const Cards = ({ command }) => {
    if (!command) {
        return "Loading..."; //temporary placeholder for welcome card which should be gifs of some kind
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
                        <Typography variant='body2'>
                            command commandcommand this is some typing and stuffff whats is thoin
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
                        <Typography variant='body2'>
                            command infotion command information
                        </Typography>
                        <img className={styles.image} src={testImage} alt="testimage" width="100%" />

                    </CardContent>
                </Grid>


            </Grid>



        </div >
    )
}

export default Cards;