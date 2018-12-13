import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Path, PathPortfolio } from 'Path';
import './style.scss';

import PageNotFoundScene from 'scenes/page_not_found/PageNotFoundScene';
import PortfolioScene from 'scenes/portfolio/PortfolioScene';

import P10000 from 'scenes/portfolio/projects/p10000/P10000';
import P10001 from 'scenes/portfolio/projects/p10001/P10001';
import P10002 from 'scenes/portfolio/projects/p10002/P10002';
import P10003 from 'scenes/portfolio/projects/p10003/P10003';
import P10004 from 'scenes/portfolio/projects/p10004/P10004';
import P10005 from 'scenes/portfolio/projects/p10005/P10005';

import W40000 from 'scenes/portfolio/work_experiences/w40000/W40000';
import W40001 from 'scenes/portfolio/work_experiences/w40001/W40001';

class PortfolioRouting extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={Path.PORTFOLIO} component={PortfolioScene} />

        <Route path={PathPortfolio.P10000} component={P10000} />
        <Route path={PathPortfolio.P10001} component={P10001} />
        <Route path={PathPortfolio.P10002} component={P10002} />
        <Route path={PathPortfolio.P10003} component={P10003} />
        <Route path={PathPortfolio.P10004} component={P10004} />
        <Route path={PathPortfolio.P10005} component={P10005} />

        <Route path={PathPortfolio.W40000} component={W40000} />
        <Route path={PathPortfolio.W40001} component={W40001} />

        <Route path={PathPortfolio.PAGE_NOT_FOUND} component={PageNotFoundScene} />
      </Switch>
    );
  }
}

export default PortfolioRouting;