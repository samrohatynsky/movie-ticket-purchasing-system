import React, {useState} from 'react';
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
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';

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
  button1: {
    backgroundColor: ({ highlight }) => highlight === 'DEBIT' ? "#949494" : null,
    width: '18%',
    marginLeft: '17%',
    marginRight: '6%',
    marginTop: '10px',
  },
  button2: {
    backgroundColor: ({ highlight }) => highlight === 'VISA' ? "#949494" : null,
    width: '18%',
    marginLeft: '20%',
    marginRight: '6%',
    marginTop: '10px',
  },
}));

export default function Payments(props) {
  const [highlight, setHighlight] = useState('');  // VISA, DEBIT, ''
  const classes = useStyles({ highlight });

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} raised>
        <Typography variant="button" color="primary" component="h4" style={{padding: '20px 20px 7px 25px', color: 'black'}}>
          Payment Details
        </Typography>
        <Divider/>
        <div className="btn-group" style={{width: '100%', }}>
          <Button variant="outlined" className={classes.button1} onClick={() => setHighlight('DEBIT')}>
            Debit
          </Button>
          <Button variant="outlined" className={classes.button2} onClick={() => setHighlight('VISA')}>
            Credit
          </Button>
        </div>
        <Grid container spacing={3} style={{padding: '20px'}}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Card number"  variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date"  variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              variant="filled"
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
}

