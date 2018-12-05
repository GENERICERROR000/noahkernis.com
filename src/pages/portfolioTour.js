import React from 'react';
import Description from '../components/description.js';

const description = `Hi and welcome to my portfolio and site!

This is my personal website (the real landing page is https://noahkernis.com), which also functions as my portfolio. Each section contains selected works and a description of the content at the top.

Please use the navigation menu at the top (Code, Draw, ...) to view the different sections.

Thank you for taking the time to review my portfolio!


This page and my introductory video page cannot be found via the navigation menu.
If you would like to visit this page again, please go to: https://noahkernis.com/portfolio-tour.
If you would like to view the video, please go to: https://noahkernis.com/itp-video.`

class Write extends React.Component {
  render() {

    return (
      <div style={{marginBottom: 100}}>
        <Description
          title='Portfolio Overview'
          body={description}
        />
      </div>
    );
  }
}

export default Write
