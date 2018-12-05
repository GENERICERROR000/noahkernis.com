import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactTimeout from 'react-timeout'

const styles = theme => ({
  container: {
    marginBottom: 100
  },
  media: {
    height: '600px',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
      height: 'auto'
    }
  },
  preLoad: {
    'width': 0,
    'height': 0,
    'visibility': 'hidden',
    'overflow': 'hidden'
  }
})

class NoahKernis extends React.Component {
  state = {
    baseURL: 'https://s3.amazonaws.com/images.noahkernis.com/media/',
    index: 0,
    c: true,
    images: [
      {
        c: 'nk_3_c.jpg',
        bw: 'nk_3_bw.jpg'
      },
      {
        c: 'nk_1_c.jpg',
        bw: 'nk_1_bw.jpg'
      },
      {
        c: 'nk_4_c.jpg',
        bw: 'nk_4_bw.jpg'
      },
      {
        c: 'nk_2_c.jpg',
        bw: 'nk_2_bw.jpg'
      }
    ]
  }

  componentDidMount = () => {
    this.props.setTimeout(this.interval, 3500)
  }

  interval = () => {
    this.changePic()
    this.props.setInterval(this.changePic, 2500)
  }

  changePic = () => {
    const { index } = this.state
    this.setState({ index: index === 3 ? 0 : index + 1 })
  }

  handleHover = () => {
    const { c } = this.state
    this.setState({c: !c})
  }

  preLoadImages = () => {
    const { baseURL, images } = this.state

    return images.map((imageName, i) => {
      const imgC = baseURL + imageName.c
      const imgBW = baseURL + imageName.bw
      return (
        <React.Fragment key={i}>
          <img key={imgC} src={imgC} alt='hidden' />
          <img key={imgBW} src={imgBW} alt='hidden' />
        </React.Fragment>
      )
    })
  }

  render() {
    const { baseURL, index, images, c } = this.state
    const { classes } = this.props
    const src = baseURL + (c === true ? images[index].c : images[index].bw)

    return (
      <div className={classes.container}>
        <img
          src={src}
          alt='Noah Kernis'
          className={classes.media}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        />
        <div className={classes.preLoad} key={'herp'}>
          { this.preLoadImages() }
        </div>
      </div>
    );
  }
}

NoahKernis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReactTimeout(NoahKernis))
