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
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
  },
  card:{
    backgroundColor: "#ffa337",
    width: '100%',
    height: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
}));

export default function Email(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} raised>
        <Typography variant="button" color="primary" component="h4" style={{padding: '20px 20px 7px 25px', color: 'black'}}>
              Checkout as Guest
        </Typography>
        <Divider/>
        <TextField
          id="email"
          className={classes.textField}
          label="Email"
          margin="normal"
          variant="filled"
          style={{marginLeft: '20px'}}
        />
        <TextField
          id="confirm-email"
          className={classes.textField}
          label="Confirm Email"
          margin="normal"
          variant="filled"
          style={{marginLeft: '20px'}}
        />
      </Card>
    </Paper>
  );
}

