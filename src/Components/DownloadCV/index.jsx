import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { downloadCVStyles as sx } from './DownloadCV.styles';

const DownloadCV = () => {
  const navigate = useNavigate();
  const color = useColorModeValue('gray.800', 'gray.100');
  const onDownloadCV = () => {
    navigate(window.open('./Bayu-Setiawan-Frontend-Developer-CV.pdf'));
  };
  return (
    <Flex data-testid="download-cv">
      <Button role="button" sx={sx.button} color={color} onClick={onDownloadCV}>
        Download Resume
      </Button>
    </Flex>
  );
};

export default DownloadCV;
