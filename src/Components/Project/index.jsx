import {
  Box,
  Flex,
  HStack,
  Heading,
  Image as ChakraImage,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaDisease } from 'react-icons/fa';
import { projectStyles as sx } from './Project.styles';
import { Blurhash } from 'react-blurhash';

export default function Project({ project }) {
  const color = useColorModeValue('gray.800', 'gray.200');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = project.preview_image;
  }, [project.preview_image]);

  return (
    <Flex sx={sx.container} color={color}>
      <Flex sx={sx.slider}>
        {!imageLoaded ? (
          <Blurhash
            hash={project.hash}
            width={400}
            height={200}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        ) : (
          <ChakraImage
            src={project.preview_image}
            alt="projects"
            objectFit="cover"
            style={{ width: '100%', height: 200, minWidth: '380px' }}
            data-testid="image"
          />
        )}
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
            background="gray.700"
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
      </Flex>
    </Flex>
  );
}
