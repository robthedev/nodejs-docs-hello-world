import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movies extends Component {
  render() {
    return (
      <div>
        <h1>MOVIES PAGE</h1>
        <Link to="/library/movies/add-movie">Add a movie</Link>
      </div>
    );
  }
}

export default Movies;
