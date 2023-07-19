import React, { useEffect } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

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
import configCatValue from './Service/configcat.json';
import FramerMotion from './Components/FramerMotion';
import { Info } from './Components/Section/Info';

function App() {
  usePageViewGA();
  useAos();

  const { value, loading } = useFeatureFlag(
    'flagsPortfolio',
    JSON.stringify(configCatValue)
  );
  const parseValue = JSON.parse(value);
  const featureBannerValue = parseValue[0].value;
  const featureExperienceValue = parseValue[1].value;
  const featureProjectsValue = parseValue[2].value;
  const featureMapsValue = parseValue[3].value;
  const featureStackValue = parseValue[4].value;
  const featureDownloadCvValue = parseValue[5].value;
  const featureDarkModeValue = parseValue[6].value;
  const featureFooterValue = parseValue[7].value;
  const featureInfoValue = parseValue[7].value;

  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');

  useEffect(() => {
    ReactGA.initialize('G-HX2V9VBWRR');
  }, []);

  if (loading)
    return (
      <Flex
        h="100vh"
        flexDir="column"
        alignItems="center"
        gap={5}
        justifyContent="center"
      >
        <FramerMotion />
        <Text fontWeight="semibold">Currently making magic</Text>
      </Flex>
    );

  return (
    <Box>
      <Navbar
        featureDownloadCvValue={featureDownloadCvValue}
        featureDarkModeValue={featureDarkModeValue}
      />
      {featureBannerValue && (
        <Box
          as="section"
          height={{ base: '100%', lg: '100vh' }}
          bg={bg}
          color={color}
          px={{ base: '1rem', lg: '10rem' }}
          id="home"
          py={{ base: 5, lg: '5rem' }}
        >
          <Banner />
        </Box>
      )}
      <Popup />
      {featureExperienceValue && <Experience />}
      {featureStackValue && <Stacks />}
      {featureProjectsValue && <ProjectSection />}
      {featureInfoValue && <Info />}
      {featureMapsValue && <Maps />}
      {featureFooterValue && <Footer />}
    </Box>
  );
}

export default App;
