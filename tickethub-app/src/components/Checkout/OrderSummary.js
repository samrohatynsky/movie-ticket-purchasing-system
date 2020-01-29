import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
    backgroundColor: "#ffa337",
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

function createData(name, value) {
  return { name, value };
}

export default function OrderSummary(props) {
  const classes = useStyles();
  const totalPrice = props.location.state.price.price;
  const tax = ((13/100) * totalPrice).toFixed(2);
  const rows = [
    createData('General', totalPrice),
    createData('Tax', parseFloat(tax)),
    createData('Discount', 0),
  ];

  console.log(props);

  return (
    <Paper className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ORDER SUMMARY</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">${row.value}</TableCell>
            </TableRow>
          ))}
          <TableRow key={'TOTAL'}  style={{backgroundColor: '#7a7a7a'}}>
            <TableCell component="th" scope="row">
              TOTAL
            </TableCell>
            <TableCell align="right">${rows[0].value + rows[1].value - rows[2].value}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

