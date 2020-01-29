import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';

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


export class Home extends React.Component {
    constructor(){
        super();
        this.state = {selectedMovie: -1 , hasNullValue: true};
    }

    handleMovieChanged(index){
        this.setState({selectedMovie: index});
        this.setState({hasNullValue: false});
        console.log("Movie: ",index);
    }

    handleMovieChangedSlider(index){
        this.setState({selectedMovie: index-1});
        this.setState({hasNullValue: false});
        console.log("Movie: ",index);
    }

    isDisabled(){
        return this.state.hasNullValue;
    }

  render() {
    return (
      <div>
        <div>
            <NavBar/>
        </div>
        <div>
          <MovieSelectionForm homeNullValue = {() => this.isDisabled()} selectedMovieFromSlider = {this.state.selectedMovie} handleMovieFormChanged = {(index) => this.handleMovieChanged(index)}/>
        </div>
        <div style={{paddingBottom: '100px'}}>
            &nbsp;
            <Slider handleMovieFormChanged = {(index) => this.handleMovieChangedSlider(index)}/>
        </div>
      </div>
    );
  }
}

export default (Home);