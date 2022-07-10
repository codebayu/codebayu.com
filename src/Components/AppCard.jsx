import { Stack, Image, Text, Box, Flex, Divider } from "@chakra-ui/react";

export const AppCard = (props) => {
  const { label, src, date } = props;
  return (
      <Stack
        justify="space-around"
        h="100%"
        bg="gray.800"
        rounded="xl"
        py={3}
        px={10}
        shadow="dark-lg"
        _hover={{ transform: "translateY(-3px)", bg:"black" }}
      >
        <Flex align="center" justify="center">
          <Image maxW="10rem" src={src} />
        </Flex>
        <Divider/>
        <Box>
          <Text color="#ffd600" textAlign="center" fontWeight="bold">
            {label}
          </Text>
          <Text color="gray.300" textAlign="center">
            {date}
          </Text>
        </Box>
      </Stack>
  );
};
