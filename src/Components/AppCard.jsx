import { Stack, Tooltip, Image } from "@chakra-ui/react";

export const AppCard = (props) => {
const {label, src} = props
  return (
    <Tooltip
      hasArrow
      label={label}
      placement="bottom"
      textAlign="center"
      p={2}
      rounded="lg"
      bg="gray.800"
      color="#ffd600"
    >
      <Stack justify="center" bg="gray.800" rounded="xl" py={3} px={10} shadow="dark-lg">
        <Image maxW="6rem" src={src} />
      </Stack>
    </Tooltip>
  );
};
