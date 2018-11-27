import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Draw extends React.Component {
  render() {

    return (
      <div>
        "DRAW"
      </div>
    );
  }
}

// Draw.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Draw)
