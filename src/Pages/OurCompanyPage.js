import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import './OurCompanyPage.css'

export default class OurCompanyPage extends Component {
    render() {
        return (
            <>
                <Grid container justify="space-around" type="row" style={{marginTop: '1em'}}>
                    <Grid item span={4} style={{ backgroundColor: "#f06449", color:"#fefcfd", padding: "1em"}} className="infoSquare">
                        <Typography variant="h2">
                            What we do
                        </Typography>
                        <Typography variant="body1" style={{width: '20em', marginLeft: '0.5em', marginTop: '1em'}}>
                            With over twenty  years experience building multimedia software including games, simulations, websites,  and interactive worlds, our current projects are being built by developers, artists, producers, musicians, testers, and marketing individuals located primarily in the Colorado, USA area.
                        </Typography>
                    </Grid>
                    <Grid item span={4} style={{ backgroundColor: "#05668d", color: "#fefcfd", padding: "1em" }} className="infoSquare">
                        <Typography variant="h2">
                            Why we do it
                        </Typography>
                        <Typography variant="body1" style={{ width: '20em', marginLeft: '0.5em', marginTop: '1em' }}>
                            The majority of titles coming out today are rushed to market in part due to over-run schedules and budgets.  As a result, these titles are often missing critical features that can make a big difference.  We have taken a different approach with a process and tools that allow more polish and testing phases earlier in the development methodology.
                        </Typography>
                    </Grid>
                    <Grid item span={4} style={{ backgroundColor: "#2d3142", color: "#fefcfd", padding: "1em" }} className="infoSquare">
                        <Typography variant="h2">
                            How we do it
                        </Typography>
                        <Typography variant="body1" style={{ width: '20em', marginLeft: '0.5em', marginTop: '1em' }}>
                            Crash against wall but walk away like nothing happened nyan fluffness ahh cucumber! yet chirp at birds but Gate keepers of hell cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers. yet chirp at birds but Gate keepers of hell cat gets stuck in tree firefighters try to get cat down firefighters get stuck.</Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}
