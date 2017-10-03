import React from 'react';
import image from '../images/no-image.png';
import {Link} from 'react-router';

const MovieListItem = ({movie, tab }) => {
    let url= null;
    if (movie.poster_path) {
       url = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    } else {
       url = image;
    }
    if (movie.media_type !== tab ) {
        return null;
    }
    return (
        <div>
            <div className="row movie_list_container">
                    <div className="col-md-4 col-xs-4 text-center">
                        <img alt="poster" className="img-responsive movie_list_img" src={url} />
                    </div>
                    <div className="col-md-8 col-xs-8">
                        <h3>{movie.name ? movie.name : movie.title}</h3>
                        <p><strong>Date :</strong> {movie.release_date}</p>
                        <p><strong>Average Rating:</strong> {movie.vote_average}</p>
                        <p>{movie.overview ? movie.overview : 'No overview to show.Sorry.'}</p>
                        <Link to={`/show/${movie.media_type}/${movie.id}`} className="btn btn-primary">More</Link>
                    </div>
               </div>
        </div>
    );
}

export default MovieListItem;