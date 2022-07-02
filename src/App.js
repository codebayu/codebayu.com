import React from "react";
import {
  Box,
  Text,
  HStack,
  Flex,
  Button,
  SimpleGrid,
  Heading,
  Image,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaReact,
} from "react-icons/fa";
import AppNavbar from "./Components/AppNavbar";
import FramerMotion from "./Components/AppFramerMotion";
import { AppIcon } from "./Components/AppIcon";
import { AppCard } from "./Components/AppCard";
import { AppStack } from "./Components/AppStack";

function App() {
  return (
    <Box>
      <Box
        as="section"
        height="100vh"
        overflowY="auto"
        bg="black"
        color="white"
        px="10rem"
      >
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
          <FramerMotion />
          <HStack fontWeight="bold" color="white" p={5} spacing={10}>
            <Text _hover={{ color: "#ffd600" }}>Home</Text>
            <Text _hover={{ color: "#ffd600" }}>About</Text>
            <Text _hover={{ color: "#ffd600" }}>Stack</Text>
            <Text _hover={{ color: "#ffd600" }}>Project</Text>
          </HStack>
        </HStack>
        <Stack spacing={10} justify="center" h="80%">
          <Heading size="md" color="#ffd600">
            Welcome !
          </Heading>
          <Heading size="2xl" fontWeight="bold">
            I Am Bayu Setiawan
          </Heading>
          <Text maxW="50%">
            I am a frontend developer base in Tangerang, Indonesia who loves to
            build website and learn about programming
          </Text>
          <HStack spacing={7}>
            <AppIcon icon={<FaGithub />} link="/" label="Github" />
            <AppIcon icon={<FaInstagram />} link="/" label="Instagram" />
            <AppIcon icon={<FaLinkedinIn />} link="/" label="LinkedIn" />
            <AppIcon icon={<FaEnvelope />} link="/" label="Email" />
            <AppIcon icon={<FaWhatsapp />} link="/" label="Whatsapp" />
          </HStack>
        </Stack>
      </Box>
      <Stack
        as="section"
        align="center"
        height="50vh"
        overflowY="auto"
        bg="#ffd600"
        color="black"
        spacing={5}
        px="10rem"
        py="2rem"
      >
        <Heading size="xl" fontWeight="bold" mb={8}>
          Experience
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          <AppCard src="./ipb.png" label="2017 - 2022 as Student" />
          <AppCard
            src="./importir.png"
            label="February - April 2022 as IT MT"
          />
          <AppCard
            src="./importir.png"
            label="April - Now as Frontend Developer"
          />
        </SimpleGrid>
      </Stack>
      <Stack
        as="section"
        align="center"
        height="50vh"
        overflowY="auto"
        bg="black"
        color="white"
        spacing={5}
        px="10rem"
        py="2rem"
      >
        <Heading size="lg" fontWeight="bold" mb={8}>
          My Stack
        </Heading>
        <SimpleGrid columns={[2, null, 6]} spacing="40px">
          <AppStack src="./logo512.png" label="React Js" bg="#61dafb" />
          <AppStack src="./redux.png" label="Redux" bg="#764abc" />
          <AppStack src="./chakra.png" label="Chakra UI" bg="#45c6c0" />
          <AppStack src="./bootstrap.png" label="Bootstrap" bg="#7709f6" />
          <AppStack src="./html.png" label="HTML" bg="#fc490b" />
          <AppStack src="./css.png" label="CSS" bg="#214ce5" />
        </SimpleGrid>
      </Stack>
      <Stack
        as="section"
        align="center"
        height="100vh"
        overflowY="auto"
        bg="#ffd600"
        color="black"
        spacing={5}
        px="10rem"
        py="2rem"
      >
        <Heading size="lg" fontWeight="bold" mb={5}>
          My Project
        </Heading>
      </Stack>
    </Box>
  );
}

export default App;
