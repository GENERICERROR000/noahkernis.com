import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.layout}>
            <Typography variant="h6" className={classes.headers}>
              Welcome To The Tour
            </Typography>
            <Typography variant="body1" className={classes.headers}>
              Words... <br />
              Words... <br />
              Words... <br />
              Words... <br />
              Words... <br />
            </Typography>
          </Grid>

        </Grid>
      </div>
    );
  }
}

Write.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Write))
