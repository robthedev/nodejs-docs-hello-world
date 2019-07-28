import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shows extends Component {
  render() {
    return (
      <div>
        <h1>Shows</h1>
        <Link to="/library/shows/add-show">Add a show</Link>
      </div>
    );
  }
}

export default Shows;
