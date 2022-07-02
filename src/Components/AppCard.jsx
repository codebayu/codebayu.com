import { Stack, Tooltip, Image } from "@chakra-ui/react";

export const AppCard = (props) => {
  const { label, src } = props;
  return (
    <Tooltip
      hasArrow
      label={label}
      placement="bottom"
      textAlign="center"
      p={2}
      mt={{ base: "0", lg: "3" }}
      rounded="lg"
      bg="gray.800"
      color="#ffd600"
    >
      <Stack
        justify="center"
        h="10rem"
        bg="gray.800"
        rounded="xl"
        py={3}
        px={10}
        shadow="dark-lg"
        _hover={{transform: "translateY(-3px)"}}
      >
        <Image maxW="10rem" src={src} />
      </Stack>
    </Tooltip>
  );
};
