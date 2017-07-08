import React, { Component } from 'react';
// import { Link } from 'react-router';
import {connect} from 'react-redux';
import {fetchOneMovie, clearOneFetchMovie} from '../actions/';


import MovieDetail from '../components/movie_detail';

class MovieShow extends Component {
    componentWillMount() {
        this.props.fetchOneMovie(this.props.params.id, this.props.params.media_type);
    }
    componentWillUnmount() {
        this.props.clearOneFetchMovie();
    }
    render () {
        const {movie} = this.props;
        if (!this.props.movie) {
            return (<div>Loading</div>);
        }
        return (
            <div>
                <MovieDetail movie={movie}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {movie: state.movies.movie}; 
}

export default connect(mapStateToProps, {fetchOneMovie, clearOneFetchMovie})(MovieShow);