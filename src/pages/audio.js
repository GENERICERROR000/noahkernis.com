import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Audio extends React.Component {
  render() {

    return (
      <div>
        "AUDIO"
      </div>
    );
  }
}

// Audio.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Audio)
