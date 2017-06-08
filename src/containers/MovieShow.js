import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {fetchOneMovie} from '../actions/';

class MovieShow extends Component {
    componentWillMount() {
        this.props.fetchOneMovie(this.props.params.id);
    }
    render () {
        if (!this.props.movie) {
            return (<div>Loading</div>);
        }
        return (
            <div>
                {console.log(this.props.movie.id)} <Link to="/" className="btn btn-danger">Back</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {movie: state.movies.movie}; 
}

export default connect(mapStateToProps, {fetchOneMovie})(MovieShow);