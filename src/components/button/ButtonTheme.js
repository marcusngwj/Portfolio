import React, {Component} from 'react';
import Button from '@material/react-button';
import './style.scss';

class ButtonTheme extends Component {
  render() {
    return (
      <Button
        raised
        className='button-theme'
        onClick={() => console.log('clicked!')}
      >
        Save Me!
      </Button>
    );
  }
}

export default ButtonTheme;