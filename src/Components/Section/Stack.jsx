import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { Stack as MyStack } from '../Stack';
import stacks from '../../Service/stack.json';

const Stacks = () => {
  return (
    <Stack
      as="section"
      minHeight="70vh"
      bg="gray.100"
      color="gray.100"
      spacing={5}
      px={{ base: '1rem', lg: '10rem' }}
      py="5rem"
      id="mystack"
      data-testid="stacks"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        color="gray.800"
        marginBottom={{ base: 1, lg: 50 }}
      >
        Tech Stack
      </Heading>
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

export default Stacks;
