import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class NoahKernis extends React.Component {
  render() {

    return (
      <div>
        "NOAH KERNIS"
      </div>
    );
  }
}

// NoahKernis.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NoahKernis)
