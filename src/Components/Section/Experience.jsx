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
      bg="#353a6b"
      color="black"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      pt="2rem"
      pb="6rem"
      id="experience"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        color="gray.200"
        marginBottom={{ base: 1, lg: 50 }}
      >
        My Experience___
      </Heading>
      <SimpleGrid spacing={10}>
        {experience.map((item, index) => (
          <Flex
            key={index}
            flexDir={{ base: 'column', lg: 'row' }}
            width="100%"
            p={5}
            color="gray.200"
            border="1px solid #9087b7"
            borderRadius="20px"
            data-aos="fade-up"
          >
            <Stack spacing={5}>
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
