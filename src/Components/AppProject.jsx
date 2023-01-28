import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AppSlider from './AppSlider';

export default function AppProject({ project }) {
  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      alignItems={{ base: 'center', lg: 'start' }}
      justifyContent="start"
      width="100%"
      padding="1rem"
      zIndex={10}
      data-aos="fade-up"
    >
      <Flex rounded="xl" mb={{ base: 8, lg: 0 }} marginRight={10}>
        <AppSlider image={project.preview_image} />
      </Flex>
      <Flex textAlign="start" flexDir="column" color="gray.200">
        <Heading size="lg" fontWeight="bold" mb={5}>
          {project.title}
        </Heading>
        <Box mb={4}>
          <Heading size="sm" fontWeight="bold">
            Description
          </Heading>
          <Text>{project.description}</Text>
        </Box>
        <Box mb={4}>
          <Heading size="sm" fontWeight="bold">
            Technology Used
          </Heading>
          <Text>{project.technology_used}</Text>
        </Box>
        <Box mb={4}>
          <Heading size="sm" fontWeight="bold">
            Repository
          </Heading>
          <Text>{project.repository}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
