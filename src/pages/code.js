import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Code extends React.Component {
  render() {

    return (
      <div>
        "CODE"
      </div>
    );
  }
}

// Code.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Code)
