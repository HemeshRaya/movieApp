import React from 'react';
import Movie from "../Movie/movie.jsx";
import axios from 'axios';
import './movies.css';
import { Link } from "react-router-dom";
// import {useReactTable} from '@tanstack/react-table';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      text:''
    };
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9693f82dbca7a9241324fc089437c245')
      .then((data) => {
        this.setState({ movies: data.data.results })
      });
  }

  getMovie = (poster, movieName) => {
    return <Movie
      poster={poster}
      movieName={movieName} />;
  };

  handleChange = event =>{
    this.setState({ text: event.target.value})
  }

  render() {
    const moviesList = this.state.movies.map((movie) => (
      movie.media_type === 'movie' ?
        this.getMovie(
          movie.poster_path,
          movie.title)
        : this.getMovie(
          movie.poster_path,
          movie.name)
    ));
    
    return (
      <div>
        <div className='header'>
          <div className='trend'>
            Trending Movies
          </div>
          <div className='searchDiv'>
            <input
              type="text"
              name="text"
              placeholder="search movies..."
              onChange={this.handleChange}
              className="bg-white p-2 w-3/4 outline-none searchbar"
            />
            <button type="submit" className="p-2 text-center w-1/4 searchbtn">
            <Link to={`/searchMovie?txt=${this.state.text}`} >Search</Link> 
            </button>
          </div>
        </div>
        <div className='movies-section'>
          {moviesList}
        </div>
      </div>
    );
  }
}

export default Movies;