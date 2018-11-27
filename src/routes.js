import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/index.js'
import Carl from './pages/carl.js'

// Router
export default () => {
  const childProps = {}
  return (
    <Switch>
      <Route path="/" exact component={Home} props={childProps} />
      <Route path="/audio" exact component={Carl} props={childProps} />
    </Switch>
  );
};
