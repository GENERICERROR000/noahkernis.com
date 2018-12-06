import React from 'react';
import Description from '../components/description.js';

const description = `Hi and welcome to my portfolio and site!

This is my personal website, which also functions as my portfolio. Each section contains selected works and a description of the content at the top.

Thank you for taking the time to review my portfolio!


This page and my introductory video page cannot be found via the navigation menu.
If you would like to visit this page again, please go to: <a href='https://noahkernis.com/portfolio-tour' target='#' style='color:#000000;'>https://noahkernis.com/portfolio-tour</a>.
If you would like to view the video, please go to: <a href='https://noahkernis.com/itp-video' target='#' style='color:#000000;'>https://noahkernis.com/itp-video</a>.`

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
