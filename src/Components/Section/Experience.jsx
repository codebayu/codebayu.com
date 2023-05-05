import {
  Flex,
  Heading,
  HStack,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

import experience from '../../Service/experience.json';

const Experience = () => {
  return (
    <Stack
      as="section"
      minHeight="100%"
      bg="gray.300"
      color="black"
      spacing={2}
      px={{ base: '1rem', lg: '10rem' }}
      pt="7rem"
      pb="6rem"
      id="experience"
    >
      <Heading
        fontSize={{ base: 20, lg: 50 }}
        color="gray.800"
        marginBottom={{ base: 1, lg: 50 }}
      >
        My Experience
      </Heading>
      <SimpleGrid spacing={7}>
        {experience.map((item, index) => (
          <Flex
            key={index}
            flexDir={{ base: 'column', lg: 'row' }}
            width="100%"
            color="gray.800"
            borderRadius="20px"
            data-aos="fade-up"
          >
            <Stack spacing={2}>
              <Heading fontSize={30}>{item.position}</Heading>
              <HStack>
                <Heading size="sm">{item.company} |</Heading>
                <Text>{item.periods}</Text>
              </HStack>
              <Stack spacing={1}>
                <Heading size="sm">Technology Used</Heading>
                <Text>{item.technology_used}</Text>
              </Stack>
              <Stack spacing={1}>
                <Heading size="sm">Project ({item.project_note})</Heading>
                <UnorderedList paddingLeft={5}>
                  {item.projects?.map((project, index) => (
                    <ListItem key={index}>{project}</ListItem>
                  ))}
                </UnorderedList>
              </Stack>
            </Stack>
          </Flex>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Experience;
