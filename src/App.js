import React from 'react';
import { Box } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import { usePageViewGA } from './Hooks/usePageViewHooks';
import { useAos } from './Hooks/useAos';

import Experience from './Components/Section/Experience';
import Project from './Components/Section/Project';
import Stacks from './Components/Section/Stack';
import AppBanner from './Components/AppBanner';
import AppBubble from './Components/AppBubble';

import { AppNavbar } from './Components/AppNavbar';
import { AppFooter } from './Components/AppFooter';

function App() {
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
        <AppBubble />
        <AppNavbar />
        <AppBanner />
      </Box>
      <Experience />
      <Project />
      <Stacks />
      <AppFooter />
    </Box>
  );
}

export default App;
