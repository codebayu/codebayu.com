import { Box } from '@chakra-ui/react';
import React from 'react';
import { bubleStyles as sx } from './Buble.styles';

const Buble = () => {
  return (
    <Box sx={sx.container} data-testid="buble" />
  );
};

export default Buble;