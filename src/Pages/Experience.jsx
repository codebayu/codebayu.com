import {
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaGrav } from 'react-icons/fa';

import experience from '../Service/experience.json';

export const Experience = () => {
  const color = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Stack
      as="section"
      minHeight="100%"
      spacing={2}
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '3rem', lg: '7rem' }}
      id="experience"
      data-testid="experience-section"
      zIndex={2}
      position="relative"
    >
      <HStack data-aos="fade-down">
        <FaGrav size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Experience</Heading>
      </HStack>
      <Text data-aos="fade-down">My proffesional career journey.</Text>
      <Flex flexDir="column" pt={5} gap={5}>
        {experience.map((item, index) => (
          <Flex
            key={index}
            flexDir={{ base: 'column', lg: 'row' }}
            width="100%"
            borderRadius="10px"
            data-aos="fade-up"
            border="1px"
            p={5}
            borderColor={color}
            shadow="md"
          >
            <Stack spacing={1} flex={1}>
              <Heading fontSize={20} fontWeight="semibold">
                {item.position} at {item.company}
              </Heading>
              <Text color={textColor}>~ {item.periods}</Text>
              <Stack spacing={1} pt={3}>
                <Heading size="sm">Technology Used</Heading>
                <HStack spacing={3} py={2}>
                  {item.technology_used.map((item, idx) => (
                    <Flex key={idx} h={5} alignItems="center">
                      <Image
                        src={item.logo}
                        alt={item.label}
                        width="100%"
                        height="100%"
                      />
                    </Flex>
                  ))}
                </HStack>
              </Stack>
            </Stack>
            <Stack spacing={1} flex={1} mt={{ base: 5, lg: 0 }}>
              <Heading size="sm">Description</Heading>
              <UnorderedList paddingLeft={5}>
                {item.projects?.map((project, index) => (
                  <ListItem
                    key={index}
                    fontSize={{ base: 12, lg: 14 }}
                    color={textColor}
                  >
                    {project}
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};
