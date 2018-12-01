import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

class Code extends React.Component {
  render() {
    const { classes } = this.props
    console.log(this.props.match)
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.headers}>
          PARROT_DONT_TWEET
        </Typography>
        <Typography variant="body1" className={classes.headers}>
          ...Desc of Project
          <br />
          Link - https://github.com/nkernis/PARROT_DONT_TWEET
        </Typography>
        <Typography variant="h6" className={classes.headers}>
          Good_Notes
        </Typography>
        <Typography variant="body1" className={classes.headers}>
          ...Desc of Project
          <br />
          Link - https://github.com/nkernis/Good_Notes
        </Typography>
      </div>
    );
  }
}

Code.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Code))
