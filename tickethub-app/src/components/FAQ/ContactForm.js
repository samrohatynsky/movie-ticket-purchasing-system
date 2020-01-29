import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import MovieIcon from '@material-ui/icons/Movie';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import { amber, green } from '@material-ui/core/colors';
import {CircularProgress} from "@material-ui/core";

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
  button: {
    color: "#000000",
    width: '18%',
    marginLeft: '8.5%',
    marginRight: '6%',
    marginTop: '10px',
  },
}));


export default function ContactForm(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ open: true, ...newState });
    sleep(1000);
    sendThru();
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  function sendThru() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("content").value = "";
  }

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} raised>
        <Typography variant="button" color="primary" component="h4" style={{padding: '20px 20px 7px 25px', color: 'black'}}>
          Contact Us
        </Typography>
        <Divider/>
        <Grid container spacing={3} style={{padding: '20px'}}>
          <Grid item xs={12} md={6}>
            <TextField required id="name" label="Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="email" label="Email"  variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField required id="subject" label="Message Subject"  variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField id="content" label="Message Content"  variant="filled" fullWidth multiline rows="8" />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button style={{border: "1px solid #000000",}} onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>SEND</Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              key={`${vertical},${horizontal}`}
              open={open}
              onClose={handleClose}
              autoHideDuration={4000}
              message={<span id="message-id" >Successfully sent message!</span>}
            />
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
}
