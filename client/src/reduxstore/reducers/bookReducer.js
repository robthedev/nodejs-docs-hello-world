import isEmpty from 'utils/isEmpty';
import { ADD_BOOK } from 'reduxstore/types';

const initialState = {
  book: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        book: action.payload
      };
    default:
      return state;
  }
};
