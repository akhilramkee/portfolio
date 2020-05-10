import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from 'react-rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function RatingCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={10}>
        <CardMedia
          component="img"
          alt={props.title}
          height="140"
          image={props.image}
          title={props.title}
        />
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            <Rating 
                initialRating = {props.rating}
                readonly
            />
          </Typography>
        </CardContent>
    </Card>
  );
}