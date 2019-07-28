import React, { Component, Suspense } from 'react';
import classNames from 'classnames';

// Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import LandingPageHeader from './LandingPageHeader';
import landingPageDefaultStyle from '../../assets/jss/views/landingPageDefaultStyle';
import LandingPageHeaderLinks from './LandingPageHeaderLinks';

class LandingPageLayout extends Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <LandingPageHeader
          color="transparent"
          brand="Library Tracker"
          rightLinks={<LandingPageHeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
      </div>
    );
  }
}

export default withStyles(landingPageDefaultStyle)(LandingPageLayout);
