import React, { useEffect } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

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
import { Popup } from './Components/Popup';

function App() {
  usePageViewGA();
  useAos();

  const bg = useColorModeValue('gray.100', 'gray.900')
  const color = useColorModeValue('black', 'white')

  useEffect(() => {
    ReactGA.initialize('G-HX2V9VBWRR');
  }, []);

  return (
    <Box>
      <Navbar />
      <Box
        as='section'
        height={{ base: '100%', lg: '100vh' }}
        bg={bg}
        color={color}
        px={{ base: '1rem', lg: '10rem' }}
        id='home'
        py={10}
      >
        <Banner />
      </Box>
      <Popup />
      <Experience />
      <Stacks />
      <ProjectSection />
      <Maps />
      <Footer />
    </Box>
  );
}

export default App;
