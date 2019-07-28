import React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import landingPageHeaderLinksStyle from '../../assets/jss/components/LandingPage/landingPageHeaderLinksStyle';

const LandingPageHeaderLinks = ({ ...props }) => {
  const { classes } = props;
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button color="transparent" className={classes.navLink}>
            <Link to="/login">Login</Link>
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="/register"
            color="transparent"
            className={classes.navLink}
          >
            Register
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default withStyles(landingPageHeaderLinksStyle)(LandingPageHeaderLinks);
