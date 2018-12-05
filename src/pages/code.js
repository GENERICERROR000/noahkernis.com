import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import Description from '../components/description.js';

const GitHub = (props: Object) => {
  return (
    <SvgIcon {...props}>
      <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
    </SvgIcon>
  )
}

const styles = theme => ({
  layout: {
    marginBottom: theme.spacing.unit * 1.2,
    whiteSpace: 'pre-wrap'
  },
  headers: {
    marginBottom: theme.spacing.unit * 1.2
  },
  icon: {
    color: '#000000',
    fontSize: '1.5em',
    marginLeft: theme.spacing.unit * 1.2
  }
})

const description = `Good_Notes and PARROT_DONT_TWEET are two of my personal projects. They are ongoing and are update as needed. (I would share some of the full-stack development, automation, or architecture I have done for work, but unfortunately they are covered by NDA's).`

const descriptionGN = `Good_Notes is a cli note-taking app written in Go. It is currently under development and I work on it with a former colleague. The app is a light-weight binary that can be easily dowloaded and run. It is for quick note taking or scrap notes while working at the cli. Running the app and passing it a string writes the input to the default note, which is broken up by timestamp. The app also allows creating other notes, and managing them. Notes can be edited with the users preferred cli text editor. The notes can be stored and retrieved from Amazon S3.`

const descriptionPDT = `PARROT_DONT_TWEET is part research and part art project. It is a NodeJS app that uses Twitter's API and Amazon DynamoDB for storage. The app is containerized for ease of deployment and distribution. It is currently running on a Raspberry PI in my apartment.

Research: The app listens to @RealDonalTrump (it can be used for any Twitter user), and stores all of the tweets in a database. It then posts the exact same copy under the handle @ParrotDontTweet (again, can be any user), and store that in a database. The aim is to see if Twitter treats the content differently, even though the text is copy-pasted.

Art Project: Twitter is a digital environment often compared to a public square. However, it is inundated with ads, bots, and companies that can often appear like regular user. PARROT_DONT_TWEET adds to the noise. Other Twitter users like it's content, although it is just "stolen". I often refer to it as the 'Hate Machine', as it can serve to parrot and amplify voice. In this way, the app mimics human interaction with Twitter.`

class Code extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Description body={description}/>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid key='1' item className={classes.layout}>
            <Typography variant="h6" className={classes.headers}>
              Good_Notes
              <a
                href='https://github.com/nkernis/Good_Notes'
                target='#'
                className={classes.icon}
              >
                <GitHub />
              </a>
            </Typography>

            <Typography variant="body1" className={classes.headers}>
              { descriptionGN }
            </Typography>
          </Grid>
          <Grid key='2' item className={classes.layout}>
            <Typography variant="h6" className={classes.headers}>
              PARROT_DONT_TWEET
              <a
                href='https://github.com/nkernis/PARROT_DONT_TWEET'
                target='#'
                className={classes.icon}
              >
                <GitHub />
              </a>
            </Typography>
            <Typography variant="body1" className={classes.headers}>
              { descriptionPDT }
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Code.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Code)
