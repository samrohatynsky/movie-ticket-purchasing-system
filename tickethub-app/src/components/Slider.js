import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import TileData from '../components/TileData';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    maxWidth: "100%",
    height: 330,
  },
  boxOutline: {
    //margin: "2% 0 10% 10%",
    padding: theme.spacing(3),
    backgroundColor: "white",
    //maxWidth: "80%",
    color: theme.palette.text.secondary,
    border: "2px solid rgb(100,100,100)",
    justifyContent: "center",
    justifySelf: "center",
    borderRadius: "15px",
    },
}));

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography  {...other}>
      <Typography variant="h4" >{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 10,
    padding: theme.spacing(2),
    width: 500,
    height: 160,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Slider(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState("1");

  const handleClickOpen = number => () => {
    setOpen(true);
    setNumber(number)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpen(false);
    window.scrollTo(0,0);
    props.handleMovieFormChanged(number);
  };

  let dataList = []
  for (let i = 1; i < 10; i++) {
    dataList.push(TileData(i.toString()));
  }

  return(
    <div className={classes.root}>
        <Container color="text.primary" clone className={classes.boxOutline}>
              <h1>Featured Movies</h1>
              <GridList className={classes.gridList} cellHeight={300} cellWidth={160} cols={6.5} >
                { dataList.map(tile => (
                  <GridListTile key={tile.number} onClick={handleClickOpen(tile.number)}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                  ))}
              </GridList>

              <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                  {TileData(number).title}
                </DialogTitle>
                <DialogContent dividers>
                  {TileData(number).description}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                  <Button autoFocus onClick={handleSubmit} color="primary">
                    Go to selection form
                  </Button>
                </DialogActions>
              </Dialog>
        </Container>
    </div>
  );
}