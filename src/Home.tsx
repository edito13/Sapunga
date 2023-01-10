import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const Home = () => {
  
  const images = ['1', '2','3'];
  const slides = images.map(url => (
    <Carousel.Slide key={url}>
      <Image style={{width: '100vw', height: '100vh'}} src={`./assets/${url}.png`} />
    </Carousel.Slide>
  ))
  
  return (
    <Carousel mx="auto" withIndicators loop>
      {slides}
    </Carousel>
  )
}

export default Home

