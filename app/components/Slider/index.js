/**
*
* Slider
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

import LeftIcon from 'react-icons/lib/fa/chevron-left';
import RightIcon from 'react-icons/lib/fa/chevron-right';

export default class Slider extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: ['birds.jpg', 'mountain.jpg', 'float.jpg', 'waterfall.jpg'],
      activeIndex:0
    }
  }

  renderImage = () => {
    let images = this.state.images;
    let activeIndex = this.state.activeIndex;

    for(let i = 0; i < images.length; i++)
    {
      if(i === activeIndex)
      {
        return images[i];
      }
    }
  }

  nextImage = () => {
    let images = this.state.images;
    let activeIndex = this.state.activeIndex;

    if(activeIndex + 1 < images.length)
    {
      this.setState({
        activeIndex: activeIndex + 1,
      })
    }
    else
    {
      this.setState({
        activeIndex: 0,
      })
    }
  }

  previousImage = () => {
    let images = this.state.images;
    let activeIndex = this.state.activeIndex;

    if(activeIndex - 1 > 0)
    {
      this.setState({
        activeIndex: activeIndex - 1,
      })
    }
    else
    {
      this.setState({
        activeIndex: images.length - 1,
      })
    }
  }

  componentDidMount() {
    this.autoSlide();
  }

  autoSlide = () => {
    let _this = this;
    let interval = setInterval(function(){
      _this.nextImage();
    }, 5000);
    this.setState({
      theInterval: interval
    })
  }

  stopAutoSlide = () => {
    clearInterval(this.state.theInterval);
  }

  render() {
    return (
      <div>
        <div className="slider">
          <img className="slideImage" src={require('../../images/' + this.renderImage())}/>
          <LeftIcon className="sliderIcon" onClick={this.stopAutoSlide, this.previousImage} />
          <RightIcon className="sliderIcon" onClick={this.stopAutoSlide, this.nextImage}/>
        </div>
      </div>
    );
  }
}

Slider.contextTypes = {
  router: React.PropTypes.object
};
