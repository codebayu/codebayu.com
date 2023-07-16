import {
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Stack as MyStack } from "../Stack";
import stacks from "../../Service/stack.json";

const Stacks = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.800", "gray.200");
  return (
    <Stack
      as="section"
      minHeight="70vh"
      bg={bg}
      color={color}
      spacing={5}
      px={{ base: "1rem", lg: "10rem" }}
      py={{ base: "2rem", lg: "7rem" }}
      id="mystack"
      data-testid="stacks"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        marginBottom={{ base: 1, lg: 50 }}
      >
        Tech Stack
      </Heading>
      <SimpleGrid columns={[2, null, 6]} spacing="40px">
        {stacks.map((stack, index) => (
          <MyStack
            key={index}
            src={stack.logo}
            label={stack.label}
            labelColor={stack.labelColor}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Stacks;
