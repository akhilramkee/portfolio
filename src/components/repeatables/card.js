import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    background:'transparent',
    marginBottom:'10%'
  },
});

export default function RatingCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={10}>
    
    <CardContent style={{marginTop:'5%'}}>
          <Typography variant="body2" color="textPrimary" component="p">
            <Grid container
                  direction="row"
                  alignItems="center"
                  justify="center"
                  spacing={3}
            >
            <Grid items xs={2} spacing={5}>
                <Avatar alt={props.title} src={props.image} />
            </Grid>
              <Rating 
                  initialRating = {props.rating}
                  readonly
              />
            </Grid>
          </Typography>
        </CardContent>
    </Card>
  );
}