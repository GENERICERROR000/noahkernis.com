import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Description from '../components/description.js';

const styles = theme => ({
  layout: {
    marginBottom: theme.spacing.unit * 1.2
  },
  headers: {
    marginBottom: theme.spacing.unit * 1.2
  }
})

const description = ``

class Write extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Description />
        <Grid key='1' item className={classes.layout}>
          <Typography variant="h6" className={classes.headers}>
            Believing
          </Typography>
          <Typography variant="body1" className={classes.headers}>
            There is nothing <br />
            I fear more <br />
            than what I could believe tomorrow <br />
            - given my belief - <br />
            in what is <br />
            true <br />
            today… <br />
          </Typography>
        </Grid>
        <Grid key='2' item className={classes.layout}>
          <Typography variant="h6" className={classes.headers}>
            $1.41
          </Typography>
          <Typography variant="body1" className={classes.headers}>
            32 days without insurance. <br />
            That was all. <br />
            Entire lives have gone without it. <br />
            Generations of families - <br />
            never even knowing the concept. <br />
            I went 32 days… <br />
            I used 200 strips. <br />
            50 strips per bottle. <br />
            6.25 strips a day <br />
            $70.63 a bottle. <br />
            $1.41 per strip. <br />
            To test myself <br />
            cost me <br />
            $1.41 a stab. <br />
            Something your body <br />
            - without a conscious moment - <br />
            does for free. <br />
            Every test - <br />
            necessary for life - <br />
            was a withdrawal <br />
            from my wallet. <br />
            A glorious land <br />
            finds ways to <br />
            help you <br />
            live. <br />
            But it's conditional. <br />
            Pay now <br />
            - or - <br />
            die now. <br />
            We made this for you. <br />
            But you <br />
            can’t just have it. <br />
            No. <br />
            That would be against <br />
            who we are. <br />
            Pay for your salvation. <br />
            We give you the ability to live - <br />
            so you owe us. <br />
            That is the insurance contract. <br />
            I am a prisoner of the state. <br />
            I am prisoner of the company. <br />
            I cannot exist unless they let me. <br />
            32 days is what I survived without insurance. <br />
            My blood <br />
            a reminder of <br />
            power being spent. <br />
            I hope <br />
            - when you inevitably get sick - <br />
            there is money around. <br />
            The cost of life <br />
            may be something like <br />
            $1.41 per strip. <br />
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Write.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Write)
