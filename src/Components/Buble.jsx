import { Box } from '@chakra-ui/react';
import React from 'react';

const Buble = () => {
  return (
    <Box
      data-testid="buble"
      width="30rem"
      height="30rem"
      background="gray.500"
      borderRadius="15rem"
      position="absolute"
      top={-200}
      left={-200}
      _hover={{
        width: '40rem',
        height: '40rem',
        borderRadius: '20rem',
        top: -195,
        right: -185,
        transition: '1s',
      }}
    />
  );
};

export default Buble;