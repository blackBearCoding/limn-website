import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import './HomePage.css'
import { makeStyles } from '@material-ui/core/styles';
import SlideShow from '../MiscComponents/SlideShow'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    h1: {
        color: '#fefcfd',
        lineHeight: '0.8em'
    },
    h4: {
        color: '#fefcfd',
        marginLeft: '0.5em'
    },
    body1: {
        color: '#fefcfd',
        marginLeft: '1.15em',
        width: '23em',
        marginBottom: '1em',
        marginTop: '1em',
        lineHeight: '1.2em'
    },
    button: {
        color: '#fefcfd',
        marginLeft: '1.15em',
        backgroundColor: '#05668d',
        '&:hover': {
            backgroundColor: '#fefcfd',
            color: '#05668d',
        },
    }
}));

export default function HomePage(){
    const classes = useStyles()
        return (
            <>
                <Grid container className="container">
                    <Grid item xs={4} className="welcome">
                        <Typography variant="h1" className={classes.h1}>
                            Welcome
                        </Typography>
                        <Typography variant="h4" className={classes.h4}>
                            to Limn Interactive
                        </Typography>
                        <Typography variant="body1" className={classes.body1}>
                            We are a game development studio based in Aurora, CO USA. Our mission is to provide a quality gaming experience as well as opportunities for those with drive. <b>Want to join us?</b>
                        </Typography>
                        <Link to="/jobs">
                            <Button variant="contained" className={classes.button}>
                                Find out how
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <SlideShow />
                    </Grid>
                </Grid>
            </>
        )
}
