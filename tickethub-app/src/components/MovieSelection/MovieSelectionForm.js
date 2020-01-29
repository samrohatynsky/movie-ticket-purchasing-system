import 'date-fns';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography';

import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import Jposter from "../../ui/movies/j_poster.jpg";
import LOTR_P from "../../ui/movies/lotr_poster.jpg";
import AIW from "../../ui/movies/aiw_poster.jpg";
import WW from "../../ui/movies/ww.jpg";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';

import fordvferrari from "../../ui/fordvferrari.jpg";
import joker from "../../ui/joker.jpg";
import doctorsleep from "../../ui/doctorsleep.jpg";
import terminator from "../../ui/terminator.jpg";
import charliesangels from "../../ui/charliesangels.jpg";
import zombieland from "../../ui/zombieland.jpg";
import midway from "../../ui/midway.jpg";
import lastchristmas from "../../ui/lastchristmas.jpg";
import maleficent from "../../ui/maleficent.jpg";
import SuggestionSearchBox from './SuggestionSearchBox.js';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {Link} from "react-router-dom";
import GetMovieData from "../MovieData";
import GetTheater from "../TheaterData";

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
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "200%",
    },

    textHeadings: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "300%",
    },

    textSubHeading: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
        fontSize: "100%",
    },

    button: {
        margin: theme.spacing(1),
        textAlign: "center",
        float: "center",
        minWidth: "100%",
    },

    nextButton: {
        margin: theme.spacing(1),
        float: "right",
        backgroundColor: ({ disabled }) => disabled === false ? "#009412" : null,
    },

    boxOutline: {
        margin: "2% 0 4% 10%",
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
        justifyContent: "center",
        alignItems:"center",
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

export default function MovieSelectionForm(props) {
    const classes = useStyles();
    const [movieId, setMovieId] = React.useState("");
    const [timeId, setTimeId] = React.useState("");
    const [theaterId, setTheaterId] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-14T21:11:54'));
    const [openDatePicker, setOpenDatePicker] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const [movieSelected, setMovieSelected] = React.useState(true);
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleMovieChange = event => {
        var val = event.target.value;
        setMovieId(val);
        props.handleMovieFormChanged(event.target.value);
        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };

    const handleMovieChange2 = index => {
        setMovieId(index);
        props.handleMovieFormChanged(index);
        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };

    const handleTheaterChange = event => {
        var val = event.target.value;
        setTheaterId(val);
        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };
    const handleTimeChange = event => {
        var val = event.target.value;
        setTimeId(val);
        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };

    const handleDateChange = date => {
        setSelectedDate(date);
        setOpenDatePicker(false);

        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };

    const handleLocationClick = location => {
        if (window.confirm("Allow TicketHub to access your current location?")) {
            setTheaterId('1');
        } else {

        }
        if(movieId !== "" && timeId !== "" && theaterId !== ""){
            setDisabled(false);
        }
    };

    const getDisabled = () => {
        if((movieId === "" && props.homeNullValue())){
            return true;
        }
        if(timeId === ""){
            return true;
        }
        if(theaterId === ""){
            return true;
        } else {
            return false;
        }
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
                            <FormControl className={classes.formControl} disabled={false}>
                                <InputLabel ref={inputLabel} id="movie_select_dropdown_Label">
                                    Select Movie
                                </InputLabel>
                                <Select
                                    labelId="movie_select_dropdow_Label"
                                    id="movie_select_dropdown"
                                    value={props.selectedMovieFromSlider}
                                    onChange={handleMovieChange}>

                                    <StyledMenuItem value={0}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(0).title}
                                            src={GetMovieData(0).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(0).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={1}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(1).title}
                                            src={GetMovieData(1).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(1).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={2}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(2).title}
                                            src={GetMovieData(2).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(2).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={3}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(3).title}
                                            src={GetMovieData(3).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(3).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={4}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(4).title}
                                            src={GetMovieData(4).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(4).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={5}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(5).title}
                                            src={GetMovieData(5).img}
                                            className={classes.bigAvatar}/>
                                        {GetMovieData(5).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={6}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(6).title}
                                            src={GetMovieData(6).img}
                                            className={classes.bigAvatar}/>
                                        {GetMovieData(6).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={7}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(7).title}
                                            src={GetMovieData(7).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(7).title}
                                    </StyledMenuItem>

                                    <StyledMenuItem value={8}>
                                        <Avatar
                                            variant="square"
                                            alt={GetMovieData(8).title}
                                            src={GetMovieData(8).img}
                                            className={classes.bigAvatar}
                                        />
                                        {GetMovieData(8).title}
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
                                        onClick = {() => setOpenDatePicker(true)}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        className = {classes.datePicker}
                                        open = {openDatePicker}
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
                                    <MenuItem value={1}>{GetTheater(0).name}</MenuItem>
                                    <MenuItem value={2}>{GetTheater(1).name}</MenuItem>
                                    <MenuItem value={3}>{GetTheater(2).name}</MenuItem>
                                    <MenuItem value={4}>{GetTheater(3).name}</MenuItem>
                                    <MenuItem value={5}>{GetTheater(4).name}</MenuItem>
                                    <MenuItem value={6}>{GetTheater(5).name}</MenuItem>
                                    <MenuItem value={7}>{GetTheater(6).name}</MenuItem>
                                    <MenuItem value={8}>{GetTheater(7).name}</MenuItem>
                                    <MenuItem value={9}>{GetTheater(8).name}</MenuItem>
                                    <MenuItem value={10}>{GetTheater(9).name}</MenuItem>
                                    <MenuItem value={11}>{GetTheater(10).name}</MenuItem>
                                    <MenuItem value={12}>{GetTheater(11).name}</MenuItem>
                                    <MenuItem value={12}>{GetTheater(12).name}</MenuItem>
                                    <MenuItem value={14}>{GetTheater(13).name}</MenuItem>
                                    <MenuItem value={15}>{GetTheater(14).name}</MenuItem>
                                    <MenuItem value={16}>{GetTheater(15).name}</MenuItem>
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
                                AND
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
                            <SuggestionSearchBox initialValue = {props.selectedMovieFromSlider} handleChange = {value => handleMovieChange2(value)}/>
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
                                    <MenuItem value={1}>3:00 PM</MenuItem>
                                    <MenuItem value={2}>6:30 PM</MenuItem>
                                    <MenuItem value={3}>8:00 PM</MenuItem>
                                    <MenuItem value={4}>10:00 PM</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} className={classes.gridContainer}>
                            <Button variant="outlined" onClick={handleLocationClick} className={classes.button}>
                                Use Location
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" spacing={0} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to={{
                                pathname: '/seat',
                                state: {
                                    selectedMovieId: props.selectedMovieFromSlider,
                                    selectedDate: {selectedDate},
                                    selectedTime: {timeId},
                                    selectedTheater: GetTheater(theaterId-1),
                                }
                            }}>
                                <Button disabled={getDisabled()} variant="outlined" className={classes.nextButton}>
                                    Next
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
