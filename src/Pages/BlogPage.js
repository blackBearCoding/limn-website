import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import BlogItem from '../MiscComponents/BlogItem'

export default class BlogPage extends Component {
    render() {
        return (
            <Grid type="row" container style={{marginTop: '1em'}} justify="space-around" alignItems="flex-start">
                <Grid item xs={2} style={{ backgroundColor: '#f06449', color: '#fefcfd', padding: '0.75em'}}>
                    <Typography variant="h2">
                            Blog
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: '1.5em', marginTop: '1em' }}>
                            The cat was chasing the mouse play time, yet bite nose of your human. Leave fur on owners clothes bleghbleghvomit my furball really tie the room together steal the warm chair right after you get up, so hiss and stare at nothing then run suddenly away wake up human for food at 4am meow for food, then when human fills food dish, take a few bites of food and continue meowing for chase the pig around the house. Check cat door for ambush 10 times before coming in make it to the carpet before i vomit mmmmmm. Lick the curtain just to be annoying. Always hungry hit you unexpectedly hunt by meowing loudly at 5am next to human slave food dispenser fall asleep on the washing machine, or roll over and sun my belly so poop in litter box, scratch the walls or i like frogs and 0 gravity.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <BlogItem />
                    <BlogItem />
                </Grid>
                <Grid item xs={3}>
                    <BlogItem />
                    <BlogItem />
                </Grid>
                <Grid item xs={3}>
                    <BlogItem />
                    <BlogItem />
                </Grid>
            </Grid>
        )
    }
}
