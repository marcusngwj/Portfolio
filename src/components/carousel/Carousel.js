import React, { Component } from 'react';
import './style.scss';
import Slider from "react-slick";

class Carousel extends Component {
  render() {
    return (
      <Slider {...this.props.settings}>
        {this.props.children}
      </Slider>
    );
  }
}

export default Carousel;