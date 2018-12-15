import React, { Component } from 'react';
import './style.scss';
import Button from '@material/react-button';
import MaterialIcon from '@material/react-material-icon';

class ButtonIconPng extends Component {
  render() {
    return (
      <a target='_blank' rel='noopener noreferrer' href={this.props.url} className="button-icon-link">
        <Button
          raised
          className={this.props.className}
          outlined={this.props.outlined}
          icon={<img src={this.props.icon} />}
        >
          {this.props.label}
        </Button>
      </a>
    );
  }
}

export default ButtonIconPng;