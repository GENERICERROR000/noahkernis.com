import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import Description from '../components/description.js';

const styles = theme => ({
  wrap: {
    position: 'relative',
  	paddingBottom: '56.25%',
  	paddingTop: '25px',
  	height: 0,
  	overflow: 'hidden'
  },
  frame: {
    position: 'absolute',
  	top: 0,
  	left: 0,
  	width: '100%',
  	height: '100%',
    maxWidth: 560,
    maxHeight: 315
  }
})

const title = `1 Minute Introductory Video`
const link = `https://www.youtube.com/watch?v=zgUjYB3Zls4`

class ItpVideo extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Description title={title}/>
        <a
          href={link}
          target='#'
        >
          { link }
        </a>
        <div className={classes.wrap} >
          <YouTube className={classes.frame} videoId="zgUjYB3Zls4" />
        </div>
      </React.Fragment>
    )
  }
}

ItpVideo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItpVideo)
