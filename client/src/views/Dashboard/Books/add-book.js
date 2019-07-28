import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import backgroundImage from 'assets/img/backgrounds/book-form-bg.jpg';

const FormikAddBookFrom = lazy(() => import('components/form/AddBookForm'));
const DashboardFormLayout = lazy(() =>
  import('components/dashboard/DashboardFormLayout')
);

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center'
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10
    }
  },
  more: {
    marginTop: theme.spacing.unit * 2
  }
});

const AddBook = props => {
  const { classes } = props;
  return (
    <div>
      <DashboardFormLayout backgroundClassName={classes.background}>
        <img style={{ display: 'none' }} src={backgroundImage} alt="" />
        <FormikAddBookFrom
          headline={'Add A Book To Your Library'}
          subtitle={'Reading is FUNdamental!'}
        />
      </DashboardFormLayout>
    </div>
  );
};

export default withStyles(styles)(AddBook);
