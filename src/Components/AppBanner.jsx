import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AppIcon } from './AppIcon';

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const AppBanner = () => {
  const Contact = [
    {
      label: 'Github',
      link: 'https://github.com/Bayusetiawan45',
      icon: <FaGithub />,
    },
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/bayustr__',
      icon: <FaInstagram />,
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bayu-setiawan99/',
      icon: <FaLinkedinIn />,
    },
    {
      label: 'Email',
      link: 'mailto:bayusetiawanipb@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      label: 'Whatsapp',
      link: 'https://wa.me/+6282385696549',
      icon: <FaWhatsapp />,
    },
  ];
  return (
    <Flex
      w="100%"
      background="#555d9e"
      borderRadius="25px"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 20px 35px"
      overflow="hidden"
      marginTop={50}
      zIndex={1}
      position="relative"
      data-aos="zoom-in"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Flex
        flex={1}
        fontFamily="Roboto"
        padding={{ base: '1rem', lg: '2rem' }}
        flexDir="column"
      >
        <Heading color="gray.200" fontSize={{ base: 16, lg: 20 }} textAlign={{ base: 'center', lg: 'start' }}>Hi!</Heading>
        <Flex
          flexDir="column"
          flex={1}
          justifyContent="center"
          alignItems={{ base: 'center', lg: 'start' }}
          marginLeft={{ base: 0, lg: '5rem' }}
        >
          <Text
            fontSize={{ base: 16, lg: 20 }}
            fontWeight={500}
            color="gray.300"
          >
            Frontend Developer
          </Text>
          <Heading fontSize={{ base: 30, lg: 60 }} color="gray.200">
            Bayu Setiawan
          </Heading>
          <Text fontSize={12} marginTop={4} color="gray.300" maxW="90%" textAlign={{ base: 'center', lg: 'start' }}>
            I am a highly skilled front-end developer with experience in
            building web applications. Proficient in TypeScript and well-versed
            in popular frameworks such as React JS, Next JS, and Material UI.
            With my technical expertise, I am able to create highly performant
            and elegant solutions that are easy to maintain and scale. I am
            always eager to learn new technologies and improve my skills
          </Text>
        </Flex>
        <HStack spacing={3} data-aos="fade-up" marginTop={5} display="flex" justifyContent={{ base: 'center', lg: 'start' }}>
          {Contact.map((item, idx) => (
            <AppIcon
              key={idx}
              icon={item.icon}
              link={item.link}
              label={item.label}
            />
          ))}
        </HStack>
      </Flex>
      <Box
        flex={1}
        position="relative"
        alignItems="end"
        background="rgb(144,135,183)"
        bgGradient="linear-gradient(120deg, rgba(144,135,183,1) 30%, rgba(149,159,244,1) 100%)"
      >
        <Image
          src="./bayu-no-bg.png"
          width="100%"
          alt="my image"
          filter="grayscale(50%) drop-shadow(4px 4px 6px #555d9e)"
        />
        <Box
          width="20rem"
          height="20rem"
          background="#555d9e"
          borderRadius="15rem"
          position="absolute"
          top={-200}
          right={-200}
          _hover={{
            top: -205,
            right: -205,
            transition: '0.7s',
          }}
          display={{ base: 'none', lg: 'block' }}
        />
      </Box>
    </Flex>
  );
};

export default AppBanner;
