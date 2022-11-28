import React from 'react';
import CarouselText from './carouselText';

class CarouselImageElement extends React.Component {

  render() {
    const myElement =
      <div className="main-container">
        {
          <div>
            <img style={{
              objectPosition: this.props.image.images[0].allignVertical
            }} className='my-image carousel-image' alt='logo' src={"/image/" + this.props.image.images[0].path} />
            {this.props.image.people ? <CarouselText people={this.props.image.people} /> : null}
          </div>
        }

      </div>;
    return myElement;
  }
}

export default CarouselImageElement;
