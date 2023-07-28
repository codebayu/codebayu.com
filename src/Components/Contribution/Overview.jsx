import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Overview = ({ label, value, unit = '' }) => {
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const valueColor = useColorModeValue('green.400', 'green.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const bg = useColorModeValue('#fafafa', 'gray.900');
  return (
    <Box
      data-aos="fade-up"
      bg={bg}
      border="1px"
      borderColor={borderColor}
      borderRadius="xl"
      px={4}
      w="100%"
      pt={2}
    >
      <Text data-testid="label" textTransform="capitalize" color={textColor}>
        {label}
      </Text>
      <Text
        data-testid="value"
        color={valueColor}
        fontSize="3xl"
        fontWeight="semibold"
      >
        {value}{' '}
        <Text as="span" color={textColor} fontSize="md" fontWeight="normal">
          {unit}
        </Text>
      </Text>
    </Box>
  );
};
