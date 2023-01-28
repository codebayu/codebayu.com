import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { AppNavbar } from './Components/AppNavbar';
import { AppStack } from './Components/AppStack';
import { AppFooter } from './Components/AppFooter';
import experience from './Service/experience.json';
import stacks from './Service/stack.json';
import projects from './Service/projects.json';
import AppProject from './Components/AppProject';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppBanner from './Components/AppBanner';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AppBubble from './Components/AppBubble';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box>
      <Box
        as="section"
        height={{ base: '100%', lg: '100vh' }}
        bg="#353a6b"
        color="white"
        py="2rem"
        px={{ base: '1rem', lg: '10rem' }}
        id="home"
      >
        <AppBubble />
        <AppNavbar />
        <AppBanner />
      </Box>
      {/* Experience */}
      <Stack
        as="section"
        minHeight="100%"
        bg="#353a6b"
        color="black"
        spacing={5}
        px={{ base: '1rem', lg: '10rem' }}
        pt="2rem"
        pb="6rem"
        id="experience"
      >
        <Heading
          fontSize={{ base: 30, lg: 60 }}
          color="gray.200"
          marginBottom={{ base: 1, lg: 50 }}
        >
          My Experience___
        </Heading>
        <SimpleGrid spacing={10}>
          {experience.map((item, index) => (
            <Flex
              key={index}
              flexDir={{ base: 'column', lg: 'row' }}
              width="100%"
              p={5}
              color="gray.200"
              border="1px solid #9087b7"
              borderRadius="20px"
              data-aos="fade-up"
            >
              <Stack spacing={5}>
                <Heading fontSize={30}>{item.position}</Heading>
                <HStack>
                  <Heading size="sm">{item.company} |</Heading>
                  <Text>{item.periods}</Text>
                </HStack>
                <Stack spacing={1}>
                  <Heading size="sm">Technology Used</Heading>
                  <Text>{item.technology_used}</Text>
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
        </SimpleGrid>
      </Stack>
      {/* Project */}
      <Stack
        as="section"
        overflowY="auto"
        bg="#353a6b"
        color="gray.200"
        spacing={5}
        px={{ base: '1rem', lg: '4rem' }}
        pt="2rem"
        pb="6rem"
        id="myproject"
        position="relative"
      >
        <Heading
          fontSize={{ base: 30, lg: 60 }}
          color="gray.200"
          marginBottom={{ base: 1, lg: 50 }}
        >
          My Project___
        </Heading>
        <Stack spacing={10} position="relative">
          {projects.map((project, index) => (
            <AppProject key={index} project={project} />
          ))}
        </Stack>
        <Box
          width="50rem"
          height="50rem"
          background="#3f4479"
          borderRadius="25rem"
          position="absolute"
          right={-500}
          top={300}
        />
      </Stack>

      {/* Stack */}
      <Stack
        as="section"
        minHeight="70vh"
        bg="#353a6b"
        color="gray.200"
        spacing={5}
        px={{ base: '1rem', lg: '4rem' }}
        pt="2rem"
        id="mystack"
        bgGradient="linear-gradient(180deg, #353a6b 30%, rgba(149,159,244,1) 100%)"
      >
        <Heading
          fontSize={{ base: 30, lg: 60 }}
          color="gray.200"
          marginBottom={{ base: 1, lg: 50 }}
        >
          My Stack___
        </Heading>
        <SimpleGrid columns={[2, null, 6]} spacing="40px">
          {stacks.map((stack, index) => (
            <AppStack
              key={index}
              src={stack.logo}
              label={stack.label}
              labelColor={stack.labelColor}
            />
          ))}
        </SimpleGrid>
      </Stack>
      <AppFooter />
    </Box>
  );
}

export default App;
