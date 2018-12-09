import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoahKernis from './pages/noahKernis.js'
import Audio from './pages/audio.js'
import Code from './pages/code.js'
import Draw from './pages/draw.js'
import Write from './pages/write.js'
import GenericError from './pages/genericError.js'
import PortfolioTour from './pages/portfolioTour.js'
import ItpVideo from './pages/itpVideo.js'
import FourZeroFour from './pages/404.js'

export default () => {
  const childProps = {}

  return (
    <Switch>
      <Route path="/" exact component={NoahKernis} props={childProps} />
      <Route path="/audio" exact component={Audio} props={childProps} />
      <Route path="/code" exact component={Code} props={childProps} />
      <Route path="/draw" exact component={Draw} props={childProps} />
      <Route path="/write" exact component={Write} props={childProps} />
      <Route path="/generic_error" exact component={GenericError} props={childProps} />
      <Route path="/portfolio_tour" exact component={PortfolioTour} props={childProps} />
      <Route path="/portfolio-tour" exact component={PortfolioTour} props={childProps} />
      <Route path="/itp-video" exact component={ItpVideo} props={childProps} />
      <Route path="*" component={FourZeroFour} props={childProps} />
    </Switch>
  );
};
