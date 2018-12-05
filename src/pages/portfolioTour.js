import React from 'react';
import Description from '../components/description.js';

const description = ``

class Write extends React.Component {
  render() {

    return (
      <div style={{marginBottom: 100}}>
        <Description
          title='hello'
          body='ok'
        />
      </div>
    );
  }
}

export default Write
