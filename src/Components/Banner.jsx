import { Box, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from './Icon';

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const Banner = () => {
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
      w='100%'
      background='gray.300'
      borderRadius='25px'
      boxShadow='rgba(0, 0, 0, 0.35) 0px 20px 35px'
      overflow='hidden'
      marginTop={30}
      zIndex={1}
      position='relative'
      data-aos='zoom-in'
      flexDir={{ base: 'column', lg: 'row' }}
      data-testid="banner"
    >
      <Flex
        flex={1}
        fontFamily='Roboto'
        padding={{ base: '1rem', lg: '2rem' }}
        flexDir='column'
      >
        <Heading
          color='gray.800'
          fontSize={{ base: 16, lg: 20 }}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          Hi! I am,
        </Heading>
        <Flex
          flexDir='column'
          flex={1}
          justifyContent='center'
          alignItems={{ base: 'center', lg: 'start' }}
          gap={4}
        >
          <Heading fontSize={{ base: 30, lg: 60 }} color='gray.800'>
            Bayu Setiawan
          </Heading>
          <Text
            fontSize={{ base: 16, lg: 20 }}
            fontWeight={500}
            color='gray.800'
          >
            Frontend Developer
          </Text>
          <Text
            fontSize={12}
            color='gray.800'
            maxW='95%'
            textAlign={{ base: 'center', lg: 'start' }}
          >
            As a front-end developer, I specialize in building elegant and
            high-performing web applications using TypeScript and popular
            frameworks like Next JS and Nuxt JS. With my
            technical skills, I create solutions that are easy to maintain and
            scale, always striving to learn and implement new technologies. If
            you're looking for a developer who can bring your vision to life
            with style and precision, look no further!
          </Text>
        </Flex>
        <HStack
          spacing={3}
          data-aos='fade-up'
          marginTop={5}
          display='flex'
          justifyContent={{ base: 'center', lg: 'start' }}
        >
          {Contact.map((item, idx) => (
            <Icon
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
        position='relative'
        alignItems='end'
        background='gray.300'
        bgGradient='linear-gradient(120deg, gray.400 30%, gray.300 100%)'
      >
        <Image
          src='./bayu-no-bg.png'
          width='100%'
          alt='my image'
          filter='grayscale(50%) drop-shadow(4px 4px 6px #fcfcfc)'
        />
        <Box
          width='20rem'
          height='20rem'
          background='gray.400'
          borderRadius='15rem'
          position='absolute'
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

export default Banner;
