import React, {Component} from 'react';
import './style.scss';

import PortfolioMetadata from './PortfolioMetadata.js';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import SearchBar from 'components/searchbar/SearchBar';
import CardTheme from 'components/card/CardTheme';

class PortfolioScene extends Component {
  render() {
    return (
      <div className="portfolio-scene">
      	<Grid>
      	  <Row>
      	  	<Cell columns={12}><SearchBar /></Cell>
      	  </Row>
      	  <Row>
      	  	<Cell columns={4}><CardTheme /></Cell>
      	  	<Cell columns={4}><CardTheme /></Cell>
      	  	<Cell columns={4}><CardTheme /></Cell>
      	  </Row>
      	</Grid>
      </div>
    );
  }
}

export default PortfolioScene;