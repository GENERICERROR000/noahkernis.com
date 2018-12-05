import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Description from '../components/description.js';

const styles = theme => ({
  media: {
    height: '300px',
    paddingLeft: -10,
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
      height: 'auto'
    }
  }
})

class GenericError extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
      <Description />
      http://genericerror.me/ <br />
      https://twitter.com/ParrotDontTweet <br />
      https://www.instagram.com/generic_error/ <br />
        <img
          className={classes.media}
          src='https://s3.amazonaws.com/images.noahkernis.com/media/life_is_weird.gif'
          alt='life_is_weird.gif'
        />
      </React.Fragment>
    );
  }
}

GenericError.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericError)
