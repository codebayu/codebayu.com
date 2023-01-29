import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

const AppDownloadCV = () => {
  const navigate = useNavigate();
  const onDownloadCV = () => {
    ReactGA.event({
      category: 'Download CV',
      action: 'test action',
      label: 'test label',
      value: 'success'
    })
    navigate(window.open('./Bayu-Setiawan-Frontend-Developer.pdf'));
  }
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
        onClick={onDownloadCV}
      >
        Download My CV
      </Button>
    </Flex>
  );
};

export default AppDownloadCV;