import * as Yup from 'yup';

export const loginFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

export const signupFormValidation = Yup.object().shape({
  username: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required!')
});

export const addBookFormValidation = Yup.object().shape({
  title: Yup.string().required('Book title is required'),
  author: Yup.string().required('Book author is required'),
  rating: Yup.string().required('Please add a rating between'),
  status: Yup.string().required('Please select a progress status'),
  description: Yup.string().min(
    10,
    'Description must be at least 10 characters'
  )
});

export const updateBookFormValidation = Yup.object().shape({
  title: Yup.string().required('Book title is required'),
  author: Yup.string().required('Book author is required'),
  rating: Yup.string().required('Please add a rating between'),
  status: Yup.string().required('Please select a progress status'),
  description: Yup.string().min(
    10,
    'Description must be at least 10 characters'
  )
});
