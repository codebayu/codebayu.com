import { HStack, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Stack as MyStack } from '../Components/Stack';
import stacks from '../Service/stack.json';
import { FaSwatchbook } from 'react-icons/fa';

export const Stacks = () => {
  return (
    <Stack
      as="section"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      py={{ base: '3rem', lg: '7rem' }}
      id="mystack"
      data-testid="stacks"
      minH="100vh"
    >
      <HStack data-aos="fade-down">
        <FaSwatchbook size={30} />
        <Heading fontSize={{ base: 20, lg: 30 }}>Tech Stack</Heading>
      </HStack>
      <Text data-aos="fade-down">List of my hard skills in programming</Text>
      <SimpleGrid columns={[2, null, 6]} spacing="40px">
        {stacks.map((stack, index) => (
          <MyStack
            key={index}
            src={stack.logo}
            label={stack.label}
            labelColor={stack.labelColor}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
