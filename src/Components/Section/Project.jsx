import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Project from '../Project';

import projects from '../../Service/projects.json';

const ProjectSection = () => {
  return (
    <Stack
      as="section"
      overflow="hidden"
      bg="#eeeeee"
      color="black"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      pt="2rem"
      pb="6rem"
      id="projects"
      position="relative"
      height="100%"
      data-testid="project-section"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        color="black"
        marginBottom={{ base: 1, lg: 50 }}
      >
        Projects
      </Heading>
      <Stack spacing={10} position="relative">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectSection;
