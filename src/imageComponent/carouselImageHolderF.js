import React from 'react';
import CarouselImageElement from './carouselImage';
import CarouselDualImageElement from './carouselImageDual';
import axios from 'axios';
import {useEffect, useState} from 'react';
import configData from "../config.json";
import LoadingScreen from '../loadingScreen/loadingScreen';

const CarouselImageHolderF = () => {
  const [imageData, setImageData] = useState({imageData : {}});


  useEffect(() => {
    console.log("called1");
    const interval = setInterval(() => {
      console.log("called2");
      //Image Code: D/ /P/W
      axios.get(configData['backend-server-url']+`/next?code=`+configData['image-code'])
      .then(res => {
        const imageData = res.data;
        // console.log(imageData);
        setImageData(imageData);
      }
      )
    }, configData['slide-time'])

    return () => clearInterval(interval);
  }, [])


  return (
    imageData.numberOfImages ? (imageData.numberOfImages) === 1 ? <CarouselImageElement image={imageData} /> : <CarouselDualImageElement image={imageData} /> : <LoadingScreen />
  );
};

export default CarouselImageHolderF;