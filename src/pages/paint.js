import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Paint extends React.Component {
  render() {

    return (
      <div>
        "PAINT"
      </div>
    );
  }
}

// Paint.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Paint)
