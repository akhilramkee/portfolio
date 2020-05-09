import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Work from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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


export default function Journey(){

    const classes = useStyles();

    return(

        <div className={classes.root}>
            <Grid container spacing={5} direction="column" justify="center" alignItems="center">
                <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom>
                                My Journey...
                            </Typography>
                        </Paper>
                    </Grid>
            </Grid>
            <Grid item xs={12}>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'linear-gradient(to right, #d38312, #a83279)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2020 - present"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<Work />}
                            >
                                <h3 className="vertical-timeline-element-title">Summer Analyst Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle">Goldman Sachs,Bangalore, IN</h4>
                                <p>
                                    Started work with the Global Investment Research Division, Goldman Sachs
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="June 2019 - August 2019"
                                contentStyle={{ background: 'linear-gradient(to right, #d38312, #a83279)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<Work />}
                            >
                                <h3 className="vertical-timeline-element-title">App Development Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle">DatOpsys,Remote</h4>
                                <p>
                                    Helped develop an React Native app for providing news in a shorter span of words
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<Work />}
                            />
                    </VerticalTimeline>
            </Grid>
        </div>
    )

}