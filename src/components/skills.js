import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RatingCard from './repeatables/card.js'; 


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
        maxWidth: 400,
        textAlign:'center',
        color:'white',
        background:'linear-gradient(to right, #d38312, #a83279)',
        fontFamily:'archia',
    }
}));




export default function Skills(){

        const classes = useStyles();

        return(

            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5">
                        AM I SKILLED?..
                    </Typography>
                </Paper>
                <Grid container
                      spacing={4}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{marginTop:'2%'}}
                >
                    <Grid item md={3} xs={8}>
                        <RatingCard image="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" title="React" rating={4} bk="linear-gradient(to right, #d38312, #a83279)" />
                    </Grid>
                    <Grid item md={3} xs={8}>
                        <RatingCard image="https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" title="NodeJS" rating={3} />
                    </Grid>
                    <Grid item md={3} xs={8}>
                        <RatingCard image="https://pluralsight.imgix.net/paths/python-7be70baaac.png" title="Python" rating={3} />
                    </Grid>
                    <Grid item md={3} xs={8}>
                        <RatingCard image="https://pbs.twimg.com/profile_images/954020529391902720/jW4dnFtA_400x400.jpg" title="Java" rating={3} />
                    </Grid>
                </Grid>
            </div>

        )


}