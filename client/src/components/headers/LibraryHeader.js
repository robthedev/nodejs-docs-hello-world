import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({});

const LibraryHeader = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={4} sm={4}>
          <Paper>Not Started</Paper>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper>Currently Reading</Paper>
        </Grid>
        <Grid item xs={4} sm={4}>
          <Paper>Finished</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

LibraryHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LibraryHeader);
