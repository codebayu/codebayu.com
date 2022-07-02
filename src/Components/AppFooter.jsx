import { Box, HStack, Container, Link, Stack, Text } from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";
import AppFramerMotion from "./AppFramerMotion";
import { AppIcon } from "./AppIcon";

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
      <Text>CopyRight © 2022 Bayu All Rights Reserved</Text>
    </Stack>
  );
};
