import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 1.2,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    marginRight: theme.spacing.unit
  },
  logo: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      // <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography component="a" variant="h2" gutterBottom href="/" className={classes.logo}>
              Noah Kernis
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid key="1" item>
              <Typography component="a" variant="h5" gutterBottom href="/carl" className={classes.a}>
                Code
              </Typography>
            </Grid>
            <Grid key="2" item>
              <Typography component="a" variant="h5" gutterBottom href="/draw" className={classes.a}>
                Draw
              </Typography>
            </Grid>
            <Grid key="3" item>
              <Typography component="a" variant="h5" gutterBottom href="/write" className={classes.a}>
                Write
              </Typography>
            </Grid>
            <Grid key="4" item>
              <Typography component="a" variant="h5" gutterBottom href="/generic_error" className={classes.a}>
                Generic_Error
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      // </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
