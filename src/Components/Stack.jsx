import { Image, Heading, Flex } from '@chakra-ui/react';

export const Stack = (props) => {
  const { label, src, labelColor } = props;
  return (
    <Flex
      flexDir="column"
      textAlign="center"
      alignItems="center"
      shadow="inner"
      justifyContent="space-between"
      bg="#fff"
      p={3}
      rounded="lg"
      data-aos="zoom-in"
    >
      <Image height="2rem" src={src} alt={label} />
      <Heading size="md" color={labelColor} mt={3}>
        {label}
      </Heading>
    </Flex>
  );
};
