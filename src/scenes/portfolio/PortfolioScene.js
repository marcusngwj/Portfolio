import React, { Component } from 'react';
import './style.scss';

import PortfolioMetadata from './PortfolioMetadata.js';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import CardTheme from 'components/card/CardTheme';

import SearchBar from 'components/searchbar/SearchBar';
import { Skill, Tool, Exp, Misc } from './Keywords';

class PortfolioScene extends Component {
  state = {
    chosenKeywords: []
  };

  metaData = new PortfolioMetadata();
  projects = this.getArrayOrderByKeyDescending(this.metaData.projects);
  workExperiences = this.getArrayOrderByKeyDescending(this.metaData.workExperiences);

  getSuggestions() {
    var skillArr = Object.keys(Skill).map(function(key) { return Skill[key]; });
    var toolArr = Object.keys(Tool).map(function(key) { return Tool[key]; });
    var expArr = Object.keys(Exp).map(function(key) { return Exp[key]; });
    var miscArr = Object.keys(Misc).map(function(key) { return Misc[key]; });

    return ((skillArr.concat(toolArr)).concat(expArr)).concat(miscArr);
  }

  getArrayOrderByKeyDescending(dict) {
    var items = Object.keys(dict).map(function(key) { return [key, dict[key]]; });
    items.sort(function(first, second) { return second[0] - first[0]; });
    this.getSuggestions();
    return items;
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({chosenKeywords: e});
  }

  render() {
    return (
      <div className="portfolio-scene">
      	<Grid>
      	  <Row>
      	  	<Cell columns={12}>
              <SearchBar placeholder='Search using skills, tools or experiences' 
                         helperText="Eg. Java / React / Mobile Development"
                         suggestions={this.getSuggestions()} 
                         value={this.state.chosenKeywords}
                         onChange={this.handleChange} />
            </Cell>
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
