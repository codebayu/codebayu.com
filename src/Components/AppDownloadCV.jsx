import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppDownloadCV = () => {
  const navigate = useNavigate();
  return (
    <Flex justifyContent="end">
      <Button
        variant="ghost"
        rounded="lg"
        color="gray.200"
        px="3rem"
        py="1.5rem"
        fontWeight="bold"
        _hover={{
          bg: '#3f4479',
          color: 'gray.200',
          transition: 'all .2s ease-in-out',
          transform: 'scale(1.1)',
        }}
        onClick={() => {
          navigate(window.open('./Bayu-Setiawan-Frontend-Developer.pdf'));
        }}
      >
        Download My CV
      </Button>
    </Flex>
  );
};

export default AppDownloadCV;