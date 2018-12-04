import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 1.2,
    position: 'absolute',
    bottom: 0,
    height: 'auto'
  }
})

class Footer extends React.Component {
  render() {
    const {
      classes
    } = this.props

    return (

        <BottomNavigation className={classes.root}>
          < Typography variant="overline">
            All The Rights - All Of Time - Noah Kernis
          </Typography>
        </BottomNavigation>

    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Footer))
