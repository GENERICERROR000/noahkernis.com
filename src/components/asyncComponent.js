import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ImageZoom from 'react-medium-image-zoom'

const styles = theme => ({
  container: {
    position: 'relative'
  },
  text: {
    lineHeight: 'inherit',
    width: '15em',
    position: 'absolute',
    top: '90%',
    color: 'black',
    backgroundImage: 'linear-gradient(white, rgba(255,0,0,0))'
   }
})

// #################################################
// TODO: ADD FUNCTION SO TITLE ONLY APPEARS ON HOVER
// #################################################

class AsyncComponent extends Component {
  state = {
    loaded: false
  }

  render() {
    const { loaded } = this.state
    const { baseURL, imageName, index, classes } = this.props

    return (
      <div className={classes.container}>
        <ImageIcon style={loaded ? {display: 'none'} : {fontSize: '2vw'}}/>
        <ImageZoom style={loaded ? {} : {display: 'none'}}
          key={index}
          image={{
            src: baseURL + imageName,
            alt: imageName,
            style: { width: '15em' },
            onLoad: () => this.setState({loaded: true})
          }}
          zoomImage={{
            src: baseURL + imageName,
            alt: imageName,
          }}
        />
        <Typography variant="overline" className={classes.text}>
          { imageName.replace(/_/g, ' ').replace(/2018.jpeg/g, '- 2018') }
        </Typography>
      </div>
    )
  }
}

AsyncComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AsyncComponent)
