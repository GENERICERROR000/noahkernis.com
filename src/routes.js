import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NoahKernis from './pages/noahKernis.js'
import Code from './pages/code.js'
import Draw from './pages/draw.js'
import Paint from './pages/paint.js'
import ItpVideo from './pages/itpVideo.js'
import Write from './pages/write.js'
import GenericError from './pages/genericError.js'

// Router
export default () => {
  const childProps = {}

  return (
    <Switch>
      <Route path="/" exact component={NoahKernis} props={childProps} />
      <Route path="/code" exact component={Code} props={childProps} />
      <Route path="/draw" exact component={Draw} props={childProps} />
      <Route path="/paint" exact component={Paint} props={childProps} />
      <Route path="/itp-video" exact component={ItpVideo} props={childProps} />
      <Route path="/write" exact component={Write} props={childProps} />
      <Route path="/generic_error" exact component={GenericError} props={childProps} />
    </Switch>
  );
};
