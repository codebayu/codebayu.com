import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  SimpleGrid,
  Heading,
  Stack,
  Image,
  Flex,
  UnorderedList,
  ListItem,
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
import { AppStack } from "./Components/AppStack";
import { AppFooter } from "./Components/AppFooter";
import { useNavigate } from "react-router-dom";
import experience from "./Service/experience.json"
import stacks from "./Service/stack.json"
import projects from "./Service/projects.json"
import AppProject from "./Components/AppProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        minHeight="100%"
        bg="#fff"
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
        {experience.map((item, index) => (
          <Flex key={index} flexDir={{ base: "column", lg: "row" }} width="100%" py={10} >
            <Box paddingX={10} height={{ base: "100%", lg: "130px" }} minWidth={{ base: "100%", lg: "50%" }} mb={{ base: 5, lg: 0 }}>
              <Image src={item.image} alt="project preview" width="100%" height="100%" />
            </Box>
            <Stack spacing={5}>
              <Heading color="gray.600" >{item.position}</Heading>
              <HStack >
                <Heading color="gray.600" size="sm">{item.company} |</Heading>
                <Text color="gray">{item.periods}</Text>
              </HStack>
              <Stack spacing={1}>
                <Heading color="gray.600" size="sm">Technology Used</Heading>
                <Text color="gray">{item.technology_used}</Text>
              </Stack>
              <Stack spacing={1}>
                <Heading color="gray.600" size="sm">Project ({item.project_note})</Heading>
                <UnorderedList paddingLeft={5}>
                  {item.projects?.map((project, index) => (
                    <ListItem key={index} color="gray">{project}</ListItem>
                  ))}
                </UnorderedList>

              </Stack>
            </Stack>
          </Flex>
        ))}

      </Stack>
      <Stack
        as="section"
        minHeight="100vh"
        overflowY="auto"
        bg="#ffd600"
        color="black"
        spacing={5}
        px={{ base: "1rem", lg: "10rem" }}
        pt="2rem"
        pb="6rem"
        id="myproject"
      >
        <Heading size="lg" textAlign="center" fontWeight="bold" mb={8}>
          My Project
        </Heading>
        <Stack spacing={10}>
          {projects.map((project, index) => (
            <AppProject key={index} project={project} />
          ))}
        </Stack>

      </Stack>
      <Stack
        as="section"
        align="center"
        height="100%"
        justify="center"
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
        <SimpleGrid columns={[2, null, 6]} spacing="40px">
          {stacks.map((stack, index) => (
            <AppStack key={index} src={stack.logo} label={stack.label} labelColor={stack.labelColor} />
          ))}
        </SimpleGrid>
      </Stack>
      <AppFooter />
    </Box>
  );
}

export default App;
