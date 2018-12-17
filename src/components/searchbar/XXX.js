import React, { Component } from 'react';
import './style.scss';
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import {ChipSet, Chip} from '@material/react-chips';

class XXX extends Component {
  state = {value: '',
           filter: []
          };

  clearInput = () => {
    this.setState({value: ''});
  }

  onKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        this.onEnter(e);
        break;
      case 'Backspace':
        this.onBackspace(e);
        break;
    }
  }

  onEnter = (e) => {
    if (e.target.value!=='' && !this.state.filter.includes(e.target.value)) {
      this.state.filter.push(e.target.value);
      this.clearInput();
      console.log(this.state.filter);
    }
    else {
      this.clearInput();
    }
  }

  onBackspace = (e) => {
    if (!this.state.value && this.state.filter.length>0) {
      this.state.filter.pop();
      this.setState({filter: this.state.filter});
    }
  }

  render() {
    return (
      <div className="xxx">
        <div className="searchbar-container">
          <ChipSet className="searchbar-chipset">
            {this.state.filter.map((label) => <Chip label={label}
                                                    id={label} 
                                                    key={label} 
                                                    removeIcon={<MaterialIcon icon='cancel' />} />)}
          </ChipSet>
          <div className="searchbar-input-container">
            <input className="input-area"
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

export default XXX;