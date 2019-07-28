import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../assets/zenpathz3.jpg'
import img2 from '../assets/zenpathz4.jpg'
import img3 from '../assets/zenpathz5.jpg'


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        minHeight: 500,
        margin: '1em'
    },
    media: {
        height: 200,
    },
    actionArea: {
        '&:hover': {
            pointerEvents: 'none'
        }
    }
});

export default function CompanyItem() {
    const classes = useStyles();

    return (
    <div className="card-holder">
            <Card className={classes.card} style={{ backgroundColor: '#f06449', color: '#fefcfd' }}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia
                    className={classes.media}
                    image={img2}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        What we do
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#fefcfd' }}>
                        With over twenty  years experience building multimedia software including games, simulations, websites,  and interactive worlds, our current projects are being built by developers, artists, producers, musicians, testers, and marketing individuals located primarily in the Colorado, USA area.
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button size="small" color="primary" style={{ color: '#fefcfd' }}>
                    Learn More
        </Button>
            </CardActions>
        </Card>
            <Card className={classes.card} style={{ backgroundColor: '#2d3142', color: '#fefcfd'  }}>
                <CardActionArea className={classes.actionArea} >
                    <CardMedia
                        className={classes.media}
                        image={img1}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Why we do it
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#fefcfd' }}>
                            The majority of titles coming out today are rushed to market in part due to over-run schedules and budgets.  As a result, these titles are often missing critical features that can make a big difference.  We have taken a different approach with a process and tools that allow more polish and testing phases earlier in the development methodology.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{ color: '#fefcfd' }}>
                        Learn More
        </Button>
                </CardActions>
            </Card>
            <Card className={classes.card} style={{ backgroundColor: '#05668d', color: '#fefcfd' }}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        className={classes.media}
                        image={img3}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            How we do it
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: '#fefcfd' }}>
                            Crash against wall but walk away like nothing happened nyan fluffness ahh cucumber! yet chirp at birds but Gate keepers of hell cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers. yet chirp at birds but Gate keepers of hell cat gets stuck in tree firefighters try to get cat down firefighters get stuck.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" style={{ color: '#fefcfd' }}>
                        Learn More
        </Button>
                </CardActions>
            </Card>
    </div>
    );
}