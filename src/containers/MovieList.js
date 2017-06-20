import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import MovieListItem from '../components/MovieListItem';
import {clearFetchMovies} from '../actions';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {tab:"movie"};
    }
    componentWillUnmount(){
        this.props.clearFetchMovies();
    }
    listMovies() {
        return this.props.movies.map((movie) => {
            return (
                <MovieListItem tab={this.state.tab} key={movie.id} movie={movie} />
            );
        });
    }
    listTabs() {
        if (this.props.movies.length) {
            return (
                <div className="btn-group btn-group-justified">
                    <a onClick={() => this.setState({ tab: "movie" })} className={`btn btn-info ${this.state.tab === 'movie' ? 'active' : null }`}>Movies</a>
                    <a onClick={() => this.setState({ tab: "tv" })} className={`btn btn-info ${this.state.tab === 'tv' ? 'active' : null }`}>Tv Shows</a>
                    <a onClick={() => this.setState({ tab: "person" })} className={`btn btn-info ${this.state.tab === 'person' ? 'active' : null }`}>Persons</a>
                </div> 
            );
        }
    }
    render() {
        return (
            <div>
                <SearchBar />
                {this.listTabs()}  
                {this.listMovies()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { movies : state.movies.all};
}

export default connect(mapStateToProps, {clearFetchMovies})(MovieList);

