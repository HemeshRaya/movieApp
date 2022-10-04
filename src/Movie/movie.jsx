import * as React from 'react';
import './movie.css';

class Movie extends React.Component{
    
    render(){
        return (
            <div className='movie-card'>
                <div className='imgstyle'>
                    <img alt='movieImage' src={'http://image.tmdb.org/t/p/w500/'+this.props.poster}></img>
                </div>
                <label><b>{this.props.movieName}</b></label>
            </div>
        );
    }
}

export default Movie;
