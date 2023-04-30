import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import { Stack as MyStack } from '../Stack';
import stacks from '../../Service/stack.json';

const Stacks = () => {
  return (
    <Stack
      as="section"
      minHeight="70vh"
      bg="#353a6b"
      color="gray.200"
      spacing={5}
      px={{ base: '1rem', lg: '4rem' }}
      pt="2rem"
      id="mystack"
      bgGradient="linear-gradient(180deg, #353a6b 30%, rgba(149,159,244,1) 100%)"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        color="gray.200"
        marginBottom={{ base: 1, lg: 50 }}
      >
        My Stack___
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
