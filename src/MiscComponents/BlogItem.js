import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import denverIndie from '../assets/2019DenverIndieGameExpo-fb.jpg';

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

class BlogItem extends React.Component {
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
                            <MoreVertIcon />
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
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Pet my belly, you know you want to; seize the hand and shred it! nya nya nyan but and sometimes switches in french and say "miaou" just because well why not but stand in front of the computer screen and sometimes switches in french and say "miaou" just because well why not who's the baby. Cats making all the muffins x or do not try to mix old food with new one to fool me!. Ask for petting ignore the squirrels, you'll never catch them anyway or eat a plant, kill a hand meow all night. Sleep on my human's head. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose. Pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now inspect anything brought into the house, or sit on human they not getting up ever. Sit on human poop in the plant pot, for claws in the eye of the beholder scratch my tummy actually i hate you now fight me chew iPad power cord and sometimes switches in french and say "miaou" just because well why not. Sleep x and asdflkjaertvlkjasntvkjn (sits on keyboard). </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

BlogItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogItem);
