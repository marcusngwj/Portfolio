import React, { Component } from 'react';
import './style.scss';

import PortfolioMetadata from './PortfolioMetadata.js';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import SearchBar from 'components/searchbar/SearchBar';
import CardTheme from 'components/card/CardTheme';

import XXX from 'components/searchbar/XXX';

class PortfolioScene extends Component {
  metaData = new PortfolioMetadata();
  projects = this.getArrayOrderByKeyDescending(this.metaData.projects);
  workExperiences = this.getArrayOrderByKeyDescending(this.metaData.workExperiences);

  getArrayOrderByKeyDescending(dict) {
    var items = Object.keys(dict).map(function(key) { return [key, dict[key]]; });
    items.sort(function(first, second) { return second[0] - first[0]; });
    return items;
  };

  render() {
    return (
      <div className="portfolio-scene">
      	<Grid>
      	  <Row>
            <Cell columns={12}><XXX placeholder='Search for things'/></Cell>
      	  </Row>
      	  <Row className="content">
      	  	{this.projects.map((arr) => <Cell columns={4} key={arr[0]}>
                                          <CardTheme title={arr[1].title} 
                                                     subtitle={arr[1].period} 
                                                     info={arr[1].desc} 
                                                     img={arr[1].image} 
                                                     url={arr[1].url} />
                                        </Cell>)}

      	  	{this.workExperiences.map((arr) => <Cell columns={4} key={arr[0]}>
                                                 <CardTheme title={arr[1].company} 
                                                            subtitle={arr[1].period} 
                                                            info={arr[1].desc} 
                                                            img={arr[1].image} 
                                                            url={arr[1].url}/>
                                               </Cell>)}
      	  </Row>
      	</Grid>
      </div>
    );
  }
}

export default PortfolioScene;
