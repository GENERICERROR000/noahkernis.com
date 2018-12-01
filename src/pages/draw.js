import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withRoot from '../withRoot';
import AsyncComponent from '../components/asyncComponent.js'

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 1.2
  },
  headers: {
    marginTop: theme.spacing.unit * 1.2,
    marginBottom: theme.spacing.unit * 1.2
  }
})

class Draw extends React.Component {
  state = {
    baseURL: 'https://s3.amazonaws.com/images.noahkernis.com/draw/',
    images: [
      'a_person_2018.jpeg',
      'a_person_cant_ever_be_broken_2018.jpeg',
      'all_or_none_2018.jpeg',
      'another_day_2018.jpeg',
      'bleed_love_2018.jpeg',
      'evil_2018.jpeg',
      'finally_got_that_itch_2018.jpeg',
      'forgetting_your_keys_2018.jpeg',
      'i_did_not_mean_to_say_that_2018.jpeg',
      'i_exist_2018.jpeg',
      'i_just_had_it_2018.jpeg',
      'i_like_your_chair_2018.jpeg',
      'i_made_the_cape_too_big_2018.jpeg',
      'im_here_2018.jpeg',
      'inside_out_2018.jpeg',
      'its_hard_to_say_2018.jpeg',
      'keeping_it_cool_2018.jpeg',
      'none_of_this_makes_sense_2018.jpeg',
      'pair_is_a_story_2018.jpeg',
      'protector_of_what_2018.jpeg',
      'ready_2018.jpeg',
      'remember_2018.jpeg',
      'singular_power_will_kill_us_all_2018.jpeg',
      'still_counts_2018.jpeg',
      'still_got_it_2018.jpeg',
      'there_never_was_a_reality_2018.jpeg',
      'this_wont_end_well_2018.jpeg',
      'thought_and_emotion_2018.jpeg',
      'what_day_is_it_2018.jpeg',
      'what_was_that_2018.jpeg',
      'when_confidence_wanes_2018.jpeg',
      'when_do_we_get_to_dance_2018.jpeg',
      'where_can_I_2018.jpeg'
    ]
  }

  returnImages = () => {
    const { baseURL, images } = this.state

    return images.map((imageName, i) => {
      return (
        <AsyncComponent
          key={i}
          baseURL={baseURL}
          imageName={imageName}
          index={i} />
      )
    })
  }

  render() {
    const { classes } = this.props
    
    return (
      <div className={classes.root}>
        <Typography variant="h6" className={classes.headers}>
          Portraits
        </Typography>
        { this.returnImages() }
        <Typography variant="h6" className={classes.headers}>
          Miscellaneous
        </Typography>
      </div>
    );
  }
}

Draw.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Draw))
