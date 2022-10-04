import * as React from 'react';
import Movie from "../Movie/movie.jsx";
import './searchMovies.css';
import axios from 'axios';
import { Link } from "react-router-dom";

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        const params = new URLSearchParams(window.location.search);
        console.log(params.get("txt"));
        this.state = {
          movies:[],
          text:params.get("txt")
        };
      }
      getMovie = (poster, movieName) => {
        return <Movie
          poster={poster}
          movieName={movieName} />;
      };
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=9693f82dbca7a9241324fc089437c245&query='+this.state.text)
            .then((data) => {
                console.log(data.data.results);
                this.setState({ movies: data.data.results })
            });
    };
    render() {
        const moviesList = this.state.movies.map((movie) => (
            this.getMovie(
                movie.poster_path,
                movie.title)
          ));
        return (
            <div>
                <div className='searchHeader'>
                    <div>
                        <h2>Searched Results: {this.state.text}</h2>
                    </div>
                    <div>
                        <button type="submit" className="p-2 text-center searchbtn">
                            <Link to="/" >Back</Link> 
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
export default SearchMovie;