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

  getDisplayCell = (key, value) => (<Cell columns={4} key={key}>
                                      <CardTheme title={value.title} 
                                                 subtitle={value.period} 
                                                 info={value.desc} 
                                                 img={value.image} 
                                                 url={value.url} />
                                    </Cell>);


  render() {
    var onDisplayProjects = [];
    var onDisplayWorkExperiences = [];
    
    if (this.state.chosenKeywords.length > 0) {
      var highPriorityProjects = [];
      var midPriorityProjects = [];

      this.projects.map((arr) => {
        var tags = arr[1].tags;
        var keywords = arr[1].keywords;

        if (this.state.chosenKeywords.some(word=> tags.includes(word))) {
          highPriorityProjects.push(this.getDisplayCell(arr[0], arr[1]));
        }
        else if (this.state.chosenKeywords.some(word=> keywords.includes(word))) {
          midPriorityProjects.push(this.getDisplayCell(arr[0], arr[1]));
        }

        onDisplayProjects = highPriorityProjects.concat(midPriorityProjects);
      });

      var highPriorityWorkExperiences = [];
      var midPriorityWorkExperiences = [];

      this.workExperiences.map((arr) => {
        var tags = arr[1].tags;
        var keywords = arr[1].keywords;

        if (this.state.chosenKeywords.some(word=> tags.includes(word))) {
          highPriorityWorkExperiences.push(this.getDisplayCell(arr[0], arr[1]));
        }
        else if (this.state.chosenKeywords.some(word=> keywords.includes(word))) {
          midPriorityWorkExperiences.push(this.getDisplayCell(arr[0], arr[1]));
        }

        onDisplayWorkExperiences = highPriorityWorkExperiences.concat(midPriorityWorkExperiences);
      });
    }
    else {
      this.projects.map((arr) => {
        onDisplayProjects.push(this.getDisplayCell(arr[0], arr[1]));
      });

      this.workExperiences.map((arr) => {
        onDisplayWorkExperiences.push(this.getDisplayCell(arr[0], arr[1]));
      });
    }





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

            
            {onDisplayProjects.map((item) => item)}
            {onDisplayWorkExperiences.map((item) => item)}

      	  </Row>
      	</Grid>
      </div>
    );
  }
}

export default PortfolioScene;
