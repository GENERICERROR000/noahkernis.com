import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Description from '../components/description.js';

const styles = theme => ({
  container: {
    paddingBottom: theme.spacing.unit * 1.2
  },
  audio: {
    width: "600",
    height: "166"
  }
})

const description = `I grew up with radio, and believe it is an intimate medium, with a unique ability to tell our personal stories. Most of my audio work focuses on the experience of living with mental illness or personal story telling.`

const descriptionIMMA = `I recored, edited, and produced this piece. When discussing mental health issues, the diseases often become the focus of conversation. I was interested in exploring the lived experience of a mental illness and help show what can often be an invisble and ongoing struggle.`

const descriptionSCE = `When I worked at Story Corps (<a href='https://storycorps.org/' target='#' style='color:#000000;'>link</a>), I did the the first cut on this piece. I was given 1-2 hours of tape, and was responsible for editing the script and audio down to between 3-4 minutes. After presenting to the production team, it was selected and further produced for air. The piece Originally aired September 18, 2015, on NPR’s Morning Edition (<a href='https://storycorps.org/listen/angela-stowe-and-glenda-elliott-150918/' target='#' style='color:#000000;'>link</a>) and was also chosen for the top 15 of 2015.

Story Corps wrote this introduction for the piece:

<span style='font-style:italic;'>Glenda Elliott grew up in Mayfield, Georgia during the 1940s. Long before the Stonewall Riots launched the modern gay rights movement, she met the love of her life — a woman named Lauree. When Glenda sat down with her friend, Angela Stowe, she told the story of her lifelong love that never had the chance to blossom.<span>`

class ItpVideo extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Description body={description}/>
        <Description title='In My Mind: Addiction' body={descriptionIMMA}/>
        <div className={classes.container}>
          <audio controls className={classes.audio}>
            <source
              src="https://s3.amazonaws.com/media.noahkernis.com/audio/in_my_mind_addiction.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
        <Description title='Angela Stowe and Glenda Elliott - Story Corps' body={descriptionSCE}/>
        <audio controls className={classes.audio}>
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
