import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaDisease } from 'react-icons/fa';
import { projectStyles as sx } from './Project.styles';

export default function Project({ project }) {
  const color = useColorModeValue('gray.800', 'gray.200');
  return (
    <Flex sx={sx.container} color={color} data-aos="fade-up">
      <Flex sx={sx.slider}>
        <Image
          src={project.preview_image}
          objectFit="cover"
          height="100%"
          w="100%"
          data-testid="image"
        />
      </Flex>
      <Flex sx={sx.wrap} gap={2}>
        <Flex justifyContent="space-between">
          <HStack>
            <FaDisease />
            <Heading sx={sx.projectTitle}>{project.title}</Heading>
          </HStack>
          <Link
            href={project.demo}
            target="_blank"
            background="gray.800"
            rounded="lg"
            width="min-content"
            paddingY={1}
            paddingX={2}
            color="white"
            fontSize={12}
          >
            Demo
          </Link>
        </Flex>
        <Box>
          <Text sx={sx.title}>Description</Text>
          <Text sx={sx.text}>{project.description}</Text>
        </Box>
        <Box>
          <Text sx={sx.title}>Technology Used</Text>
          <Text sx={sx.text}>{project.technology_used}</Text>
        </Box>
        <Box>
          <Text sx={sx.title}>Repository</Text>
          <Text sx={sx.text}>{project.repository}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
