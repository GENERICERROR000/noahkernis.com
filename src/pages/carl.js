import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class Carl extends React.Component {
  render() {

    return (
      <div>
        "CARL"
      </div>
    );
  }
}

// Carl.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Carl)
