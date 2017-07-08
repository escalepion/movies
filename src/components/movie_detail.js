import React from 'react';
import { Link } from 'react-router';
import image from '../images/no-image.png';

const MovieDetail = ({movie}) => {
    return(
        <div className="row movie_list_container">
                    <div className="col-md-4 col-xs-4 text-center">
                        <img alt="poster" className="img-responsive movie_list_img" src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : image} />
                    </div>
                    <div className="col-md-8 col-xs-8">
                        <h3>{movie.name ? movie.name : movie.title}</h3>
                        <p><strong>Date :</strong> {movie.release_date}</p>
                        <p><strong>Average Rating:</strong> {movie.vote_average}</p>
                        <p>{movie.overview ? movie.overview : 'No overview to show.Sorry.'}</p>
                        <Link to="/" className="btn btn-danger">Back</Link>
                    </div>
               </div>
    );
}

export default MovieDetail;