import { Stack, Image, Text, Box, Flex, Divider } from '@chakra-ui/react';
import { cardStyles as sx } from './Card.styles';

export const Card = (props) => {
  const { label, src, date } = props;
  return (
    <Stack sx={sx.container}>
      <Flex sx={sx.wrapImage}>
        <Image maxW="10rem" src={src} alt={src} />
      </Flex>
      <Divider />
      <Box>
        <Text sx={sx.label}>{label}</Text>
        <Text sx={sx.date}>{date}</Text>
      </Box>
    </Stack>
  );
};
