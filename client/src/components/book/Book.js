import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

const Book = props => {
  const { book } = props;
  return (
    <div>
      <Card>
        <CardContent>
          <p>Book title: {book.title}</p>
          <p>Book author: {book.author}</p>
          <Link to={`/library/books/view-book?id=${book.id}`}>View book</Link>
        </CardContent>
      </Card>
    </div>
  );
};

Book.propTypes = {};

export default Book;
