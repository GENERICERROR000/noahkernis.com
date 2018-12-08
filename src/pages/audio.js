import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Description from '../components/description.js';

const styles = theme => ({
  container1: {
    paddingBottom: theme.spacing.unit * 1.2
  },
  container2: {
    paddingBottom: theme.spacing.unit * 20
  },
  audio: {
    width: "600",
    height: "166"
  }
})

const description = `I believe audio is an intimate medium, with a unique ability to impact our emotions. I am interested in how it can be used to enhance the human experience and personal story telling.`

const descriptionIMMA = `I recorded, edited, and produced this piece. When discussing mental health issues, the diseases often become the focus of conversation. I was interested in exploring the lived experience of a mental illness and help show what can often be an invisible and ongoing struggle.`

const descriptionSCE = `When I worked at <a href='https://storycorps.org/' target='#' style='color:#000000;'>Story Corps</a>, I did the the first cut on this piece. I was given several hours of tape, and was responsible for editing the script and audio down to between 3-4 minutes. After presenting to the production team, it was selected and further produced for air. The piece Originally aired September 18, 2015, on NPR’s Morning Edition (<a href='https://storycorps.org/listen/angela-stowe-and-glenda-elliott-150918/' target='#' style='color:#000000;'>link</a>).

Story Corps wrote this introduction for the piece:

<em>Glenda Elliott grew up in Mayfield, Georgia during the 1940s. Long before the Stonewall Riots launched the modern gay rights movement, she met the love of her life — a woman named Lauree. When Glenda sat down with her friend, Angela Stowe, she told the story of her lifelong love that never had the chance to blossom.<em>`

class ItpVideo extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Description body={description}/>
        <div className={classes.container1}>
          <Description title='In My Mind: Addiction' body={descriptionIMMA}/>
          <audio controls className={classes.audio}>
            <source
              src="https://s3.amazonaws.com/media.noahkernis.com/audio/in_my_mind_addiction.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag. <br />
            The audio is availbe here: https://s3.amazonaws.com/media.noahkernis.com/audio/in_my_mind_addiction.mp3
          </audio>
        </div>
        <div className={classes.container2}>
          <Description title='Angela Stowe and Glenda Elliott - Story Corps' body={descriptionSCE}/>
          <audio controls className={classes.audio}>
            <source
              src="https://storycorpsorg-staging.s3.amazonaws.com/uploads/Elliott.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio tag. <br />
            The audio is availbe here: https://storycorpsorg-staging.s3.amazonaws.com/uploads/Elliott.mp3
            </audio>
          </div>
      </React.Fragment>
    )
  }
}

ItpVideo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItpVideo)
