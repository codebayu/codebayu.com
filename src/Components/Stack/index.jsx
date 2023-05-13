import { Image, Heading, Flex } from '@chakra-ui/react';
import { stackStyles as sx } from './Stack.styles';

export const Stack = (props) => {
  const { label, src, labelColor } = props;
  return (
    <Flex sx={sx.container} data-aos="zoom-in">
      <Image height="2rem" src={src} alt={label} />
      <Heading sx={{...sx.label, color: labelColor}}>
        {label}
      </Heading>
    </Flex>
  );
};
