import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const Layout = lazy(() => import('components/common/Layout'));

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4
  }
});

const DashboardFormLayout = props => {
  const { backgroundClassName, children, classes } = props;
  return (
    <div>
      <Layout className={classes.layoutBody} width="full">
        {children}
        <div className={classes.backdrop} />
        <div className={classNames(classes.background, backgroundClassName)} />
      </Layout>
    </div>
  );
};

DashboardFormLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardFormLayout);
