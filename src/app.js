import React from 'react';
import PropTypes from 'prop-types';

import AppRoutes from './routes.js'
import NavBar from './components/navbar.js'

class App extends React.Component {
  render() {

    return (
      <React.Fragment>
        <NavBar />
        <AppRoutes />
      </React.Fragment>
    );
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default App;
