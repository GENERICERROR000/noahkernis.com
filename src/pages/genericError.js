import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class GenericError extends React.Component {
  render() {

    return (
      <div>
        <h1>"GENERIC ERROR"</h1>
        <img src='https://s3.amazonaws.com/images.noahkernis.com/media/life_is_weird.gif' alt='life_is_weird.gif' />
      </div>
    );
  }
}

// GenericError.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(GenericError)
