import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScratchCardSection from './scratchsection';
import 'typeface-roboto';

const useStyles = makeStyles((theme)=>({

    root:{
        height:'100vh',
        marginTop:'5%',
        flexGrow:1,
    },
    paper:{
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        textAlign:'center',
        color:'white',
        background:'linear-gradient(to right, #d38312, #a83279)',
        fontFamily:'archia',
        border:'2px dashed yellow'
    },
    paper2:{
        padding:theme.spacing(2),
        margin:'auto',
        textAlign:'center',
        maxWidth:900,
        background: 'linear-gradient(to right, #d38312, #a83279)',
        fontFamily:'archia',
        color:'white',
        border:'2px dashed yellow'
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

}));


export default function About(){
    const classes = useStyles();

    return(

        <div className={classes.root}>
            <Grid container spacing={5} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                       <Typography variant="h5" gutterBottom>
                              WHO AM I ( SCRATCH TO FIND OUT )
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={10}>
                         <ScratchCardSection />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={10} className={classes.paper2}>
                        <Typography variant="body1" gutterBottom>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}