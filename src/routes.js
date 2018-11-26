import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from './pages/index.js'
import Carl from './pages/carl.js'

// Router
export default () => {
  const childProps = {}
  return (
    <Switch>
      <Route path="/" exact component={Index} props={childProps} />
      <Route path="/carl" exact component={Carl} props={childProps} />
    </Switch>
  );
};
