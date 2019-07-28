import React, { Component, lazy } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import parse from 'utils/query-string';
import { getBook, deleteBook, updateBook } from 'services/BookService';
import Modal from '@material-ui/core/Modal';
import ConfirmDialog from 'components/common/ConfirmDialog';

const EditBookForm = lazy(() => import('components/form/EditBookForm'));

class ViewBook extends Component {
  state = {
    book: {},
    user: {},
    editFormOpen: false,
    confirmDeleteOpen: false,
    deleting: false,
    submitting: false
  };

  componentDidMount() {
    const queryValues = parse(this.props.location.search);
    const bookId = queryValues.id;
    getBook(bookId)
      .then(book => {
        this.setState({ book: book.data, user: book.data.User });
      })
      .catch(error => console.log(error.response.data));
  }

  handleDeleteBook = bookId => {
    this.setState({ deleting: true });
    deleteBook(bookId)
      .then(res => {
        if (res.status === 200) {
          this.setState({ deleting: false }, () => {
            this.props.history.push('/library/books');
          });
        }
      })
      .catch(error => {
        this.setState({ deleting: false });
        console.log(error.response.data);
      });
  };

  handleEditBook = (bookId, bookData) => {
    this.setState({ submitting: true });
    updateBook(bookId, bookData)
      .then(res => {
        this.setState({ submitting: false });
        if (res.status === 201) {
          this.setState({ editFormOpen: false }, () => {
            this.props.history.push(
              `/library/books/view-book?id=${this.state.book.id}`
            );
          });
        }
      })
      .catch(error => {
        this.setState({ submitting: false });
        console.log(error.response.data);
      });
  };
  handleOpenEditForm = () => {
    this.setState({ editFormOpen: true });
  };
  handleCloseEditForm = () => {
    this.setState({ editFormOpen: false });
  };
  handleOpenConfirmDelete = () => {
    this.setState({ confirmDeleteOpen: true });
  };
  handleCloseConfirmDelete = () => {
    this.setState({ confirmDeleteOpen: false });
  };

  render() {
    const {
      editFormOpen,
      confirmDeleteOpen,
      book,
      book: { id, title, author, rating, status }
    } = this.state;
    return (
      <div>
        <h1>{`Hello, ${this.state.user.name}`}</h1>
        <p>bookid: {id}</p>
        <p>title: {title}</p>
        <p>author: {author}</p>
        <p>rating: {rating}</p>
        <p>staus: {status}</p>
        <button onClick={() => this.handleOpenConfirmDelete()}>
          Delete Book
        </button>
        <button onClick={() => this.handleOpenEditForm()}>Edit Book</button>
        <Modal open={editFormOpen} onClose={() => this.handleCloseEditForm()}>
          <React.Fragment>
            <EditBookForm
              book={book}
              handleClose={this.handleCloseEditForm}
              editBook={this.handleEditBook}
              submitting={this.state.submitting}
            />
          </React.Fragment>
        </Modal>
        <ConfirmDialog
          open={confirmDeleteOpen}
          handleCloseDialog={this.handleCloseConfirmDelete}
          confirmDelete={() => this.handleDeleteBook(id)}
          dialogText={'Are you sure you want to delete this?'}
        />
      </div>
    );
  }
}

ViewBook.propTypes = {};

export default withRouter(ViewBook);
