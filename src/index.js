import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import AppRoutes from './routes.js'

// WebFont.load({
//   google: {
//     families: ['Barlow:300,400,400i,500,600,700']
//   }
// });

ReactDOM.render(
    <Router>
      <AppRoutes />
    </Router>,
  document.getElementById('root')
);


serviceWorker.unregister();
