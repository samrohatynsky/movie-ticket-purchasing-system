import { Router } from 'react-router-dom';
import React, { Component } from 'react';
import App from './App';
import history from './services/history';


export default class AppProvider extends Component {
  render() {
    return (
        <Router history={history}>
            {<App/>}
        </Router>
    );
  }
}
