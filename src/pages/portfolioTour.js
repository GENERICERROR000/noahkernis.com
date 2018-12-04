import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Description from '../components/description.js';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 1.2,
    flexGrow: 1
  },
  layout: {
    marginBottom: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

class Write extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Description
          title='hello'
          body='ok'
        />
      </div>
    );
  }
}

Write.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Write))
