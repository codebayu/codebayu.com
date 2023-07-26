import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import 'aos/dist/aos.css';
import { useAos } from './Hooks/useAos';

import { useFeatureFlag } from 'configcat-react';
import configCatValue from './Service/configcat.json';
import FramerMotion from './Components/FramerMotion';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './Pages/Home';
import { Experience } from './Pages/Experience';
import { ProjectSection } from './Pages/Project';
import { Stacks } from './Pages/Stack';
import { Info } from './Pages/Info';
import { NotFound } from './Pages/NotFound';

function App() {
  useAos();

  const { value, loading } = useFeatureFlag(
    'flagsPortfolio',
    JSON.stringify(configCatValue)
  );
  const parseValue = JSON.parse(value);
  const featureDownloadCvValue = parseValue[5].value;
  const featureDarkModeValue = parseValue[6].value;

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
    <>
      <Navbar
        featureDownloadCvValue={featureDownloadCvValue}
        featureDarkModeValue={featureDarkModeValue}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
