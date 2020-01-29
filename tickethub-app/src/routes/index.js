import { Route } from 'react-router-dom';
import React from 'react';
import Home from '../screens/Home';
import Seat from '../screens/Seat';
import Checkout from '../screens/Checkout';
import Movies from "../screens/Movies";
import FAQ from "../screens/FAQ";
import Theatre from "../screens/Theatre/Theatre";

export default () => [
  <Route key="home" exact path="/" component={Home} />,
  <Route key="movies" exact path="/movies" component={Movies} />,
  <Route key="theaters" exact path="/theaters" component={Theatre} />,
  <Route key="seat" exact path="/seat" component={Seat} />,
  <Route key="checkout" exact path="/checkout" component={Checkout} />,
  <Route key="faq" exact path="/faq" component={FAQ} />,
];
