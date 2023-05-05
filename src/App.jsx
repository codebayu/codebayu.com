import React from 'react';
import { Box } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

import { usePageViewGA } from './Hooks/usePageViewHooks';
import { useAos } from './Hooks/useAos';

import Experience from './Components/Section/Experience';
import Stacks from './Components/Section/Stack';
import Banner from './Components/Banner';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';

function App() {
  ReactGA.initialize('G-HX2V9VBWRR');
  usePageViewGA();
  useAos();

  return (
    <Box>
      <Box
        as="section"
        height={{ base: '100%', lg: '100vh' }}
        bg="gray.100"
        color="#000"
        px={{ base: '1rem', lg: '10rem' }}
        id="home"
      >
        <Navbar />
        <Banner />
      </Box>
      <Experience />
      <Stacks />
      <Footer />
    </Box>
  );
}

export default App;
