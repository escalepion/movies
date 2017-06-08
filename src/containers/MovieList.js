import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import MovieListItem from '../components/MovieListItem';
import {clearFetchMovies} from '../actions';

class MovieList extends Component {
    componentWillUnmount(){
        this.props.clearFetchMovies();
    }
    listMovies() {
        return this.props.movies.map((movie) => {
            return (
                <MovieListItem key={movie.id} movie={movie} />
            );
        });
    }
    render() {
        return (
            <div> 
                <SearchBar />             
                {this.listMovies()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { movies : state.movies.all};
}

export default connect(mapStateToProps, {clearFetchMovies})(MovieList);

