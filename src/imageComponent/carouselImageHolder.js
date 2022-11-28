// import React from 'react';
// import CarouselImageElement from './carouselImage';
// import CarouselDualImageElement from './carouselImageDual';
// import axios from 'axios';
// import {useEffect} from 'react';

// class CarouselImageHolder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstCall: true
//     };
//   }

//   v = useEffect(() => {
//     setInterval(() => {
//       this.fetchNextImage();
//     }, 10000)
//   }, [])

//   fetchNextImage() {
//     axios.get(`http://localhost:8080/next?code=W`)
//       .then(res => {
//         const imageData = res.data;
//         this.setState({ imageData });
//       }
//       )
//   }

//   // componentDidMount() {
//   //   if (this.state.firstCall?true:false) {
//   //     setInterval(() => {
//   //       this.fetchNextImage();
//   //     }, 10000)
//   //     this.setState({ firstCall: false });
//   //   }

//   // }
//   render() {
//     var myElement = <h1>Loading</h1>;
//     if (this.state.imageData != null) {
//       myElement =
//         (this.state.imageData.numberOfImages) === 1 ? <CarouselImageElement image={this.state.imageData} /> : <CarouselDualImageElement image={this.state.imageData} />
//         ;
//     }

//     return myElement;

//   }
// }

// export default CarouselImageHolder;
