import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import { updateBookFormValidation } from 'utils/form/FormValidationSchemas';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
});

class EditBookForm extends Component {
  render() {
    const {
      classes,
      handleClose,
      submitting,
      errors,
      touched,
      handleChange,
      book
    } = this.props;
    return (
      <div>
        <div className={classes.paper}>
          <Button onClick={() => handleClose()}>Close</Button>
          <Form>
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="center"
              spacing={0}
            >
              <Grid item xs={12} className={classes.fields}>
                <TextField
                  defaultValue={book.title}
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
                  defaultValue={book.author}
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
                  defaultValue={book.description}
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
                    defaultValue={book.rating}
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
                    defaultValue={book.status}
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
                  disabled={submitting}
                  className={classes.submitBtn}
                >
                  Submit
                </Button>
                {submitting && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </Grid>
            </Grid>
          </Form>
        </div>
      </div>
    );
  }
}

const FormikEditBookForm = withFormik({
  mapPropsToValues: props => ({
    title: props.book.title,
    author: props.book.author,
    rating: props.book.rating,
    status: props.book.status,
    description: props.book.description
  }),
  validationSchema: updateBookFormValidation,
  handleSubmit(values, { setSubmitting, props }) {
    const bookData = {
      ...values
    };
    props.editBook(props.book.id, bookData);
    setSubmitting(props.submitting);
  }
})(EditBookForm);

EditBookForm.propTypes = {};

export default withStyles(styles)(FormikEditBookForm);
