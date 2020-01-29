import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Questions from "../components/FAQ/Questions";
import Spider from "../ui/movies/spiderman.jpg";
import OrderSummary from "../components/Checkout/OrderSummary";
import Payment from "../components/Checkout/Payment";
import Submit from "../components/Checkout/Submit";
import ContactForm from "../components/FAQ/ContactForm";

const useStyles = createStyles(theme => ({
  cutoff: {
    padding: '50px 220px 50px 220px',
  },
}));

const classes = useStyles();

export class FAQ extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Box style={classes.cutoff}>
          <Grid container spacing={3}
                justify="center"
                style={{marginBottom: '50px'}}>
            <Grid item xs={9}>
              <Questions />
            </Grid>
          </Grid>
          <Grid container spacing={3}
                justify="center"
                style={{marginBottom: '50px'}}>
            <Grid item xs={9}>
              <ContactForm />
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}



export default (FAQ);