import { Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Project from '../Project';

import projects from '../../Service/projects.json';

const ProjectSection = () => {
  const bg = useColorModeValue('#eeeeee', 'gray.800');
  const color = useColorModeValue('gray.800', 'gray.200');
  return (
    <Stack
      as="section"
      overflow="hidden"
      bg={bg}
      color={color}
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      pt="7rem"
      pb="6rem"
      id="projects"
      position="relative"
      height="100%"
      data-testid="project-section"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
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
