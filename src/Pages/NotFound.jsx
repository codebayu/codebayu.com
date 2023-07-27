import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FcDisclaimer } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const color = useColorModeValue('gray.700', 'gray.100');
  return (
    <Flex
      as="section"
      height={{ base: '100%', lg: '100vh' }}
      px={{ base: '1rem', lg: '10rem' }}
      id="not-found"
      py={{ base: '3rem', lg: '5rem' }}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap={5}
    >
      <FcDisclaimer data-testid="icon" style={{ width: 80, height: 80 }} />
      <Heading as="h1" color={color}>
        Ooups, page not found
      </Heading>
      <Text
        color="gray.500"
        maxW="50%"
        textAlign="center"
        data-testid="description"
      >
        We are very sorry for the inconvenience. Its look like you've trying to
        access a page that has been deleted or never even exist
      </Text>
      <Link to="/" data-testid="cta">
        Back to Homepage
      </Link>
    </Flex>
  );
};
