import React from 'react';
import PropTypes from 'prop-types';

import AppRoutes from './routes.js'
import NavBar from './navbar.js'

class App extends React.Component {
  render() {

    return (
      <React.Fragment>
        <NavBar />
        <hr />
        <AppRoutes />
      </React.Fragment>
    );
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default App;
