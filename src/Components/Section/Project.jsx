import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Project from '../Project';

import projects from '../../Service/projects.json';

const ProjectSection = () => {
  return (
    <Stack
      as="section"
      overflow="hidden"
      bg="#353a6b"
      color="gray.200"
      spacing={5}
      px={{ base: '1rem', lg: '4rem' }}
      pt="2rem"
      pb="6rem"
      id="myproject"
      position="relative"
      height="100%"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        color="gray.200"
        marginBottom={{ base: 1, lg: 50 }}
      >
        My Project
      </Heading>
      <Stack spacing={10} position="relative">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Stack>
      <Box
        width="50rem"
        height="50rem"
        background="#3f4479"
        borderRadius="25rem"
        position="absolute"
        right={-500}
        top={300}
      />
    </Stack>
  );
};

export default ProjectSection;
