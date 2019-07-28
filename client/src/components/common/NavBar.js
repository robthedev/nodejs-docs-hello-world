import React, { Component } from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import menuSVG from '../../assets/icons/menu.svg';

const styles = theme => ({
  navWrapper: {
    backgroundColor: 'transparent',
    paddingTop: '2rem',
    color: '#ffffff',
    fontFamily: theme.fontFamily,
    zIndex: 1100,
    position: 'fixed',
    width: '100%'
  },
  nav: {
    margin: 'auto',
    padding: '0 2rem',
    width: '100%',
    maxWidth: '1140px'
  },
  navBrand: {
    color: '#ffffff'
  },
  navLink: {
    fontSize: '1rem'
  },
  navToggler: {
    backgroundSize: '100% 100%',
    backgroundColor: '#ffffff',
    backgroundImage: `url(${menuSVG})`
  }
});

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <header className={classes.navWrapper}>
          <Navbar className={classes.nav} expand="md">
            <NavbarBrand className={classes.navBrand} href="/">
              Library Tracker
            </NavbarBrand>
            <NavbarToggler
              className={classes.navToggler}
              onClick={this.toggle}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className={classes.navLink}>
                    <Link to="/contact">Contact</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classes.navLink}>
                    <Link to="/pricing">Pricing</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classes.navLink}>
                    <Link to="/login">Login</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classes.navLink}>
                    <Link to="/signup">Signup</Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </React.Fragment>
    );
  }
}

const StyledNavBar = withStyles(styles)(NavBar);

export default StyledNavBar;
