import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import FormGroup from '@material-ui/core/FormGroup'
import {makeStyles} from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    button: {
        color: '#fefcfd',
        backgroundColor: '#05668d',
        '&:hover': {
            backgroundColor: '#fefcfd',
            color: '#05668d'
        }
    }
}))

export default function ContactPage () {
    const classes = useStyles()
    function handleClick () {
        console.log('hey')
    }
        return (
            <FormGroup>
                <Grid container spacing={4} justify="center">
                    <Grid item span={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">First Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" required={true}/>
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item span={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Last Name</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" required={true}/>
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item span={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" required={true} type='email'/>
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item span={6}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" required={true} type='tel'/>
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item span={12}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Address</InputLabel>
                            <Input style={{width:'22.25em'}} id="my-input" aria-describedby="my-helper-text" required={true} />
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item span={12}>
                        <FormControl>
                            <InputLabel style={{marginLeft:"0.5em"}} htmlFor="my-input">Message</InputLabel>
                            <OutlinedInput style={{ width: '22.25em', height: '20em', marginTop: '1em' }} id="my-input" aria-describedby="my-helper-text" required={true} />
                            <FormHelperText id="my-helper-text">Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justify="center">
                    <Grid item span={12}>
                        <Button variant="outlined" onClick={handleClick} style={{ marginTop: '-1em', position: 'relative', right: '-9.5em'}} className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </FormGroup>
        )
}
