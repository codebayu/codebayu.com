import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  SimpleGrid,
  Heading,
  Stack,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { AppNavbar } from "./Components/AppNavbar";
import { AppIcon } from "./Components/AppIcon";
import { AppCard } from "./Components/AppCard";
import { AppStack } from "./Components/AppStack";
import { AppFooter } from "./Components/AppFooter";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        as="section"
        height={{ base: "100%", lg: "100vh" }}
        overflowY="auto"
        bg="black"
        color="white"
        py="5rem"
        px={{ base: "1rem", lg: "10rem" }}
        id="home"
      >
        <AppNavbar />
        <Stack spacing={10} justify="center" align="center" h="100%">
          <Heading size="md" color="#ffd600">
            Welcome !
          </Heading>
          <Heading size="2xl" fontWeight="bold">
            I Am Bayu Setiawan
          </Heading>
          <Text textAlign="center">
            I am a frontend developer base in Tangerang, Indonesia who loves to
            build website and learn about programming
          </Text>
          <HStack spacing={7}>
            <AppIcon
              icon={<FaGithub />}
              link="https://github.com/Bayusetiawan45"
              label="Github"
            />
            <AppIcon
              icon={<FaInstagram />}
              link="https://www.instagram.com/bayustr__"
              label="Instagram"
            />
            <AppIcon
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/in/bayu-setiawan99/"
              label="LinkedIn"
            />
            <AppIcon
              icon={<FaEnvelope />}
              link="mailto:bayusetiawanipb@gmail.com"
              label="Email"
            />
            <AppIcon
              icon={<FaWhatsapp />}
              link="https://wa.me/+6282385696549"
              label="Whatsapp"
            />
          </HStack>
          <HStack
            spacing={{ base: "0", lg: "5" }}
            flexDir={{ base: "column-reverse", lg: "row" }}
          >
            <Button
              bg="#ffd600"
              color="black"
              rounded="lg"
              mt={{ base: "1rem", lg: "0" }}
              px="3rem"
              py="1.5rem"
              fontWeight="bold"
              _hover={{ bg: "yellow", color: "black" }}
              onClick={() => {
                navigate(window.open(" https://docs.code-bayu.com/"));
              }}
            >
              See My Documentation
            </Button>
            <Button
              bg="#2b2b2b"
              color="#ffd600"
              rounded="lg"
              px="3rem"
              py="1.5rem"
              fontWeight="bold"
              _hover={{ bg: "gray.800", color: "white" }}
              onClick={() => {
                navigate(window.open("./CV-Bayu-Setiawan.pdf"));
              }}
            >
              Download My CV
            </Button>
          </HStack>
        </Stack>
      </Box>
      <Stack
        as="section"
        align="center"
        height="100%"
        overflowY="auto"
        bg="#ffd600"
        color="black"
        spacing={5}
        px={{ base: "1rem", lg: "10rem" }}
        pt="2rem"
        pb="6rem"
        id="experience"
      >
        <Heading size="xl" fontWeight="bold" mb={8}>
          Experience
        </Heading>
        <SimpleGrid columns={[1, null, 3]} spacing="40px">
          <AppCard src="./ipb.png" label="Student" date="2017 - 2022" />
          <AppCard
            src="./importir.png"
            label="IT Management Trainee"
            date="February - April 2022"
          />
          <AppCard
            src="./importir.png"
            label="Frontend Developer"
            date="April 2022 - Now"
          />
        </SimpleGrid>
      </Stack>
      <Stack
        as="section"
        align="center"
        height="100%"
        justify="center"
        overflowY="auto"
        bg="black"
        color="white"
        spacing={5}
        px={{ base: "1rem", lg: "10rem" }}
        pt="2rem"
        pb="6rem"
        id="mystack"
      >
        <Heading size="lg" fontWeight="bold" mb={8}>
          My Stack
        </Heading>
        <SimpleGrid columns={[3, null, 7]} spacing="40px">
          <AppStack src="./logo512.png" label="React Js" bg="#61dafb" />
          <AppStack src="./redux.png" label="Redux" bg="#764abc" />
          <AppStack src="./firebase.svg" label="Firebase" bg="#fcca3f" />
          <AppStack src="./chakra.png" label="Chakra UI" bg="#45c6c0" />
          <AppStack src="./bootstrap.png" label="Bootstrap" bg="#7709f6" />
          <AppStack src="./html.png" label="HTML" bg="#fc490b" />
          <AppStack src="./css.png" label="CSS" bg="#214ce5" />
        </SimpleGrid>
      </Stack>
      <AppFooter />
    </Box>
  );
}

export default App;
