import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 1.2,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#000000'
    },
    marginRight: theme.spacing.unit
  },
  logo: {
    color: 'inherit',
    textDecoration: 'none'
  }
});

class NavBar extends React.Component {
  state = {
    pages: [
      'Audio',
      'Code',
      'Draw',
      'Write',
      'Generic_Error'
    ]
  }

  returnNavbar = () => {
    const { pages } = this.state
    const { classes } = this.props

    return pages.map((pageName, i) => {
      return (
        <Grid key={i} item>
          <Typography component="a" variant="h5" gutterBottom href={'/' + pageName.toLowerCase()} className={classes.a}>
            { pageName }
          </Typography>
        </Grid>
      )
    })
  }

  render() {
    const { classes } = this.props

    return (
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
          { this.returnNavbar() }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(NavBar));
