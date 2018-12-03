import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 1.2
  },
  media: {
    height: '400px',
    [theme.breakpoints.down('md')]: {
      width: '40vw',
      height: 'auto'
    }
  }
})

class GenericError extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <h1>"GENERIC ERROR"</h1>
        <img
          className={classes.media}
          src='https://s3.amazonaws.com/images.noahkernis.com/media/life_is_weird.gif'
          alt='life_is_weird.gif'
        />
      </div>
    );
  }
}

GenericError.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(GenericError))
