import React, { Component } from 'react';
import './style.scss';

import Chips from 'react-chips';

class SearchBar extends Component {
  state = {
    displayHelper: false
  }

  handleFocus = () => {
    this.setState({displayHelper: true});
  }

  handleBlur = () => {
    this.setState({displayHelper: false});
  }

  render() {
    return (
      <div className="searchbar" onFocus={this.handleFocus} onBlur={this.handleBlur}>
      	<Chips
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          suggestions={this.props.suggestions}
        />
        <div className={"helper-container " + (this.state.displayHelper ? "showHelper" : "hideHelper")}>
          <p className="text">{this.props.helperText}</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;