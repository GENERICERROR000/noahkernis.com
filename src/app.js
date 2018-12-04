import React from 'react';
import AppRoutes from './routes.js'
import NavBar from './components/navbar.js'
import Footer from './components/footer.js'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AppRoutes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
