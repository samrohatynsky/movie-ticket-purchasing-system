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
import Jposter from "../ui/movies/j_poster.jpg";
import LOTR_P from "../ui/movies/lotr_poster.jpg";
import AIW from "../ui/movies/aiw_poster.jpg";
import WW from "../ui/movies/ww.jpg";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Paper from '@material-ui/core/Paper';
import SuggestionSearchBox from './MovieSelection/SuggestionSearchBox.js';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import fordvferrari from "../ui/fordvferrari.jpg";
import joker from "../ui/joker.jpg";
import doctorsleep from "../ui/doctorsleep.jpg";
import terminator from "../ui/terminator.jpg";
import charliesangels from "../ui/charliesangels.jpg";
import zombieland from "../ui/zombieland.jpg";
import midway from "../ui/midway.jpg";
import lastchristmas from "../ui/lastchristmas.jpg";
import maleficent from "../ui/maleficent.jpg";
import Modal from "@material-ui/core/Modal";

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

    imageTiles: {
        width: "80%",
        height: "80%",
    },

    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
        fontSize: "100%",
    },

    button: {
        margin: theme.spacing(1),
        justifySelf: "center",
    },
    modalButton: {
        position: "absolute",
        right: "10px",
        bottom: "10px",
        margin: theme.spacing(1),
        justifySelf: "center",
    },

    modalMovieInfo: {
        paddingBottom: theme.spacing(1),
        margin: theme.spacing(1),
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

    movieTile: {
        margin: "2% 0 10% 10%",
        padding: theme.spacing(4),
        maxWidth: "80%",
        color: theme.palette.text.secondary,
        border: "2px solid rgb(100,100,100)",
        justifyContent: "center",
        justifySelf: "center",
        borderRadius: "15px"
    },

    divider: {
        width:"100%",
        height: "1px",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        // border: "2px dotted rgb(100,100,100)",
    },
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const tileData = [
    {
        img: fordvferrari,
        title: 'Ford v Ferrari',
        director: 'Mangold',
        description: 'American automotive designer Carroll Shelby and fearless British race car driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary vehicle for the Ford Motor Co.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: joker,
        title: 'Joker',
        director: 'Phillips',
        description: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he\'s part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: doctorsleep,
        title: 'Doctor Sleep',
        director: 'Flanagan',
        description: 'Struggling with alcoholism, Dan Torrance remains traumatized by the sinister events that occurred at the Overlook Hotel when he was a child. His hope for a peaceful existence soon becomes shattered when he meets Abra, a teen who shares his extrasensory gift of the "shine." Together, they form an unlikely alliance to battle the True Knot, a cult whose members try to feed off the shine of innocents to become immortal.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: terminator,
        title: 'Terminator: Dark Fate',
        director: 'Miller',
        description: 'In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: charliesangels,
        title: "Charlie's Angels",
        director: 'Banks',
        description: 'A brilliant scientist invents Calisto -- a sustainable energy source that will revolutionize the way people use power. But when Calisto falls into the wrong hands, the Angels must retrieve it before it can be used as a weapon of mass destruction.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: zombieland,
        title: "Zombieland: Double Tap",
        director: 'Fleischer',
        description: 'Zombie slayers Tallahassee, Columbus, Wic-hita and Little Rock leave the confines of the White House to travel to Graceland in Memphis, Tenn. Along the way, they encounter other post-apocalyptic warriors and a group of survivors who find refuge in a commune. The scrappy fighters must now rely on their wits and weapons more than ever as they soon find themselves in a relentless battle against smarter, faster and seemingly indestructible zombies.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: midway,
        title: "Midway",
        director: 'Emmerich',
        description: 'On Dec. 7, 1941, Japanese forces launch a devastating attack on Pearl Harbor, the U.S. naval base in Hawaii. Six months later, the Battle of Midway commences on June 4, 1942, as the Japanese navy once again plans a strike against American ships in the Pacific. For the next three days, the U.S. Navy and a squad of brave fighter pilots engage the enemy in one of the most important and decisive battles of World War II.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: lastchristmas,
        title: 'Last Christmas',
        director: 'Feig',
        description: 'Nothing seems to go right for young Kate, a frustrated Londoner who works as an elf in a year-round Christmas shop. But things soon take a turn for the better when she meets Tom -- a handsome charmer who seems too good to be true. As the city transforms into the most wonderful time of the year, Tom and Kate\'s growing attraction turns into the best gift of all -- a Yuletide romance.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
    {
        img: maleficent,
        title: 'Maleficent: Mistress of Evil',
        director: 'Ronning',
        description: 'Maleficent travels to a grand old castle to celebrate young Aurora\'s upcoming wedding to Prince Phillip. While there, she meets Aurora\'s future mother-in-law -- a conniving queen who hatches a devious plot to destroy the land\'s fairies. Hoping to stop her, Maleficent joins forces with a seasoned warrior and a group of outcasts to battle the queen and her powerful army.',
        showtimes:['3:00 PM','6:30 PM', '8:00 PM', '10:00 PM'],
    },
];

export default function MoviesPage(){
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [movieId, setMovieId] = React.useState(0);
    const handleOpen = (i) => {
        setMovieId(i);
        setOpen(true);
        console.log("Clicked: "+ i)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getMovieTile = (i) => {
        return (
          <div className={classes.movieTile}>
              <img src={tileData[i].img} alt={tileData[i].title} className= {classes.imageTiles} onClick={() => handleOpen(i)}/>
              <Typography variant="h2" component="h2" className={classes.textSubHeading}>
                  {tileData[i].title}
              </Typography>
          </div>
        );
    };

    const getMovieInfo = (i) => {
        return(
        <div>
            <Grid container direction="row">
                <Grid item xs={6}>
                    <img src={tileData[i].img} alt={tileData[i].title}/>
                    <div className={classes.modalMovieInfo}>
                        <h2 id="showtimes">Showtimes:</h2>
                        <h4 id="showtime">+ {tileData[i].showtimes[0]}</h4>
                        <h4 id="showtime">+ {tileData[i].showtimes[1]}</h4>
                        <h4 id="showtime">+ {tileData[i].showtimes[2]}</h4>
                        <h4 id="showtime">+ {tileData[i].showtimes[3]}</h4>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.modalMovieInfo}>
                        <h2 id="simple-modal-title">{tileData[i].title}</h2>
                        <h4 id="modal_director">Directed by: {tileData[i].director}</h4>
                        <p id="simple-modal-description">
                            {tileData[i].description}
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
        );
    }



    return (
        <div>
            <Grid container direction="col" spacing={1} justify="center" alignItems="center">
                <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(0)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(1)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                         {getMovieTile(2)}
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(3)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(4)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(5)}
                    </Grid>
                </Grid>
                <Grid container direction="row" spacing={10} justify="center" alignItems="center">
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(6)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(7)}
                    </Grid>
                    <Grid item xs={3} className={classes.textSubHeading}>
                        {getMovieTile(8)}
                    </Grid>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    {getMovieInfo(movieId)}
                    <Button variant="outlined" className={classes.modalButton} onClick={() => handleClose()}>
                        Close
                    </Button>
                </div>

            </Modal>
        </div>
    );
}