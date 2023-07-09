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
import { useFeatureFlag } from 'configcat-react';

function App() {
  usePageViewGA();
  useAos();

  const { value: featureBannerValue } = useFeatureFlag('featureBanner', false);
  const { value: featureExperienceValue } = useFeatureFlag(
    'featureExperience',
    false
  );
  const { value: featureStackValue } = useFeatureFlag('featureStack', false);
  const { value: featureProjectsValue } = useFeatureFlag(
    'featureProjects',
    false
  );
  const { value: featureMapsValue } = useFeatureFlag('featureMaps', false);

  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');

  useEffect(() => {
    ReactGA.initialize('G-HX2V9VBWRR');
  }, []);

  return (
    <Box>
      <Navbar />
      {featureBannerValue && (
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
      )}
      <Popup />
      {featureExperienceValue && <Experience />}
      {featureStackValue && <Stacks />}
      {featureProjectsValue && <ProjectSection />}
      {featureMapsValue && <Maps />}
      <Footer />
    </Box>
  );
}

export default App;
