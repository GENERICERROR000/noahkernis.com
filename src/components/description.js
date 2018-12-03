import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  layout: {
    marginBottom: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

class Description extends React.Component {
  render() {
    const { classes, title, body } = this.props

    return (
      <React.Fragment>
        <Grid item className={classes.layout}>
          <Typography variant="h6" className={classes.headers}>
            { title ? title : "Description" }
          </Typography>
          <Typography variant="body1" className={classes.headers}>
            { body ? body : "Please add body content..." }
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

Description.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Description)
