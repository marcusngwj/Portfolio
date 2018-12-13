import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Path } from './Path';
import './App.scss';

import NavBar from 'components/navbar/NavBar';
import PageNotFound from 'scenes/page_not_found/PageNotFound';
import HomeScene from 'scenes/home/HomeScene';
import PortfolioScene from 'scenes/portfolio/PortfolioScene';
import PortfolioRouting from 'scenes/portfolio/PortfolioRouting';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path={Path.HOME} component={HomeScene} />
            <Route path={Path.PORTFOLIO} component={PortfolioRouting} />
            <Route path={Path.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
