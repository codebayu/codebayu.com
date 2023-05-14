import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { linesStyles as sx } from './Lines.styles';

export const Lines = () => {
  const [animationState, setAnimationState] = useState({
    dashArray: '0px 1px',
    counter: 0,
    isIncrementing: true,
  });

  useEffect(() => {
    const { counter, isIncrementing } = animationState;

    const animationInterval = setInterval(() => {
      let newCounter;
      let newIsIncrementing = isIncrementing;

      if (isIncrementing) {
        newCounter = counter + 0.01;
        if (newCounter >= 1) {
          newCounter = 1;
          newIsIncrementing = false;
        }
      } else {
        newCounter = counter - 0.01; 
        if (newCounter <= 0) {
          newCounter = 0;
          newIsIncrementing = true;
        }
      }

      const newDashArray = `${newCounter}px 1px`;

      setAnimationState({
        ...animationState,
        dashArray: newDashArray,
        counter: newCounter,
        isIncrementing: newIsIncrementing,
      });
    }, 20);

    return () => {
      clearInterval(animationInterval);
    };
  }, [animationState]);
  return (
    <Box sx={sx.container} data-testid="lines">
      <svg data-testid="svg" height='100%' viewBox='400 0 1850 1000' width='100%'>
        <linearGradient
          gradientTransform='matrix(1 0 0 -1 0 1080)'
          gradientUnits='userSpaceOnUse'
          id='SVGID_1_'
          x2='2381.94'
          y1='520.39'
          y2='520.39'
        >
          <stop offset='0' stopColor='#a0aec0'></stop>
          <stop offset='1' stopColor='#c4c4c4'></stop>
        </linearGradient>
        <path
          data-testid='path'
          d='M52,643.32S347.51,130.53,837.24,142.48,1222,688,1071.45,823.33,685.14,1058.24,478.5,899,569.37,441.1,775,496.84s397,417.1,771,374.26,580.55-223.27,525.57-501.67S1836.61,46.92,1749,62.85,1548.6,273.87,1650.8,469s218.3,424.59,713.69,274'
          fill='transparent'
          stroke='url(#SVGID_1_)'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='50'
          pathLength='1'
          strokeDashoffset='0px'
          strokeDasharray={animationState.dashArray}
        ></path>
      </svg>
    </Box>
  );
};
