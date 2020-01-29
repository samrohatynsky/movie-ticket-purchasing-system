import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    height: '100%',
  },
  card:{
    backgroundColor: "#ffa337",
    width: '100%',
    height: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick = (value) => {
    if (value === 1){
      setOpen1(!open1);
    }
    if (value === 2){
      setOpen2(!open2);
    }
    if (value === 3){
      setOpen3(!open3);
    }
    if (value === 4){
      setOpen4(!open4);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card} raised>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Frequently Asked Questions
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={() => handleClick(1)}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Why is my desired movie not available?" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Here at TicketHub, we try our best to offer the latest movies
                selections. If there is a movie that you desire and is not available on our website, feel free to send
                us a message using the contact form found at the bottom and we shall try our best!" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick(2)}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="I would like a refund" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Currently, we do not process refunds at TicketHub. Please contact the theater
                location you purchased the ticket from, and they will be able to further assist you." />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick(3)}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="I purchased a movie ticket but did not receive an email" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="We ask that you allow at least 30 minutes for the receipt confirmation to be emailed
                to your account. If you still have not received an email, please send us a message with the confirmation number
                 to be able to further assist you." />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleClick(4)}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="I really like this website, how can I apply to work for TicketHub?" />
            {open4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Thanks for sharing your interest in joining the team! We are currently not accepting
                 any applications at the moment. Keep an eye out for a Careers link in our navigation bar as we expect
                 to grow the team soon." />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Card>
    </Paper>
  );
}