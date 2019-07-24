import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import denverIndie from '../assets/2019DenverIndieGameExpo-fb.jpg';
import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
    card: {
        maxWidth: 400,
        marginTop: '1em'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#2d3142',
    },
});

class EventItem extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            J
            </Avatar>
                    }
                    action={
                        <IconButton>
                            <DoneIcon />
                        </IconButton>
                    }
                    title="Denver Indie Games Expo"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={denverIndie}
                    title="Denver Indie Game Expo"
                />
                <CardContent>
                    <Typography component="p">
                        The cat was chasing the mouse play time, yet bite nose of your human. Leave fur on owners clothes bleghbleghvomit my furball really tie the room together steal the warm chair right after you get up, so hiss and stare at nothing then run suddenly away wake up human for food at 4am meow for food
          </Typography>
                </CardContent>
            </Card>
        );
    }
}

EventItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventItem);
