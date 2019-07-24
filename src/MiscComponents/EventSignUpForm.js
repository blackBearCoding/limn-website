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
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        color: '#fefcfd',
        backgroundColor: '#05668d',
        '&:hover': {
            backgroundColor: '#fefcfd',
            color: '#05668d'
        }
    }
}));


const ticketTypes = [
    {
        value: 'Visitor',
        label: 'Visitor',
    },
    {
        value: 'Vendor',
        label: 'Vendor',
    },
    {
        value: 'Tournament',
        label: 'Tournament',
    },
];

export default function EventSignUpForm (){
    const classes = useStyles();
    const [values, setValues] = React.useState({
        ticketType: 'Visitor',
    });

    function handleClick() {
        console.log('hey')
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
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
                            <Grid item xs={12}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Address</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} style={{width: '40em'}}/>
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Number of Tickets</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" required={true} type="number" max="5"/>
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                    <FormControl>
                                        <TextField
                                            required={true}
                                            id="standard-select-currency"
                                            select
                                            className={classes.textField}
                                            value={values.ticketType}
                                            onChange={handleChange('ticketType')}
                                            SelectProps={{
                                                MenuProps: {
                                                    className: classes.menu,
                                                },
                                            }}
                                            helperText="Please select your ticket"
                                            margin="normal"
                                        >
                                            {ticketTypes.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input" style={{ marginLeft: "0.5em" }}>Additional Comments</InputLabel>
                                    <OutlinedInput id="my-input" aria-describedby="my-helper-text" required={true} style={{width: '40em', height: '10em'}}/>
                                    <FormHelperText id="my-helper-text">Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" onClick={handleClick} style={{ marginTop: '-1em', position: 'relative', right: '-39em' }} className={classes.button}>
                                    Submit
                        </Button>
                            </Grid>
                        </Grid>
                    </FormGroup>
                </Grid>
            </>
        )
}
