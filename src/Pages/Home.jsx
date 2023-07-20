import { Box } from '@chakra-ui/react';
import React from 'react';
import Banner from '../Components/Banner';

export const Home = () => {
  return (
    <Box
      as="section"
      height={{ base: '100%', lg: '100vh' }}
      px={{ base: '1rem', lg: '10rem' }}
      id="home"
      py={{ base: '3rem', lg: '5rem' }}
    >
      <Banner />
    </Box>
  );
};
