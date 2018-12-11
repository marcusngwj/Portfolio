import React, {Component} from 'react';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import './style.scss';
import abc from './abc.png';

class CardTheme extends Component {
  render() {
    return (
      <Card className='card-theme'>
        <CardPrimaryContent>
          <CardMedia imageUrl={abc} wide='false' />
          <div className='content__primary'>
            <h2 className="title">Our Changing Planet</h2>
            <h3 className='subtitle'>by Kurt Wagner</h3>
          </div>
          <div className='content__secondary'>
            Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </CardPrimaryContent>

        <CardActions>
          <CardActionButtons>
            <button>Show Tags</button>
          </CardActionButtons>
        </CardActions>
      </Card>
    );
  }
}

export default CardTheme;