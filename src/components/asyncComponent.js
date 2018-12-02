import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ImageZoom from 'react-medium-image-zoom'

const styles = theme => ({
  text: {
    lineHeight: 'inherit',
    width: '10em'
  }
})

class AsyncComponent extends Component {
  state = {
    loaded: false
  }

  render() {
    const { loaded } = this.state
    const { baseURL, imageName, index, classes } = this.props

    return (
      <React.Fragment>
        <ImageIcon
          style={loaded ? {display: 'none'} : {fontSize: '2vw'}}
        />
        <ImageZoom style={loaded ? {} : {display: 'none'}}
          key={index}
          image={{
            src: baseURL + imageName,
            alt: imageName,
            style: { width: '10em' },
            onLoad: () => this.setState({loaded: true})
          }}
          zoomImage={{
            src: baseURL + imageName,
            alt: imageName,
          }}
        />
        <br />
        <Typography variant="overline" className={classes.text}>
          { imageName.replace(/_/g, ' ').replace(/2018.jpeg/g, '- 2018') }
        </Typography>
      </React.Fragment>
    )
  }
}


AsyncComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AsyncComponent)
