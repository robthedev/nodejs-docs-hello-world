import { ADD_BOOK, GET_BOOKS, GET_ERRORS } from 'reduxstore/types';
import { createBook, getBooks } from 'services/BookService';

const addBook = newBookData => dispatch => {
  createBook(newBookData)
    .then(res => {
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({ type: GET_ERRORS, payload: error });
    });
};

const fetchBooks = () => dispatch => {
  getBooks()
    .then(res => {
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      });
    })
    .catch(error =>
      dispatch({
        type: GET_BOOKS,
        payload: null,
        error
      })
    );
};

export { addBook, fetchBooks };
