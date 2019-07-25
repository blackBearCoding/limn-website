import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    hamburgerMenu: {
        color: '#fefcfd',
        position: 'absolute',
        right: '1em',
        top: '1.5em',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    }
}));

export default function HamburgerMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const links1 = ['/', '/jobs', '/contact']
    const links2 = ['/our-company', '/our-team', '/faq']
    const links3 = ['/blog', '/events', '/gallery', '/games']
    // const links4 = ['/blog', '/events', '/gallery', '/games']

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem>
                    <Typography variant="subtitle1" style={{color: '#05668d'}}>General</Typography>
                </ListItem>
                {['Home', 'Jobs', 'Contact'].map((text, index) => (
                    <Link to={links1[index]} style={{ color: '#2d3142', textDecorationLine: 'none' }}>
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem>
                    <Typography variant="subtitle1" style={{color: '#05668d'}}>About</Typography>
                </ListItem>
                {['Our Company', 'Our Team', 'FAQ'].map((text, index) => (
                    <Link to={links2[index]} style={{ color: '#2d3142', textDecorationLine: 'none' }}>
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />

            <List>
                <ListItem>
                    <Typography variant="subtitle1" style={{color: '#05668d'}}>Discover</Typography>
                </ListItem>
                {['Blog', 'Events', 'Gallery', 'Games'].map((text, index) => (
                    <Link to={links3[index]} style={{ color: '#2d3142', textDecorationLine: 'none' }}>
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />

            <List>
                <ListItem>
                    <Typography variant="subtitle1" style={{color: '#05668d'}}>Social Media</Typography>
                </ListItem>
                {['Facebook', 'Google', 'Instagram', 'Twitter', 'YouTube'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer('right', true)} className={classes.hamburgerMenu}><MenuIcon/></IconButton>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}