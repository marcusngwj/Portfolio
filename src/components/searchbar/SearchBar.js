import React, { Component } from 'react';
import './style.scss';

import Chips from 'react-chips';


class SearchBar extends Component {
  state = {chosenKeywords: []};

  handleChange = (e) => {
    this.setState({chosenKeywords: e});
  }

  render() {
    return (
      <div className="searchbar">
      	<Chips {...this.props}
          value={this.state.chosenKeywords}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          suggestions={this.props.suggestions}
        />
      </div>
    );
  }
}

export default SearchBar;