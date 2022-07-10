import {Stack, Text } from "@chakra-ui/react";
import AppFramerMotion from "./AppFramerMotion";

export const AppFooter = () => {
  return (
    <Stack
      as="section"
      align="center"
      height="100%"
      overflowY="auto"
      bg="#ffd600"
      color="black"
      spacing={5}
      px={{ base: "1rem", lg: "10rem" }}
      py="2rem"
    >
      <AppFramerMotion/>
      <Text>CopyRight © 2022 Bayu Setiawan All Rights Reserved</Text>
    </Stack>
  );
};
