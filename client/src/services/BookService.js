import axios from 'axios';

const bookApiURL = 'http://localhost:6520/api/books';

const createBook = bookData => {
  return axios.post(`${bookApiURL}`, bookData);
};

const getBooks = () => {
  return axios.get(bookApiURL);
};

const getBook = bookId => {
  return axios.get(`${bookApiURL}/${bookId}`);
};

const updateBook = (bookId, bookData) => {
  return axios.put(`${bookApiURL}/${bookId}`, bookData);
};

const deleteBook = bookId => {
  return axios.delete(`${bookApiURL}/${bookId}`);
};

export { createBook, getBook, getBooks, deleteBook, updateBook };
