import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MovieSummary from "../components/Checkout/MovieSummary";
import Email from "../components/Checkout/Email";
import Spider from "../ui/movies/spiderman.jpg";
import OrderSummary from "../components/Checkout/OrderSummary";
import Payment from "../components/Checkout/Payment";
import Submit from "../components/Checkout/Submit";

const useStyles = createStyles(theme => ({
  cutoff: {
    padding: '50px 200px 50px 200px',
  },
}));

const classes = useStyles();
const test = {
  name: "Spiderman",
  date: "25/10/2019",
  imageUri: {Spider},
  time: "7:30pm",
  theater: "Silvercity",
  numOfTickets: "2"
};


export class Checkout extends React.Component {

  componentDidMount() {
    console.log(this.props.location.state.movieId);
    console.log(this.props.location.state.price);
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Box style={classes.cutoff}>
          <Grid container spacing={3} style={{marginBottom: '50px'}}>
            <Grid item xs={6}>
              <MovieSummary {...this.props}/>
            </Grid>
            <Grid item xs={6}>
              <Email/>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <OrderSummary {...this.props}/>
            </Grid>
            <Grid item xs={6}>
              <Payment/>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center" alignItems="center" style={{marginTop: '50px'}}>
              <Submit />
          </Grid>
        </Box>
      </div>
    );
  }
}



export default (Checkout);