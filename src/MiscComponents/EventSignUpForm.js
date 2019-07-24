import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
import { makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'

export default class EventSignUpForm extends Component {
    render() {
        return (
            <>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h2">
                            Sign Up for an Event!
                        </Typography>
                        <Typography variant="body1">
                            The cat was chasing the mouse play time, yet bite nose of your human. Leave fur on owners clothes bleghbleghvomit my furball really tie the room together steal the warm chair right after you get up
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <FormGroup>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} />
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} />
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Email</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} type='email' />
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} type='tel' />
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </FormGroup>
                </Grid>
            </>
        )
    }
}
