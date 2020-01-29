import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import MovieSelectionForm from "../components/MovieSelection/MovieSelectionForm";
import MoviesPage from "../components/MoviesPage";
const useStyles = createStyles(theme => ({
    root: {
        display: 'flex',
    },

    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export class Movies extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MoviesPage />
            </div>
        );
    }
}

export default (Movies);