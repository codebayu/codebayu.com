import { HStack, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Project from '../Components/Project';
import { FaBrain } from 'react-icons/fa';

import projects from '../Service/projects.json';

export const ProjectSection = () => {
  return (
    <Stack
      as="section"
      overflow="hidden"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '3rem', lg: '7rem' }}
      id="projects"
      position="relative"
      height="100%"
      data-testid="project-section"
    >
      <HStack data-aos="fade-down">
        <FaBrain size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Projects</Heading>
      </HStack>
      <Text data-aos="fade-down">
        Showcasing my passion for technology, design, and problem-solving
        through code.
      </Text>
      <Stack spacing={10} position="relative">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};
