import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactTimeout from 'react-timeout'
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 1.2
  },
  media: {
    height: '600px',
    [theme.breakpoints.down('md')]: {
      width: '60vw',
      height: 'auto'
    }
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
    const { baseURL, images } = this.state

    this.props.setTimeout(this.interval, 5000)

    images.forEach(name => {
      const imgC = new Image()
      const imgBW = new Image()

      imgC.src = baseURL + name.c
      imgBW.src = baseURL + name.bw
    })
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

  render() {
    const { baseURL, index, images, c } = this.state
    const { classes } = this.props
    const src = baseURL + (c === true ? images[index].c : images[index].bw)

    return (
      <div className={classes.root}>

        <img
          src={src}
          alt='Noah Kernis'
          className={classes.media}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
        />
      </div>
    );
  }
}

NoahKernis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ReactTimeout(NoahKernis)))
