import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageIcon from '@material-ui/icons/Image';
import ImageZoom from 'react-medium-image-zoom'

const styles = theme => ({
  container: {
    position: 'relative',
  },
  text: {
    lineHeight: 'inherit',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100%',
    position: 'absolute',
    top: '80%',
    color: 'white',
    background: 'black',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
   }
})

class AsyncComponent extends Component {
  state = {
    loaded: false,
    title: false
  }

  handleHover = () => {
    const { title } = this.state
    this.setState({title: !title})
  }

  render() {
    const { loaded, title } = this.state
    const { baseURL, imageName, index, classes } = this.props

    return (
      <Grid
        item
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <div className={classes.container}>
          <ImageIcon style={loaded ? {display: 'none'} : {fontSize: '2vw'}}/>
          <ImageZoom style={loaded ? {} : {display: 'none'}}
            key={index}
            image={{
              src: baseURL + 'min/' + imageName,
              alt: imageName,
              style: { width: '15em' },
              onLoad: () => this.setState({loaded: true})
            }}
            zoomImage={{
              src: baseURL + imageName,
              alt: imageName,
            }}
          />
          <Typography variant="overline" className={classes.text} style={title ? {} : {display: 'none'}}>
            { imageName.replace(/_/g, ' ').replace(/2018.jpeg/g, '- 2018') }
          </Typography>
        </div>
      </Grid>
    )
  }
}

AsyncComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AsyncComponent)
