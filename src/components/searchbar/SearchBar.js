import React, { Component } from 'react';
import './style.scss';
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {ChipSet, Chip} from '@material/react-chips';

class SearchBar extends Component {
  state = {value: '',
           chips: []
          };

  clearInput = () => {
    this.setState({value: ''});
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.onEnter(e);
    }
    else if (e.key === 'Backspace' || e.keyCode === 8) {
      this.onBackspace(e);
    }
  }

  onEnter = (e) => {
    if (e.target.value!=='' && !this.state.chips.includes(e.target.value)) {
      this.state.chips.push(e.target.value);
      this.clearInput();
    }
    else {
      this.clearInput();
    }
  }

  onBackspace = (e) => {
    if (!this.state.value && this.state.chips.length > 0) {
      this.state.chips.pop();
      this.setState({chips: this.state.chips});   // to ensure that a re-render occurs.
    }
  }

  removeValue = (toRemove, fromArr) => {
    var filtered = fromArr.filter(function(value, index, array) {
      return value !== toRemove;
    });
    return filtered;
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar-border-container">
          <div className="searchbar-content-container">
            <ChipSet input className="searchbar-chipset">
              {this.state.chips.map((label) => <Chip label={label}
                                                      id={label} 
                                                      key={label} 
                                                      removeIcon={<MaterialIcon icon='cancel' onClick={()=>{var originalArr = this.state.chips;
                                                                                                            var filteredArr = this.removeValue(label, originalArr);
                                                                                                            this.setState({chips: filteredArr});} }/>} 
                                                      
                                                      />)}
            </ChipSet>
            <input className="input-area"
              type='text'
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={(e) => this.setState({value: e.target.value})}
              onKeyDown={this.onKeyDown}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;