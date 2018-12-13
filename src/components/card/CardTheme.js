import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";
import './style.scss';

class CardTheme extends Component {
  render() {
    return (
      <Card className="card-theme">
        <Link to={this.props.url} className="card-link">
          <CardPrimaryContent>
            <CardMedia imageUrl={this.props.img} wide='false' />
            <div className="content__primary">
              <h2 className="title">{this.props.title}</h2>
              <h3 className="subtitle">{this.props.subtitle}</h3>
            </div>
            <div className="content__secondary">
              {this.props.info}
            </div>
          </CardPrimaryContent>
        </Link>
      </Card>
    );
  }
}

export default CardTheme;