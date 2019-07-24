import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import jet from '../assets/jet.jpg'
import scott from '../assets/scott.jpg'

export default class OurTeamPage extends Component {
    render() {
        return (
            <>
               <Grid container>
                   <Grid item span={4}>
                       <img src={jet} alt="Jet Ternlund" style={{width: '30em', margin: '1em'}}></img>
                   </Grid>
                   <Grid item span={4} >
                        <Typography variant="h2" style={{marginTop: '0.5em', marginLeft: '0.25em'}}>
                            Jet Ternlund
                       </Typography>
                        <Typography variant="body1" style={{ width: '21em', margin: '1em', backgroundColor: '#f06449', color: '#fefcfd', padding: '1em'}}>
                           Put toy mouse in food bowl run out of litter box at full speed if it fits i sits demand to be let outside at once, and expect owner to wait for me as i think about it yet proudly present butt to human so groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose i will ruin the couch with my claws, meeeeouw when in doubt, wash or chase ball of string chase laser let me in let me out let me in let me out let me in let me out who broke this door anyway.
                       </Typography>
                   </Grid>
               </Grid>
               <Grid container
               justify="flex-end"
               >
                    <Grid item span={4}>
                        <Typography variant="h2" style={{ marginTop: '0.5em', marginLeft: '0.25em' }}>
                            Scott Emberty
                       </Typography>
                        <Typography variant="body1" style={{ width: '21em', margin: '1em', backgroundColor: '#05668d', color: '#fefcfd', padding: '1em' }}>
                            Put toy mouse in food bowl run out of litter box at full speed if it fits i sits demand to be let outside at once, and expect owner to wait for me as i think about it yet proudly present butt to human so groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose i will ruin the couch with my claws, meeeeouw when in doubt, wash or chase ball of string chase laser let me in let me out let me in let me out let me in let me out who broke this door anyway.
                       </Typography>
                    </Grid>
                    <Grid item span={4}>
                        <img src={scott} alt="Scott Emberty" style={{ width: '30em', margin: '1em' }}></img>
                    </Grid>
               </Grid> 
            </>
        )
    }
}
