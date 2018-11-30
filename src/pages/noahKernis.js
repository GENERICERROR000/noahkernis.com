import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class NoahKernis extends React.Component {
  render() {

    return (
      <div>
        "So basically this will give a little intro and then send them through site."
      </div>
    );
  }
}

// NoahKernis.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NoahKernis)
