import React, { Component } from 'react';
import './style.scss';
import Button from '@material/react-button';

class ButtonIconTelegram extends Component {
  render() {
    return (
      <a target='_blank' rel='noopener noreferrer' href={this.props.url} className="button-icon-link">
        <Button
          raised
          className={this.props.className}
          outlined={this.props.outlined}
          icon={<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"/><path d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"/><path d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"/></svg>}
          onClick={() => console.log('clicked!')}
        >
          {this.props.label}
        </Button>
      </a>
    );
  }
}

export default ButtonIconTelegram;