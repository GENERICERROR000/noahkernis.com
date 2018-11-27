import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Write extends React.Component {
  render() {

    return (
      <div>
        "WRITE"
      </div>
    );
  }
}

// Write.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Write)
