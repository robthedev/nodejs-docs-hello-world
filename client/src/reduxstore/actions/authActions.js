import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER, GET_ERRORS } from 'reduxstore/types';

import { userLogin, userSignup } from 'services/UserService';

export const signupUser = (newUserData, history) => dispatch => {
  userSignup(newUserData)
    .then(res => {
      console.log(res);
      history.push('/login');
    })
    .catch(error => {
      dispatch({ type: GET_ERRORS, payload: error.response.data.errorMsg });
    });
};

export const loginUser = (userData, history) => dispatch => {
  userLogin(userData)
    .then(res => {
      const { token } = res.data;
      sessionStorage.setItem('libtrackrjwtToken', token);
      const decodedToken = jwt_decode(token);
      dispatch(setCurrentUser(decodedToken));
      history.push('/library');
    })
    .catch(error =>
      dispatch({ type: GET_ERRORS, payload: error.response.data.errorMsg })
    );
};

export const setCurrentUser = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
};
