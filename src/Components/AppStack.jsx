import {Tooltip, Image } from "@chakra-ui/react";

export const AppStack = (props) => {
  const { label, src, bg } = props;
  return (
    <Tooltip
      hasArrow
      label={label}
      placement="bottom"
      textAlign="center"
      p={1}
      mt={2}
      rounded="md"
      bg={bg}
      color="on-accent"
    >
      <Image maxH="5rem" src={src} />
    </Tooltip>
  );
};
