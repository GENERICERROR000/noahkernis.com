import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
import AsyncComponent from '../components/asyncComponent.js'

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

class Paint extends React.Component {
  state = {
    baseURL: 'https://s3.amazonaws.com/images.noahkernis.com/paint/',
    images: [
      'portrait_2018.png',
      'hecho_en_america_2018.png',
      'fearing_what_comes_next_2018.png'
    ]
  }

  returnImages = () => {
    const { baseURL, images } = this.state

    return images.map((imageName, i) => {
      return (
        <AsyncComponent
          key={i}
          baseURL={baseURL}
          imageName={imageName}
          index={i}
        />
      )
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.headers}>
          Paintings
        </Typography>
        { this.returnImages() }
      </div>
    );
  }
}

Paint.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Paint))
