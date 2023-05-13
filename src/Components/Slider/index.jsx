import { Box } from '@chakra-ui/react';
import React from 'react';

export default function CustomSlider({ image }) {
  return (
    <Box
      data-testid='slider'
      width={{ base: '20rem', lg: '35rem' }}
      height='100%'
      bg='#555d9e'
      alignItems='center'
      rounded='xl'
      paddingX={{ base: '0.5rem', lg: '2rem' }}
    >
      slider
    </Box>
  );
}
