import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';

import { addBook } from 'reduxstore/actions/bookActions';
import { createBook } from 'services/BookService';
import { addBookFormValidation } from 'utils/form/FormValidationSchemas';
import { ADD_BOOK } from '../../reduxstore/types';

const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    maxWidth: 500,
    flexGrow: 1
  },
  form: {
    width: '100%'
  },
  formControl: {
    width: 175
  },
  fields: {
    padding: '0.5rem 0'
  },
  errorSection: {
    color: theme.palette.error.main
  },
  btnContainer: {
    textAlign: 'center',
    position: 'relative'
  },
  submitBtn: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '30%',
    left: '45%'
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'red'
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'red'
    }
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'red'
    }
  },
  notchedOutline: {}
});

class AddBookForm extends Component {
  render() {
    const {
      classes,
      errors,
      touched,
      handleChange,
      isSubmitting,
      isValidating
    } = this.props;
    return (
      <Paper className={classes.paper} elevation={1}>
        <Form>
          <Grid
            container
            alignItems="center"
            direction="row"
            justify="center"
            spacing={0}
          >
            <h1>{this.props.headline}</h1>
            <p className="text-muted">{this.props.subtitle}</p>
            <Grid item xs={12} className={classes.fields}>
              <Input
                type="text"
                label="Title"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                fullWidth
                inputlabelprops={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                inputprops={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
              {touched.title && errors.title && (
                <div className={classes.errorSection}>{errors.title}</div>
              )}
            </Grid>
            <Grid item xs={12} className={classes.fields}>
              <TextField
                type="text"
                label="Author"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                fullWidth
              />
              {touched.author && errors.author && <div>{errors.author}</div>}
            </Grid>
            <Grid item xs={12} className={classes.fields}>
              <TextField
                type="text"
                label="Description"
                placeholder="Description"
                name="description"
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
              />
              {touched.description && errors.description && (
                <div>{errors.description}</div>
              )}
            </Grid>
            <Grid item xs={12} className={classes.fields}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="rating">Rating</InputLabel>
                <NativeSelect
                  onChange={handleChange}
                  name="rating"
                  inputProps={{
                    id: 'rating'
                  }}
                >
                  <option value="" />
                  <option value="0">Not sure yet</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </NativeSelect>
              </FormControl>
              {touched.rating && errors.rating && <div>{errors.rating}</div>}
            </Grid>
            <Grid item xs={12} className={classes.fields}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <NativeSelect
                  onChange={handleChange}
                  name="status"
                  inputProps={{
                    id: 'status'
                  }}
                >
                  <option value="" />
                  <option value="Not started">Not started</option>
                  <option value="Currently reading">Currently reading</option>
                  <option value="Finished">Finished</option>
                </NativeSelect>
              </FormControl>
              {touched.status && errors.status && <div>{errors.status}</div>}
            </Grid>
            <Grid
              item
              xs={6}
              className={classNames(classes.btnContainer, classes.fields)}
            >
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                disabled={isSubmitting}
                className={classes.submitBtn}
              >
                Submit
              </Button>
              {isSubmitting && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </Grid>
          </Grid>
        </Form>
      </Paper>
    );
  }
}

const FormikAddBookFrom = withFormik({
  mapPropsToValues({ title, author, rating, status, description }) {
    return {
      title: title,
      author: author,
      rating: rating,
      status: status,
      description: description || ''
    };
  },
  validationSchema: addBookFormValidation,
  handleSubmit(values, { setSubmitting, props }) {
    const newBookData = {
      ...values
    };
    createBook(newBookData)
      .then(res => {
        console.log(res.data.title);
        setSubmitting(false);
        props.history.push('/library/books');
      })
      .catch(error => {
        console.log(error.response.data);
        setSubmitting(false);
      });
  }
})(AddBookForm);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addBook }
)(withStyles(styles)(withRouter(FormikAddBookFrom)));
