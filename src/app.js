import React from 'react';
import PropTypes from 'prop-types';

import AppRoutes from './routes.js'
import NavBar from './navbar.js'

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

// ASYNC COMP
// import React, { Component } from 'react';
// import LayoutLoader from '../layouts/components/layout-loader/layout-loader.component';
//
// export default function asyncComponent(importComponent) {
//   class AsyncComponent extends Component {
//     constructor(props) {
//       super(props);
//
//       this.state = {
//         component: null
//       };
//     }
//
//     async componentDidMount() {
//       const { default: component } = await importComponent();
//
//       this.setState({
//         component
//       });
//     }
//
//     render() {
//       const C = this.state.component;
//
//       return C ? <C {...this.props} /> : <LayoutLoader />;
//     }
//   }
//
//   return AsyncComponent;
// }

// PROGRESS CIRCLE
// import React from 'react';
// import PropTypes from 'prop-types';
//
// // Material components
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { withStyles } from '@material-ui/core/styles';
//
// import themeStyles from './layout-loader.theme.style';
//
// const LayoutLoader = (props) => {
//   const {
//     classes
//   } = props;
//
//   return (
//     <div className={classes.loaderWrapper}>
//       <CircularProgress className={classes.progress} size={50} />
//       Loading...
//     </div>
//   );
// };
//
// LayoutLoader.propTypes = {
//   classes: PropTypes.shape({}).isRequired
// };
//
//
// export default withStyles(themeStyles, { withTheme: true })(LayoutLoader);
