import {
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import experience from "../../Service/experience.json";

const Experience = () => {
  const bg = useColorModeValue("#eeeeee", "gray.800");
  const color = useColorModeValue("gray.800", "gray.200");
  return (
    <Stack
      as="section"
      minHeight="100%"
      bg={bg}
      color={color}
      spacing={2}
      px={{ base: "1rem", lg: "10rem" }}
      py={{ base: "2rem", lg: "7rem" }}
      id="experience"
      data-testid="experience-section"
      zIndex={2}
      position="relative"
    >
      <Heading
        fontSize={{ base: 30, lg: 60 }}
        marginBottom={{ base: 1, lg: 50 }}
      >
        My Experience
      </Heading>
      <Flex flexDir="column" gap={10}>
        {experience.map((item, index) => (
          <Flex
            key={index}
            flexDir={{ base: "column", lg: "row" }}
            width="100%"
            borderRadius="20px"
            data-aos="fade-up"
            borderBottom="2px"
            p={5}
            borderColor={color}
          >
            <Stack spacing={1}>
              <Heading fontSize={{ base: 20, lg: 25 }} fontWeight="semibold">
                {item.position} at {item.company}
              </Heading>
              <Text>| {item.periods}</Text>
              <Stack spacing={1}>
                <Heading size="sm">Technology Used</Heading>
                <HStack spacing={3} py={2}>
                  {item.technology_used.map((item, idx) => (
                    <Flex key={idx} alignItems="center">
                      <Image src={item.logo} alt={item.label} h={5} />
                    </Flex>
                  ))}
                </HStack>
              </Stack>
              <Stack spacing={1}>
                <Heading size="sm">Project ({item.project_note})</Heading>
                <UnorderedList paddingLeft={5}>
                  {item.projects?.map((project, index) => (
                    <ListItem key={index}>{project}</ListItem>
                  ))}
                </UnorderedList>
              </Stack>
            </Stack>
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};

export default Experience;
