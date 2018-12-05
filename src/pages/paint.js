import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AsyncComponent from '../components/asyncComponent.js'
import Description from '../components/description.js';

const styles = theme => ({
  media: {
    marginLeft: theme.spacing.unit * 1.2,
    marginRight: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

const description = ``

class Paint extends React.Component {
  state = {
    baseURL: 'https://s3.amazonaws.com/images.noahkernis.com/paint/',
    images: [
      'portrait_2018',
      'fearing_what_comes_next_2018',
      'hecho_en_america_2018'
    ]
  }

  returnImages = () => {
    const { baseURL, images } = this.state
    const { classes } = this.props

    return images.map((imageName, i) => {
      return (
        <Grid key={i} item className={classes.media}>
          <AsyncComponent
            key={i}
            baseURL={baseURL}
            imageName={imageName + '.jpeg'}
            index={i}
          />
        </Grid>
      )
    })
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Description />
        <Typography variant="h6" className={classes.headers}>
          Paintings
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          { this.returnImages() }
        </Grid>
      </React.Fragment>
    );
  }
}

Paint.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paint)
