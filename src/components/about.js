import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScratchCardSection from './scratchsection';
import 'typeface-roboto';

const useStyles = makeStyles((theme)=>({

    root:{
        height:'auto',
        marginTop:'5%',
        flexGrow:1,
        overflow:'hidden'
    },
    paper:{
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        textAlign:'center',
        color:'white',
        background:'linear-gradient(to right, #d38312, #a83279)',
        fontFamily:'archia',
    },
    paper2:{
        padding:theme.spacing(2),
        margin:'auto',
        textAlign:'center',
        maxWidth:900,
        background: 'linear-gradient(to right, #d38312, #a83279)',
        fontFamily:'archia',
        color:'white',
    },
    image:{
        width:250,
        height:250,
    },
    img:{
        margin:'auto',
        display:'block',
        maxWidth:'100%',
        maxHeight:'100%',
    },
    blockquote:{
        padding:'10px',
        textAlign:'center',
        opacity:0.65,
    },
    footer:{
        textAlign:'right',
        paddingRight:'20%',
    }

}));


export default function About(){
    const classes = useStyles();

    return(

        <div className={classes.root}>
            <Grid container spacing={5} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                       <Typography variant="h5" gutterBottom>
                              I AM ...
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={10}>
                         <ScratchCardSection />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={12} className={classes.paper2}>
                        <Typography variant="body1" gutterBottom>
                            <b>Just Kidding!!!! I am Akhilesh. Currently pursuing my <b><i>Software Engineering in PSG College of Technology.</i></b><br />
                            I am a Full Stack Developer. <i>(Whisphers)...</i> Full Stack Development is real...
                            <br />
                            <div className={classes.blockquote}>
                                <i><b>"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."<br/>
                                    <div className={classes.footer}>
                                        -Not me    
                                    </div>    
                                </b></i>
                            </div>
                           I am a Nerd and <br />
                           <div className={classes.blockquote}>
                            <i><b>"Not having a life means you get to love things with a passion and nobody bothers you about it."   
                                <div className={classes.footer}>
                                    -Not me
                                </div>
                            </b></i>
                           </div>
                           </b>
                        </Typography>
                    </Paper>
                </Grid> 
            </Grid>
        </div>

    )
}