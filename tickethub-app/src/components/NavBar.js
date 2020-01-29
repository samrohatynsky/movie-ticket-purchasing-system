import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "../ui/logo.png"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  logo: {
    width: '170px',
    height: '50px',
  },
  button: {
    color: "#FFFFFF",
    border: "1px solid #FFFFFF",
    width: '15%',
    height: 'auto',
    marginStart: '50px',
  },
  button2: {
    color: "#FFFFFF",
    padding: '10px 28px',
  },
  cutoff: {
    paddingLeft: '10%',
    paddingRight: '10%',
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#000000' }} >
      <Toolbar className={classes.cutoff}>
          <Link to="/">
            <img src={Logo} className={classes.logo} />
          </Link>
          <div className="btn-group" style={{width: "100%"}}>
            <Link to="/movies">
              <Button variant="outlined" className={classes.button}>
                Movies
              </Button>
            </Link>
            <Link to="/theaters">
            <Button variant="outlined" className={classes.button}>
              Theaters
            </Button>
            </Link>
            <Link to={"/faq"}>
            <Button variant="outlined" className={classes.button}>
              FAQ
            </Button>
            </Link>
          </div>
          <Button variant="text" className={classes.button2} onClick={() => alert("Feature not currently available")}>
            Francais
          </Button>
      </Toolbar>
    </AppBar>
  );
}
