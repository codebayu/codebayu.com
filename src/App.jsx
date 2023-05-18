import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import 'aos/dist/aos.css';
import ReactGA from 'react-ga';

import { usePageViewGA } from './Hooks/usePageViewHooks';
import { useAos } from './Hooks/useAos';

import Experience from './Components/Section/Experience';
import Stacks from './Components/Section/Stack';
import ProjectSection from './Components/Section/Project';
import Banner from './Components/Banner';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Maps } from './Components/Maps';
import { Lines } from './Components/Lines';

function App() {
  usePageViewGA();
  useAos();

  useEffect(() => {
    ReactGA.initialize('G-HX2V9VBWRR');
  }, []);

  return (
    <Box>
      <Lines />
      <Box
        as='section'
        height={{ base: '100%' }}
        bg='gray.100'
        color='#000'
        px={{ base: '1rem', lg: '10rem' }}
        id='home'
        py={1}
        pb={10}
      >
        <Navbar />
        <Banner />
      </Box>
      <Experience />
      <Stacks />
      <ProjectSection />
      <Maps />
      <Footer />
    </Box>
  );
}

export default App;
