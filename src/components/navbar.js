import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import asyncComponent from '../components/asyncComponent.js';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 1.2,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing.unit * 2.0,
    marginBottom: theme.spacing.unit * 2.0,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  selected: {
    color: 'inherit',
    textDecoration: 'none',
    fontStyle: 'italic',
    marginRight: theme.spacing.unit * 2.0,
    marginBottom: theme.spacing.unit * 2.0,
    '&:hover': {
      textDecoration: 'underline',
    }
  }
})

class NavBar extends React.Component {
  state = {
    pages: [
      'Code',
      'Draw',
      'Paint',
      'Write',
      'Generic_Error'
    ]
  }

  returnNavbar = (path) => {
    const { pages } = this.state
    const { classes } = this.props

    return pages.map((pageName, i) => {
      let pageNameL =  pageName.toLowerCase()
      let selected = path === pageNameL

      return (
        <Grid key={i} item>
          <Typography
            component="a"
            variant="h5"
            gutterBottom href={'/' + pageNameL}
            className={selected ? classes.selected : classes.a}
          >
            { pageName }
          </Typography>
        </Grid>
      )
    })
  }

  render() {
    const { classes } = this.props
    const path = window.location.pathname.substr(1)
    const isRoot = path === ''

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Typography component="a" variant="h2" gutterBottom href="/" className={isRoot ? classes.selected : classes.a}>
              Noah Kernis
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
          { this.returnNavbar(path) }
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
