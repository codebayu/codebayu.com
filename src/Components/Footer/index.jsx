import { Stack, Text } from "@chakra-ui/react";
import FramerMotion from "../FramerMotion";
import { footerStyles as sx } from "./Footer.styles";

export const Footer = () => {
  return (
    <Stack sx={sx.container} as="section" data-testid="footer">
      <FramerMotion />
      <Text sx={sx.copyright}>CopyRight © 2022 Bayu Setiawan All Rights Reserved</Text>
    </Stack>
  );
};
