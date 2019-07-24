import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        color: '#fffffa',
    },
    input: {
        display: 'none',
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: '#05668d',
            color: '#fefcfd',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function AboutMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const classes = useStyles()
    return (
        <>
        <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            About
        </Button>
        <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
                <Link to="/our-company" style={{ color: '#2d3142', textDecorationLine: 'none' }}> <StyledMenuItem onClick={handleClose} className={classes.link}>Our Company</StyledMenuItem></Link>
                <Link to="/our-team" style={{ color: '#2d3142', textDecorationLine: 'none' }}><StyledMenuItem onClick={handleClose} className={classes.link}>Our Team</StyledMenuItem></Link>
                <Link to="/faq" style={{ color: '#2d3142', textDecorationLine: 'none' }}><StyledMenuItem onClick={handleClose} className={classes.link}>FAQ</StyledMenuItem></Link>
        </StyledMenu>
    </>
    )
}

