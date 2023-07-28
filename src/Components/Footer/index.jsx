import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import FramerMotion from '../FramerMotion';
import { footerStyles as sx } from './Footer.styles';

export const Footer = () => {
  const bg = useColorModeValue('#eeeeee', 'gray.900');
  const color = useColorModeValue('gray.800', 'gray.200');
  return (
    <Stack
      sx={sx.container}
      bg={bg}
      color={color}
      as="footer"
      data-testid="footer"
    >
      <FramerMotion />
      <Text sx={sx.copyright}>
        CopyRight © 2022 Bayu Setiawan All Rights Reserved
      </Text>
    </Stack>
  );
};
