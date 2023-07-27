import { Image, Heading, Flex, Box } from '@chakra-ui/react';
import { stackStyles as sx } from './Stack.styles';

export const Stack = (props) => {
  const { label, src, labelColor } = props;
  return (
    <Flex sx={sx.container} data-aos="zoom-in">
      <Box height="2rem">
        <Image height="100%" width="100%" src={src} alt={label} />
      </Box>
      <Heading size="sm" sx={{ ...sx.label, color: labelColor }}>
        {label}
      </Heading>
    </Flex>
  );
};
