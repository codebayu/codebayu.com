import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import CustomSlider from '../Slider';
import { projectStyles as sx } from './Project.styles';

export default function Project({ project }) {
  const color = useColorModeValue('gray.800', 'gray.200');
  return (
    <Flex sx={sx.container} color={color} data-aos="fade-up">
      <Flex sx={sx.slider}>
        <CustomSlider image={project.preview_image} />
      </Flex>
      <Flex sx={sx.wrap}>
        <Heading sx={sx.projectTitle}>
          {project.title}
        </Heading>
        <Box mb={4}>
          <Text sx={sx.title}>
            Description
          </Text>
          <Text>{project.description}</Text>
        </Box>
        <Box mb={4}>
          <Text sx={sx.title}>
            Technology Used
          </Text>
          <Text>{project.technology_used}</Text>
        </Box>
        <Box mb={4}>
          <Text sx={sx.title}>
            Repository
          </Text>
          <Text>{project.repository}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
