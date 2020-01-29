import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import MovieIcon from '@material-ui/icons/Movie';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GetMovieData from "../MovieData";

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
  },
  card:{
    backgroundColor: "#ffa337",
    width: '100%',
    height: '100%',
  }
}));

export default function MovieSummary(props) {
  const classes = useStyles();
  const test = props.location.state.seats.selected.map((seat, index) => index + 1 !== props.location.state.seats.selected.length
    ? seat.name + ', ' : seat.name);

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} raised>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <MovieIcon />
            </Avatar>
          }
          title={GetMovieData(props.location.state.movieId).title}
        />
        <CardMedia
          className={classes.media}
          src={props.imageUri}
        />
        <CardContent>
          <Typography variant="button" color="textPrimary" component="p">
            Date: {props.location.state.date.selectedDate.toString().split(" ")[0] + " " +
                   props.location.state.date.selectedDate.toString().split(" ")[1] + " " +
                   props.location.state.date.selectedDate.toString().split(" ")[2] + " " +
                   props.location.state.date.selectedDate.toString().split(" ")[3]}
          </Typography>
          <Typography variant="button" color="textPrimary" component="p">
            Time: {props.location.state.time.timeId}
          </Typography>
          <Typography variant="button" color="textPrimary" component="p">
            Theater: {props.location.state.theater}
          </Typography>
          <Typography variant="button" color="textPrimary" component="p">
            Total Tickets: {props.location.state.seats.selected.length}
          </Typography>
          <Typography variant="button" color="textPrimary" component="p">
            Seats: {test}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

