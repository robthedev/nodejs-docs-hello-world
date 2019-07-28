import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const defaultProps = {};

const styles = {
  footerStyles: {
    background: '#1E1E2F'
  }
};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const { classes } = this.props;
    return (
      <React.Fragment classname={classes.footerStyles}>
        <p>
          <a href="">Library Tracker &copy; Rob Dev.</a>
        </p>
        <p className="ml-auto">
          <a href="#"> Powered by Caffeine and Techno.</a>
        </p>
      </React.Fragment>
    );
  }
}

const propTypes = {
  children: PropTypes.node
};

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default withStyles(styles)(DefaultFooter);
