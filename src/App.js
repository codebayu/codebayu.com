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
import Buble from './Components/Buble';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import ProjectSection from './Components/Section/Project';

function App() {
  ReactGA.initialize('G-HX2V9VBWRR');
  usePageViewGA();
  useAos();

  return (
    <Box>
      <Box
        as="section"
        height={{ base: '100%', lg: '100vh' }}
        bg="#353a6b"
        color="white"
        py="2rem"
        px={{ base: '1rem', lg: '10rem' }}
        id="home"
      >
        <Buble />
        <Navbar />
        <Banner />
      </Box>
      <Experience />
      <ProjectSection />
      <Stacks />
      <Footer />
    </Box>
  );
}

export default App;
