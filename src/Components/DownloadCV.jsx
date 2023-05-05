import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

const DownloadCV = () => {
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
    <Flex justifyContent="end" data-testid="download-cv">
      <Button
        variant="ghost"
        rounded="lg"
        color="gray.800"
        px="3rem"
        py="1.5rem"
        fontWeight="bold"
        _hover={{
          bg: 'gray.300',
          color: '#000',
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

export default DownloadCV;