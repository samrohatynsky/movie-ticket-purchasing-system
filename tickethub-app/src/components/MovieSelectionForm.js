import 'date-fns';

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography';

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Jposter from "../ui/j_poster.jpg";
import LOTR_P from "../ui/lotr_poster.jpg";
import AIW from "../ui/aiw_poster.jpg";
import WW from "../ui/ww.jpg";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Paper from '@material-ui/core/Paper';
import SuggestionSearchBox from '../components/SuggestionSearchBox.js';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
        backgroundColor:"white"
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },

    avatar: {
        margin: 10
    },

    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "200%",
    },

    textHeadings: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "300%",
    },

    textSubHeading: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "200%",
    },

    boxOutline: {
        margin: "2% 0 10% 10%",
        padding: theme.spacing(4),
        backgroundColor: "white",
        maxWidth: "80%",
        color: theme.palette.text.secondary,
        border: "2px solid rgb(100,100,100)",
        justifyContent: "center",
        justifySelf: "center",
        borderRadius: "15px"
    },

    gridContainer: {
        justifyContent: "center"
    },
    datePicker: {
        margin: 6
    },

    divider: {
        width:"100%",
        height: "1px",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
       // border: "2px dotted rgb(100,100,100)",
    },
}));

const StyledMenuItem = withStyles(theme => ({
    root: {

        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem);

export default function MovieSelectionForm() {
    const classes = useStyles();
    const [movieId, setMovieId] = React.useState("");
    const [timeId, setTimeId] = React.useState("");
    const [theaterId, setTheaterId] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-14T21:11:54'));

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleMovieChange = event => {
        var val = event.target.value;
        setMovieId(val);
    };
    const handleTheaterChange = event => {
        var val = event.target.value;
        setTheaterId(val);
    };
    const handleTimeChange = event => {
        var val = event.target.value;
        setTimeId(val);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Container color="text.primary" clone className={classes.boxOutline}>
                <Grid container direction="col" spacing={1} justify="center" alignItems="center">
                    <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <Typography variant="h2" component="h2" className={classes.textHeadings}>
                                Step 1
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h2" component="h2" className={classes.textHeadings}>
                                Step 2
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h2" component="h2" className={classes.textHeadings}>
                                Step 3
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider className={classes.divider}/>

                    <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={inputLabel} id="movie_select_dropdown_Label">
                                    Select Movie
                                </InputLabel>
                                <Select
                                    labelId="movie_select_dropdow_Label"
                                    id="movie_select_dropdown"
                                    value={movieId}
                                    onChange={handleMovieChange}>

                                    <StyledMenuItem value={1}>
                                        <Avatar
                                            variant="square"
                                            alt="avengers"
                                            src={AIW}
                                            className={classes.bigAvatar}
                                        />
                                        Avengers: Infinity War
                                    </StyledMenuItem>

                                    <StyledMenuItem value={2}>
                                        <Avatar
                                            variant="square"
                                            alt="lord of the rings"
                                            src={LOTR_P}
                                            className={classes.bigAvatar}
                                        />
                                        Lord Of The Rings
                                    </StyledMenuItem>

                                    <StyledMenuItem value={3}>
                                        <Avatar
                                            variant="square"
                                            alt="joker"
                                            src={Jposter}
                                            className={classes.bigAvatar}
                                        />
                                        Joker
                                    </StyledMenuItem>

                                    <StyledMenuItem value={4}>
                                        <Avatar
                                            variant="square"
                                            alt="joker"
                                            src={WW}
                                            className={classes.bigAvatar}
                                        />
                                        Wonder Woman
                                    </StyledMenuItem>
                                </Select>
                            </FormControl>
                        </Grid>



                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        id="date-picker-inline"
                                        label="Select Date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        className = {classes.datePicker}
                                    />
                                </MuiPickersUtilsProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={inputLabel} id="select-theater-label">
                                    Select Theater
                                </InputLabel>
                                <Select
                                    labelId="select-theater-label"
                                    id="select-theater-id"
                                    value={theaterId}
                                    onChange={handleTheaterChange}
                                >
                                    <MenuItem value={1}>St. Vital Cineplex</MenuItem>
                                    <MenuItem value={2}>Polo Park Cineplex</MenuItem>
                                    <MenuItem value={3}>Theater 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" spacing={0} justify="center" alignItems="center">
                        <Grid item xs={1}>
                            <Divider className={classes.divider}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h2" component="h2" className={classes.textSubHeading}>
                                OR
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Divider className={classes.divider}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h2" component="h2" className={classes.textSubHeading}>
                                OR
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Divider className={classes.divider}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography variant="h2" component="h2" className={classes.textSubHeading}>
                                OR
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Divider className={classes.divider}/>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                        <Grid item xs={4}>
                            <SuggestionSearchBox />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl className={classes.formControl}>
                                <InputLabel ref={inputLabel} id="demo-simple-select-filled-label">
                                    Select Time
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={timeId}
                                    onChange={handleTimeChange}
                                >
                                    <MenuItem value={1}>3:30 PM</MenuItem>
                                    <MenuItem value={2}>7:00 PM</MenuItem>
                                    <MenuItem value={3}>8:30 PM</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>Use Location</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
