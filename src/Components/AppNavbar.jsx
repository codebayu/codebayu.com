import { Link } from "react-scroll";
import { Flex, Center, Menu, Text, HStack } from "@chakra-ui/react";
import AppFramerMotion from "./AppFramerMotion";

export const AppNavbar = () => {
  return (
    <HStack
      justify="space-around"
      pos="fixed"
      left={0}
      right={0}
      top={0}
      bg="black"
      shadow="dark-lg"
      zIndex={10}
    >
      <AppFramerMotion/>
      <HStack fontWeight="bold" color="white" p={5} spacing={{base:"5", lg:"10"}}>
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}><Text _hover={{ color: "#ffd600" }}>Home</Text></Link>
        <Link to="experience" spy={true} smooth={true} offset={-50} duration={500}><Text _hover={{ color: "#ffd600" }}>Experience</Text></Link>
        <Link to="mystack" spy={true} smooth={true} offset={-50} duration={500}><Text _hover={{ color: "#ffd600" }}>My Stack</Text></Link>
      </HStack>
    </HStack>
  );
};
