import React, { Component } from 'react';
import './style.scss';
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import Chips from 'react-chips';

class XXX extends Component {
  state = {chosenKeywords: []};

  handleChange = (e) => {
    this.setState({chosenKeywords: e});
  }

  render() {
    return (
      <div className="XXX">
      	<Chips
          value={this.state.chosenKeywords}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          suggestions={this.props.suggestions}
        />
      </div>
    );
  }
}

export default XXX;