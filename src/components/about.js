import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScratchCardSection from './scratchsection';
import 'typeface-roboto';


const useStyles = makeStyles((theme)=>({

    root:{
        marginTop:'5%',
        flexGrow:1,
    },
    paper:{
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
        textAlign:'center',
        color:'#F4D529',
        backgroundColor:'#6203fc',
        boxShadow:'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
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
            <Grid container spacing={4} direction="column" justify="center" alignItems="center">
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
                                   
                </Grid>
            </Grid>
        </div>

    )

}
