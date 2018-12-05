import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const description = `PLEASE ADD HERE`

class ItpVideo extends React.Component {
  render() {
    // const { classes } = this.props
    // https://storycorps.org/listen/angela-stowe-and-glenda-elliott-150918/
    return (
      <React.Fragment>
        <Description body={description}/>
        <Description title='In My Mind - Addiction'/>
        <audio
          controls
          width="600"
          height="166"
        >
          <source
            src="https://storycorpsorg-staging.s3.amazonaws.com/uploads/Elliott.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
        <Description title='Story Corps - Elliot'/>
        <audio
          controls
          width="600"
          height="166"
        >
          <source
            src="https://storycorpsorg-staging.s3.amazonaws.com/uploads/Elliott.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio tag.
        </audio>
      </React.Fragment>
    )
  }
}

ItpVideo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItpVideo)
