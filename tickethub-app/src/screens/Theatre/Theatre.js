import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../../components/NavBar';
import TheatrePage from './TheatrePage';

export class Theatre extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <TheatrePage/>
      </div>
    );
  }
}

export default (Theatre);