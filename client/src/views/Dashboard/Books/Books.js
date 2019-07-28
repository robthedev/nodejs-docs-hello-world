import React, { Component, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from 'services/BookService';

const Book = lazy(() => import('components/book/Book'));
const LibraryHeader = lazy(() => import('components/headers/LibraryHeader'));

class Books extends Component {
  state = {
    books: [],
    show: false
  };

  componentDidMount() {
    getBooks().then(
      returnedBooks => {
        const { data } = returnedBooks;
        this.setState({ books: data });
      },
      error => {
        console.log(error.response.data);
      }
    );
  }

  render() {
    const loading = <div>Loading...</div>;
    const books = this.state.books.map(book => {
      return (
        <Suspense key={book.id} fallback={loading}>
          <Book book={book} />
        </Suspense>
      );
    });
    return (
      <div>
        <h1>BOOKS PAGE</h1>
        <LibraryHeader />
        <Link to="/library/books/add-book">Add a book</Link>
        {books}
      </div>
    );
  }
}

export default Books;
