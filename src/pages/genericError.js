import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Description from '../components/description.js';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    marginBottom: 100
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  media: {
    height: '200px',
    marginBottom: theme.spacing.unit * 1.2,
    [theme.breakpoints.down('xs')]: {
      width: '40vw',
      height: 'auto'
    }
  }
})

const description = `GENERIC ERROR is the name I create and produce most of my work under, and it has been ongoing since late 2016. It is an identity meant to be native to both digital and analog spaces. The primary way I distribute the illustrations is via Instagram (@generic_error) or Twitter (@GENERIC_ERROR).

An example of the digital and physical overlap is the process I go through to create the illustrations. I illustrate on paper, and then scan with an app so they look processed and fully black and white. They are meant to sit on white backgrounds so they appear hand-drawn on the screen.

In 2017, I produced a collection of zines entitled 'I DON'T BELIEVE IN MAGIC 8 BALLS.' They were released via the site genericerror.me, which was developed to look like a page out of the zine. The collection can be downloaded as a PDF for printing or viewing on a digital device.`

class GenericError extends React.Component {
  state = {
    links: [
      'http://genericerror.me/',
      'https://www.instagram.com/generic_error/',
      'https://twitter.com/GENERIC_ERROR',
      'https://twitter.com/ParrotDontTweet'
    ]
  }
  render() {
    const { links } = this.state
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Description body={description}/>
        <img
          className={classes.media}
          src='https://s3.amazonaws.com/images.noahkernis.com/media/life_is_weird.gif'
          alt='life_is_weird.gif'
        />
        <Description title='Links'/>
        <Typography variant="subtitle2" className={classes.headers}>
          { links.map((link, i) =>
              <React.Fragment>
                <a
                  key={i}
                  href={link}
                  target='#'
                  className={classes.a}
                >
                  { link }
                </a>
                <br />
              </React.Fragment>
            )}
        </Typography>
      </div>
    );
  }
}

GenericError.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericError)
