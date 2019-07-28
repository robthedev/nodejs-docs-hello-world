import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = props => {
  const { handleCloseDialog, confirmDelete, dialogText } = props;
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleCloseConfirmDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogText}</DialogTitle>
        <DialogActions>
          <Button onClick={() => handleCloseDialog()} color="primary">
            NO
          </Button>
          <Button onClick={() => confirmDelete()} color="primary" autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmDialog.propTypes = {};

export default ConfirmDialog;
