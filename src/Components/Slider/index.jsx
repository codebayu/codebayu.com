import { Box, Button, Flex, Image } from '@chakra-ui/react';
import 'keen-slider/keen-slider.min.css';
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
      data-testid="slider"
      alignItems="center"
      rounded="xl"
      display="flex"
      flexDir="column"
      width={{ base: '20rem', lg: '30rem' }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {image &&
          image.map((img, idx) => (
            <Image
              data-testid={`slide-${idx}`}
              src={img}
              alt={img + idx}
              key={idx}
              sizes="100px"
              loading="lazy"
              className="keen-slider__slide"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          ))}
      </Box>
      {loaded && instanceRef.current && (
        <Flex className="dots" mt={3} gap={2}>
          {[
            ...Array(instanceRef.current.track.details?.slides.length).keys(),
          ].map((idx) => (
            <Button
              aria-label="dots"
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              bg="gray.300"
              w="5px"
              h="5px"
              _focus={{ bg: 'black' }}
              _active={{ bg: 'gray.300' }}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
}
