import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';
import { downloadCVStyles as sx } from './DownloadCV.styles';

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
    <Flex data-testid="download-cv">
      <Button sx={sx.button} onClick={onDownloadCV}>
        Download My CV
      </Button>
    </Flex>
  );
};

export default DownloadCV;