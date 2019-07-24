import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import EventItem from '../MiscComponents/EventItem'
import EventSignUpForm from '../MiscComponents/EventSignUpForm';

export default class EventsPage extends Component {
    render() {
        return (
            <>
                <Grid container>
                    <Grid item xs={6} style={{ backgroundColor: '#05668d', color: '#fefcfd', padding: '1em'}}>
                        <Typography variant="h2">
                            Events
                        </Typography>
                        <Typography variant="body1">
                            The cat was chasing the mouse play time, yet bite nose of your human. Leave fur on owners clothes bleghbleghvomit my furball really tie the room together steal the warm chair right after you get up
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                            <Grid item xs={6}>
                                <EventItem />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} style={{padding: '1em'}}>
                        <EventSignUpForm/>
                    </Grid>
                </Grid>
            </>
        )
    }
}
