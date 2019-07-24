import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import AboutMenu from '../Menus/AboutMenu'
import DiscoverMenu from '../Menus/DiscoverMenu'
import SocialMediaMenu from '../Menus/SocialMediaMenu'
import Button from '@material-ui/core/Button'
import logo from '../assets/limnlogo.png'
import './HeaderBar.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        color: '#fffffa'
    },
    input: {
        display: 'none',
    },
}));

export default function HeaderBar() {
    const classes = useStyles()
        return (
          <Box className="header">
              <img src={logo} alt="Limn Interactive logo" className="logo"></img>
                <Button className={classes.button}><Link to="/" style={{ color: '#fefcfd', textDecorationLine: 'none'}}>Home</Link></Button>
              <AboutMenu />
              <DiscoverMenu />
              <SocialMediaMenu />
                <Button className={classes.button}><Link to="/jobs" style={{ color: '#fefcfd', textDecorationLine: 'none' }}>Jobs</Link></Button>
                <Button className={classes.button}><Link to="/contact" style={{ color: '#fefcfd', textDecorationLine: 'none' }}>Contact</Link></Button>
          </Box>
        )
    
}
