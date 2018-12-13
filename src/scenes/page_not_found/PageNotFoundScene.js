import React, { Component } from 'react';
import './style.scss';

import {Cell, Grid, Row} from '@material/react-layout-grid';

class PageNotFoundScene extends Component {
  render() {
    return (
      <div className="portfolio-scene">
      	<Grid>
      	  <Row>
      	  	<Cell columns={12}><h1>Error 404: Page Not Found</h1></Cell>
      	  </Row>
      	</Grid>
      </div>
    );
  }
}

export default PageNotFoundScene;