import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Path, PathPortfolio } from 'Path';
import './style.scss';

import PageNotFound from 'scenes/page_not_found/PageNotFound';
import PortfolioScene from 'scenes/portfolio/PortfolioScene';
import P10000 from './projects/p10000/P10000';
import P10001 from './projects/p10001/P10001';
import P10002 from './projects/p10002/P10002';
import P10003 from './projects/p10003/P10003';


class PortfolioRouting extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Path.PORTFOLIO} component={PortfolioScene} />
        <Route path={PathPortfolio.P10000} component={P10000} />
        <Route path={PathPortfolio.P10001} component={P10001} />
        <Route path={PathPortfolio.P10002} component={P10002} />
        <Route path={PathPortfolio.P10003} component={P10003} />
        <Route path={PathPortfolio.PAGE_NOT_FOUND} component={PageNotFound} />
      </Switch>
    );
  }
}

export default PortfolioRouting;