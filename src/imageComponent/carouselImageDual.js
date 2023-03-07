import React from 'react';
import CarouselText from './carouselText';

class CarouselDualImageElement extends React.Component {

  render() {
    const myElement =
      <div className="main-container no-cursor">
        <div>
          <div className='dualImgPortrait'>
            {this.props.image.images.map((image, index) =>
            (
              <img style={{
                objectPosition: this.props.image.images[0].allignVertical
              }} key={index} className='my-image carousel-image-por' alt='logo' src={"/image/" + image.path} />
            )
            )}
          </div>
          <CarouselText people={this.props.image.people} />
        </div>
      </div >;
    return myElement;
  }
}

export default CarouselDualImageElement;
