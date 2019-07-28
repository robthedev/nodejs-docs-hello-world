import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import withStyles from 'react-jss';

import bannerIMG from '../../assets/img/landing-bg.jpg';

const lpimg =
  'https://images.unsplash.com/photo-1496674205429-924b32acd421?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

const styles = {
  bannerWrapper: {
    height: '90vh',
    margin: 0,
    border: 0,
    padding: 0,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    maxHeight: '1000px',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bannerIMG})`,
    transform: 'translate3d(0px 0px 0px)'
  }
};

const mainContentStyle = {
  zIndex: 3,
  position: 'relative',
  margin: '-60px 30px 0px',
  boxShadow:
    '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  borderRadius: '6px',
  background: '#ffffff'
};

const contentStyle = {
  maxWidth: '720px',
  width: '100%',
  zIndex: '12',
  marginLeft: 'auto',
  paddingLeft: '15px',
  marginRight: 'auto',
  paddingRight: '15px'
};

const headerContentStyle = {
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '35%',
  color: '#ffffff',
  transform: 'translate(-50%,-50%)'
};
class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Parallax bgImage={lpimg} strength={200}>
          <div style={{ height: '90vh' }}>
            <div style={headerContentStyle}>
              <h1>Library Tracker</h1>
              <h4>The greatest personal media library on earth!</h4>
              <br />
              <a
                tabIndex="0"
                role="button"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch video
              </a>
            </div>
          </div>
        </Parallax>
        <div style={mainContentStyle}>
          <div style={contentStyle}>
            Let's talk product This is the paragraph where you can write more
            details about your product. Keep you user engaged by providing
            meaningful information. Remember that by this time, the user is
            curious, otherwise he wouldn't scroll to get here. Add a button if
            you want the user to see more
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const StyledBanner = withStyles(styles)(Banner);

export default StyledBanner;
