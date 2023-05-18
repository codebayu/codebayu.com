import { Box, Image } from '@chakra-ui/react';
import 'keen-slider/keen-slider.min.css';
import './Slider.css';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

export default function CustomSlider({ image }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const initialState = {
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  };
  const [sliderRef, instanceRef] = useKeenSlider(initialState);
  return (
    <Box
      data-testid='slider'
      width={{ base: '20rem', lg: '30rem' }}
      alignItems='center'
      rounded='xl'
      display="flex"
      flexDir='column'
    >
      <Box ref={sliderRef} className='keen-slider'>
        {image && image.map((img, idx) => (
          <Image
            src={img}
            key={idx}
            className='keen-slider__slide'
            objectFit='contain'
          />
        ))}
      </Box>
      {loaded && instanceRef.current && (
        <Box className='dots'>
          {[
            ...Array(instanceRef.current.track.details?.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
