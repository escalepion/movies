import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import '../css/SearchBar.css';

class SearchBar extends Component {
constructor (props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

onInputChange(event) {
    this.setState({term: event.target.value});
}

onFormSubmit(event) {
    event.preventDefault();
    if(this.state.term) {
    this.props.fetchMovies(this.state.term);
    this.setState({ term: ''});
    }
}

render() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit} className="input-group search-bar">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search A Movie"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </span>
            </form>
        </div>
    );
    }
}
function mapStateToProps (state) {
    return { movies : state.movies.all};
}

export default connect(mapStateToProps, { fetchMovies })(SearchBar);