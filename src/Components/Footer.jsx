import { Stack, Text } from "@chakra-ui/react";
import FramerMotion from "./FramerMotion";

export const Footer = () => {
  return (
    <Stack
      as="section"
      align="center"
      height="100%"
      overflowY="auto"
      bg="rgba(149,159,244,1)"
      color="black"
      spacing={5}
      px={{ base: "1rem", lg: "10rem" }}
      py="2rem"
    >
      <FramerMotion />
      <Text textAlign="center">CopyRight © 2022 Bayu Setiawan All Rights Reserved</Text>
    </Stack>
  );
};
